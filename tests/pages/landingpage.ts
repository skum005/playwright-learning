import {Locator, Page} from '@playwright/test'
import { BasePage } from './basepage'

export class LandingPage extends BasePage {

    confirmBtn: Locator

    constructor(page: Page) {
        super(page)
        this.confirmBtn = page.locator('input#confirmbtn')
    }

    async enterName(name: string) {
        const nameTextField = this.page.locator('input#name')
        await nameTextField.fill(name)
        await this.confirmBtn.click()
        await this.waitForTimeInSeconds(2)
    }

}