import { test, expect } from '@playwright/test';

//Just for the purpose of this assessment, fixed credentials are used so that the same credentials are consistently used for Postman API test as well
let username = "sativelNathan";
let password = "Newpassword1!";

test("Quantios - Login", async ({page})=>
{
    //Navigate to the login page
    await page.goto("https://qainterview.netlify.app/")
    await expect(page.locator("div h2")).toHaveText("Login")

    //Login
    await page.locator("#username").fill(username)
    await page.locator("#password").fill(password)
    await page.locator("#loginBtn").click()
    await expect(page.locator("#greeting")).toHaveText("Hi "+ username + "!")
    await expect(page.locator("div h1")).toHaveText("Stock Market Dashboard")

});