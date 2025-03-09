import {test, expect} from '@playwright/test'

test.beforeEach('Open browser & load website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Generic assertions', async({page}) => {
    // equality
    const expectedName = 'Rishi'
    expect(expectedName).toEqual('Rishi')

    // array containing a value
    const names = ['Rishi', 'Santosh', 'Vasavi']
    expect(names).toContain('Rishi')

    // length of array
    expect(expectedName).toHaveLength(5)

    // true or false
    let isElemenetEnabled = true
    expect(isElemenetEnabled).toBeTruthy()

})

test('Locator assertions', async({page}) => {
    const nameTextBox = await page.locator('input#name')
    nameTextBox.fill('Rishi')
    //locator assertions should have await keyword 
    await expect(nameTextBox).toHaveValue('Rishi')
})

test.only('Soft assertions - to continue execution', async ({page}) => {
    const nameTextBox = await page.locator('input#name')
    nameTextBox.fill('Rishi')
    await expect.soft(nameTextBox).toHaveValue('Rishaan')
    await nameTextBox.clear()
    await page.pause()
})