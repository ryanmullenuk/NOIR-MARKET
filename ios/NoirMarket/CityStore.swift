import Foundation
import Combine
import StoreKit

@MainActor
final class CityStore: ObservableObject {
    static let productID = "games.redhead.noirmarket.unlockallcities"
    @Published private(set) var unlocked = false
    @Published private(set) var product: Product?
    @Published private(set) var busy = false
    @Published var showPurchase = false
    @Published var showInformation = false
    @Published var purchaseMessage: String?
    @Published var notice: String?
    var entitlementChanged: ((Bool, Bool) -> Void)?
    private var updates: Task<Void, Never>?

    func start() async {
        if updates == nil {
            updates = Task { [weak self] in
                for await result in Transaction.updates {
                    guard let self else { return }
                    guard case .verified(let transaction) = result,
                          transaction.productID == Self.productID else { continue }
                    await self.refreshEntitlement(completeStart: true)
                    await transaction.finish()
                }
            }
        }
        await refreshEntitlement()
    }

    func refreshEntitlement(completeStart: Bool = false) async {
        var entitled = false
        for await result in Transaction.currentEntitlements {
            if case .verified(let transaction) = result,
               transaction.productID == Self.productID,
               transaction.revocationDate == nil {
                entitled = true
            }
        }
        unlocked = entitled
        entitlementChanged?(entitled, completeStart && entitled)
        if completeStart && entitled { showPurchase = false }
    }

    func loadProduct() async {
        guard !busy else { return }
        busy = true
        defer { busy = false }
        do {
            product = try await Product.products(for: [Self.productID]).first
            purchaseMessage = product == nil ? "Product not available from the App Store yet." : nil
        } catch {
            purchaseMessage = "Cannot reach the App Store. Please try again later."
        }
    }

    func purchase() async {
        guard !busy, let product else { return }
        busy = true
        purchaseMessage = nil
        defer { busy = false }
        do {
            switch try await product.purchase() {
            case .success(let result):
                guard case .verified(let transaction) = result,
                      transaction.productID == Self.productID else {
                    purchaseMessage = "Apple could not verify this purchase. No unlock was applied."
                    return
                }
                await refreshEntitlement(completeStart: true)
                await transaction.finish()
            case .pending:
                purchaseMessage = "Your purchase is awaiting approval. Free Play is still available."
            case .userCancelled:
                purchaseMessage = "Purchase cancelled. You have not been charged."
            @unknown default:
                purchaseMessage = "Purchase not completed. Please try again."
            }
        } catch {
            purchaseMessage = "Purchase not completed. Please try again later."
        }
    }

    func restore() async {
        guard !busy else { return }
        busy = true
        defer { busy = false }
        do {
            try await AppStore.sync()
            await refreshEntitlement(completeStart: true)
            notice = unlocked ? "All cities restored." : "No city unlock was found for this Apple account."
        } catch {
            if showPurchase { purchaseMessage = "Could not restore purchases. Please try again." }
            else { notice = "Could not restore purchases. Please try again." }
        }
    }
}
