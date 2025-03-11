import {test, expect} from '@playwright/test'

test.beforeEach('Open browser and launch website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('select check boxes', async({page}) => {
    await page.pause()
    const singleCheckBox = page.locator('input#checkBoxOption1')
    
    // clicking a check box - it performs the click regarless the state of the checkbox
    await singleCheckBox.click()

    // check() - checks only when the check box is in unchecked status
    await singleCheckBox.check({force: true})

    // uncheck() - unchecks only when the check box is in checked status
    await singleCheckBox.uncheck()

    // checking array of checkboxes
    const allCheckBoxes = page.locator('input[id*="checkBoxOption"]')
    for(const checkbox of await allCheckBoxes.all()) {
        await checkbox.check()
        expect(checkbox).toBeChecked()
    }

})