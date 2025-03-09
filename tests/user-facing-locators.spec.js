import {test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})


test('User facing locator examples', async ({page})=> {
    // in the below example we are looking for an element which is a textbox containing(placeholder text) some text
    await page.getByRole('textbox', {name : "Type to Select Countries"}).click()
    //await page.getByRole('button', {name : 'Open Window'}).click()
    await page.getByLabel('').fill('user input')
    // elements with place holder
    await page.getByPlaceholder('').fill('user input')
    // elements with text
    await page.getByText('').click()
    // elements with title attribute
    await page.getByTitle('').click()
    //test id is the identifier defined in source code by the developers - please note that this is not user facing
    // data-testid is the new attribute to be introduced in the source code. This attribute is reserved by PlayWright
    await page.getByTestId('').click()
    // if there are multiple elements identified with the same locator you can make use of first() and last() methods
    await page.locator('').first().click()
    await page.getByRole('textbox').last().fill('some user input')
})