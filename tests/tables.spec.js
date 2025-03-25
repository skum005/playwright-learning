import {test, expect} from '@playwright/test'

test.beforeEach('Open browser and launch website', async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})

test('Interact with tables - identify unique target row and work on it', async({page}) => {
    const targetRow = page.getByRole('table').locator('tbody tr').filter({hasText: 'WebSecurity Testing for Beginners-QA knowledge to next level'})
    
    const price = targetRow.locator('td')
     // in the below line of code we are using last()/nth() method to find the last column but in reality go for a locator which uniquely identifies the column
    const expectedText = await price.last().textContent()
    expect(expectedText).toEqual('20')
})

test('Identify row and column index', async({page}) => {
    // print contents of Course column
    
    // identify the column index
    const columns = page.locator('table[name="courses"] th')
    let columnIndex = 1
    /* for(let index = 0; index < (await columns.all()).length; index++) {
        if(await columns[index].textContent() === 'Course')
            columnIndex = index;
    } */
    for(const columnName of await columns.all()) {
        if(await columnName.textContent() != 'Course')
            columnIndex += 1
        else
            break
    }
    
    console.log('Column index is ', columnIndex)
    // iterate through all the column of each row and print the contents
    let targetColumnLocator = 'table[name="courses"] tr td:nth-of-type(columnIndex)'.replace('columnIndex', columnIndex)
    const targetColumnELements = page.locator(targetColumnLocator)
    for(const targetColumn of await targetColumnELements.all()) {
        console.log(await targetColumn.textContent())
    }
    /* for(let index = 1; index < await targetColumnELements.all(); index++) {
        console.log(await targetColumnELements[index].textContent())
    } */

})