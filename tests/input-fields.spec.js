import {test, expect} from '@playwright/test'

test.beforeEach('Open browser & load website', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Enter value in a text box', async ({page}) => {
    const textField = page.locator('input#name')
    await textField.fill('Santosh')
    await textField.clear()
    await textField.fill('Rishi')
    // location assertion method - toHaveValue() for validaing values in a text box
    await expect(textField).toHaveValue('Rishi')
})

test('Simulate keyboard typing', async ({page}) => {
    const textField = page.locator('input#name')
    await textField.pressSequentially('Vasavi')
    await textField.clear()
    await textField.pressSequentially('Rishi', {delay: 100})
    const value = await textField.inputValue()
    expect(value).toEqual('Rishi')
})