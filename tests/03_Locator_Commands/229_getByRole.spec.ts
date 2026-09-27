import { test, expect } from '@playwright/test';

test('Verify the error message in the wingify free trial', async ({ page }) => {
  await page.goto('https://app.wingify.com/#/login');

  const username = page.locator('input[type="email"], input[name*="email" i], input[placeholder*="Email" i]').first();
  const password = page.locator('input[type="password"], input[name*="password" i], input[placeholder*="Password" i]').first();

  await username.fill('admin@vwo.com');
  await password.fill('1234');

  await page.pause();
});

// import { test, expect} from '@playwright/test';

// test("Verfiy the error message in the wingify free trial", async({ page})=>{


//     await page.goto("https://app.wingify.com/#/login");
//     let username = page.getByRole("textbox",{ name: "Email", exact :true});
//     let password = page.getByRole("textbox",{ name: "Password"});

//     // username.nth(1);
//     await username.fill('admin@vwo.com');
//     await password.fill('1234');

//     await page.pause();

// });