import {expect, test} from '@playwright/test'

test.beforeEach('Launch', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Update an attribute of element', async({page}) => {
    await page.pause()
    const inputTextBoxElement = page.locator('input#displayed-text')
    await inputTextBoxElement.evaluate(node => {
        node.setAttribute('style', 'display: none;')
    })
    const value = await inputTextBoxElement.getAttribute('style')
    expect(value).toEqual('display: none;')
})