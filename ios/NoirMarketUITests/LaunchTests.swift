import XCTest

final class LaunchTests: XCTestCase {
    override func setUpWithError() throws {
        continueAfterFailure = false
    }

    @MainActor
    private func enterGame(_ app: XCUIApplication) {
        app.launch()
        let enter = app.webViews.buttons["Enter Noir Market"]
        XCTAssertTrue(enter.waitForExistence(timeout: 20), "Bundled game must reach its title screen")
        enter.tap()
        XCTAssertTrue(app.webViews.buttons["FREE PLAY"].waitForExistence(timeout: 10))
    }

    @MainActor
    func testFreePlayReachesTheGame() {
        let app = XCUIApplication()
        enterGame(app)
        app.webViews.buttons["FREE PLAY"].tap()
        let play = app.webViews.buttons["PLAY FREE"]
        XCTAssertTrue(play.waitForExistence(timeout: 5))
        // WebKit exposes the CSS-transformed uppercase labels to accessibility.
        // aria-pressed city choices may also be exposed as toggle controls.
        for city in ["London", "Manchester", "Birmingham"] {
            let choice = app.webViews.descendants(matching: .any)
                .matching(NSPredicate(format: "label ==[c] %@", city)).firstMatch
            XCTAssertTrue(choice.exists, "Missing city choice: \(city)\n\(app.debugDescription)")
        }
        app.webViews.descendants(matching: .any)
            .matching(NSPredicate(format: "label ==[c] %@", "Manchester")).firstMatch.tap()
        play.tap()
        let buy = app.webViews.buttons.matching(NSPredicate(format: "label ==[c] %@", "Buy")).firstMatch
        XCTAssertTrue(buy.waitForExistence(timeout: 5))
        for _ in 0..<5 where !buy.isHittable { app.webViews.firstMatch.swipeUp() }
        XCTAssertTrue(buy.isHittable, "The title or modal must not cover the running game")
        let screenshot = XCTAttachment(screenshot: app.screenshot())
        screenshot.name = "Free Play on iPhone simulator"
        screenshot.lifetime = .keepAlways
        add(screenshot)
    }

    @MainActor
    func testPrivacySheetCanBeDismissed() {
        let app = XCUIApplication()
        enterGame(app)
        app.buttons["Privacy & support"].tap()
        let done = app.buttons["Done"]
        XCTAssertTrue(done.waitForExistence(timeout: 5))
        done.tap()
        XCTAssertTrue(app.webViews.buttons["FREE PLAY"].waitForExistence(timeout: 5))
        XCTAssertTrue(app.webViews.buttons["FREE PLAY"].isHittable)
    }
}
