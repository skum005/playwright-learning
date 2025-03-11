import { test, expect } from '@playwright/test'

test.beforeEach('Open browser & load url', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Radio buttons', async ({page}) => {
    const radioBtn =  page.locator('input[value="radio1"]')

    // check visible radio btn
    await radioBtn.check()

    //check invisible radio btn
    await radioBtn.check({force: true})

    // locator assertion
    expect(radioBtn).toBeChecked()

    // general assertion
    const isChecked = await radioBtn.isChecked()
    expect(isChecked).toBeTruthy()
})