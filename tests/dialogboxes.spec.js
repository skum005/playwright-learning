import {test, expect} from '@playwright/test'

test.beforeEach('Open browser and launch URL', async({page}) =>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Interact with dialogue box', async({page}) => {
    const nameTextBox = page.locator('input#name')
    const alertButton = page.locator('input#alertbtn')
    await nameTextBox.fill('Rishi')
    await page.pause()
    await alertButton.click()
    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Hello Rishi, share this practice page and share your knowledge') 
        dialog.accept()
    })
})