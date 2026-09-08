import SwiftUI
import StoreKit

@main
struct NoirMarketApp: App {
    @StateObject private var store = CityStore()
    @Environment(\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            VStack(spacing: 0) {
                GameView(store: store)
                HStack {
                    Button("Restore purchases") { Task { await store.restore() } }
                    Spacer()
                    Button("Privacy & support") { store.showInformation = true }
                }
                .font(.caption)
                .padding(12)
                .background(Color.black)
            }
            .background(Color.black)
            .preferredColorScheme(.dark)
            .sheet(isPresented: $store.showPurchase) { PurchaseView(store: store) }
            .sheet(isPresented: $store.showInformation) {
                NavigationStack {
                    ScrollView {
                        VStack(alignment: .leading, spacing: 18) {
                            Text("Noir Market").font(.title.bold())
                            Text("A fictional strategy game. Nothing in the game represents a real-world sale or transaction.")
                            Text("Game progress and settings are stored on this device. This build has no advertising, analytics, account registration or online leaderboard. Apple handles purchases. Deleting the app can remove your local progress; restoring purchases restores the city unlock, not a saved game.")
                            Text("Support: Ryan Mullen · Redhead Games")
                            Text("ryanmullenuk@yahoo.co.uk").textSelection(.enabled)
                            Link("Email support", destination: URL(string: "mailto:ryanmullenuk@yahoo.co.uk?subject=Noir%20Market%20support")!)
                            Link("Support website", destination: URL(string: "https://redhead.games/support.html")!)
                            Link("Privacy policy", destination: URL(string: "https://redhead.games/privacy.html")!)
                            Text("If you email support, your address and the information you send are used to respond to your enquiry. Public support and privacy pages use separate website hosting. The privacy policy explains these services and your choices.")
                                .font(.callout)
                        }.padding()
                    }
                    .navigationTitle("Privacy & support")
                    .toolbar { Button("Done") { store.showInformation = false } }
                }
            }
            .alert("Noir Market", isPresented: Binding(
                get: { store.notice != nil },
                set: { if !$0 { store.notice = nil } }
            )) { Button("OK") { store.notice = nil } }
            message: { Text(store.notice ?? "") }
            .task { await store.start() }
            .onChange(of: scenePhase) { phase in
                if phase == .active { Task { await store.refreshEntitlement() } }
            }
        }
    }
}

struct PurchaseView: View {
    @ObservedObject var store: CityStore

    var body: some View {
        NavigationStack {
            VStack(spacing: 24) {
                Text("Unlock All Cities").font(.largeTitle.bold())
                Text("One purchase unlocks all 14 cities and their travel and shipping routes. No subscription.")
                if let product = store.product {
                    Button("Unlock for \(product.displayPrice)") {
                        Task { await store.purchase() }
                    }
                    .buttonStyle(.borderedProminent)
                    .disabled(store.busy)
                } else {
                    Text("The purchase is currently unavailable. You can still play the three free cities.")
                    Button("Try again") { Task { await store.loadProduct() } }
                        .disabled(store.busy)
                }
                Button("Restore purchases") { Task { await store.restore() } }
                    .disabled(store.busy)
                if store.busy { ProgressView() }
                if let message = store.purchaseMessage { Text(message).font(.callout) }
            }
            .multilineTextAlignment(.center)
            .padding(24)
            .toolbar { Button("Close") { store.showPurchase = false }.disabled(store.busy) }
            .task { await store.loadProduct() }
        }
    }
}
