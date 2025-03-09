import {test} from '@playwright/test'

test.beforeEach('Open browser & website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Diffrent ways of finding child elements', async({page}) => {
    await Promise.all([
        // in css selectors space is used for child element. example below
        page.locator('div button:text-is("Open Window")'),
        
        //combination of locator and role
        page.locator('fieldset').getByRole('textbox', {placeholder : "Enter Your Name"}).first().fill('Santosh')
    ])
})