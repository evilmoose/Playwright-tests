import {expect, test} from '@playwright/test';

// test(string, testfunction) 
// This test os for reference
test('Browser Context Playwright test', async ({browser}) => {
    // playwright code goes here

    // chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();
})