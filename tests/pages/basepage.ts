import { Page } from "@playwright/test";

// base page has all methods/variables common to all pages and every page class extend this
export class BasePage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async waitForTimeInSeconds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000)
    }

}