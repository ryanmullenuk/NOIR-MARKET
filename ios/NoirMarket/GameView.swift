import SwiftUI
import WebKit

struct GameView: UIViewRepresentable {
    @ObservedObject var store: CityStore

    func makeCoordinator() -> Coordinator { Coordinator(store: store) }

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.websiteDataStore = .default()
        configuration.allowsInlineMediaPlayback = true
        configuration.userContentController.add(context.coordinator, name: "noirPurchase")
        configuration.userContentController.addUserScript(WKUserScript(
            source: "window.__NOIR_IOS_ENTITLED = false;",
            injectionTime: .atDocumentStart, forMainFrameOnly: true))
        let web = WKWebView(frame: .zero, configuration: configuration)
        web.isOpaque = false
        web.backgroundColor = .black
        web.scrollView.backgroundColor = .black
        web.scrollView.bounces = false
        web.scrollView.contentInsetAdjustmentBehavior = .never
        web.navigationDelegate = context.coordinator
        context.coordinator.web = web
        store.entitlementChanged = { [weak coordinator = context.coordinator] unlocked, complete in
            coordinator?.syncEntitlement(unlocked, completeStart: complete)
        }
        if let folder = Bundle.main.url(forResource: "Web", withExtension: nil) {
            context.coordinator.webRoot = folder.standardizedFileURL
            web.loadFileURL(folder.appendingPathComponent("index.html"), allowingReadAccessTo: folder)
        } else {
            store.notice = "Game files are missing. Run npm run ios:prepare before building."
        }
        return web
    }

    func updateUIView(_ web: WKWebView, context: Context) {}

    static func dismantleUIView(_ web: WKWebView, coordinator: Coordinator) {
        web.configuration.userContentController.removeScriptMessageHandler(forName: "noirPurchase")
        coordinator.store.entitlementChanged = nil
    }

    @MainActor
    final class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
        let store: CityStore
        weak var web: WKWebView?
        var webRoot: URL?
        private var ready = false

        init(store: CityStore) { self.store = store }

        func syncEntitlement(_ unlocked: Bool, completeStart: Bool) {
            guard ready, let web else { return }
            let value = unlocked ? "true" : "false"
            let callback = completeStart && unlocked
                ? "window.NOIR_MARKET_UNLOCK_ALL_CITIES();"
                : "window.NOIR_MARKET_RESTORE_UNLOCK(\(value));"
            web.evaluateJavaScript("window.__NOIR_IOS_ENTITLED=\(value);\(callback)") { _, error in
                if error != nil { self.store.notice = "Could not update city access. Please reopen the app." }
            }
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            ready = true
            Task { await store.refreshEntitlement() }
        }

        func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
            ready = false
        }

        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            store.notice = "Could not load the bundled game. Please reopen the app."
        }

        func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
            ready = false
            webView.reload()
        }

        func isBundled(_ url: URL) -> Bool {
            guard url.isFileURL, let root = webRoot else { return false }
            return url.standardizedFileURL.path.hasPrefix(root.path + "/")
        }

        func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction,
                     decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = action.request.url, isBundled(url) else {
                decisionHandler(.cancel)
                return
            }
            decisionHandler(.allow)
        }

        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            guard ready, message.frameInfo.isMainFrame,
                  let url = message.frameInfo.request.url, isBundled(url),
                  let payload = message.body as? [String: String],
                  payload["productId"] == CityStore.productID else { return }
            store.purchaseMessage = nil
            if store.unlocked { syncEntitlement(true, completeStart: true) }
            else { store.showPurchase = true }
        }
    }
}
