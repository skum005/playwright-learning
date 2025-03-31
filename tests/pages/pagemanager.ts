import { Page } from "@playwright/test";
import { LandingPage } from "./landingpage";

// to manage all page objects in a single class, we use PageObjectManager
// in the actual tests instead of creating page objects for all pages,
// just create object for this class and access all page objects through that object
export class PageObjectManager {

    readonly page: Page
    private readonly landingPage: LandingPage

    constructor(page: Page) {
        this.page = page
        this.landingPage = new LandingPage(this.page)
    }

    getLandingPage() {
        return this.landingPage;
    }

}