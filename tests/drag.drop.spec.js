import {test} from '@playwright/test'

test.beforeEach('Launch', async({page}) => {
    await page.goto('https://demoqa.com/droppable')
})

test('Drag and drop', async({page}) => {
    const draggableElement = page.locator('div#draggable').first()
    const droppableElement = page.locator('div#droppable').first()
    await draggableElement.dragTo(droppableElement)
})