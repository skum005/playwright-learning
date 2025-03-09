import test, { expect } from '@playwright/test'

test.beforeEach('Open browser and load URL', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Extract text', async({page})=> {
    const radioBtnExampleHeading = await page.locator('div#radio-btn-example legend').textContent()
    console.log(radioBtnExampleHeading)
    expect(radioBtnExampleHeading).toEqual('Radio Button Example')
})

test('Extracting attribute value', async ({page})=>{
    const radioBtn1 = await page.locator('input[value="radio1"]')
    const type = await radioBtn1.getAttribute('type')
    expect(type).toEqual('radio')
})

test('Extracting properties e.g. value in a text box', async({page}) => {
    const nameTextBox = await page.locator('input#name')
    await nameTextBox.fill('Santosh')
    const enteredValue = await nameTextBox.inputValue()
    expect(enteredValue).toEqual('Santosh')
})

test('Extracting inner text(visible to user)', async({page})=> {
    const heading = await page.locator('div#select-class-example legend').innerText()
    expect(heading).toEqual('Suggession Class Example')
})

test('Extracting text from multiple elements', async({page})=>{
    const names = await page.locator('table#product tbody td:nth-of-type(2)').allTextContents()
    console.log('Course Names: ', names)
    expect(names).toContain('Engineer')
})