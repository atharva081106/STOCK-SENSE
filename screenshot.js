const puppeteer = require('puppeteer');

(async () => {
  console.log("Starting Puppeteer...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log("Navigating to login...");
  await page.goto('http://127.0.0.1:3000/login');
  
  console.log("Typing credentials...");
  await page.type('input[type="email"]', 'admin@stocksense.com');
  await page.type('input[type="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  console.log("Waiting for dashboard...");
  await page.waitForNavigation();
  await new Promise(r => setTimeout(r, 2000));
  
  console.log("Activating dark mode...");
  await page.evaluate(() => {
    const btn = document.querySelector('.theme-toggle-btn');
    if (btn) btn.click();
  });
  
  // Wait for the transition to finish
  await new Promise(r => setTimeout(r, 1000));
  
  console.log("Taking screenshot...");
  await page.screenshot({ path: 'public/dashboard-preview.png' });
  
  await browser.close();
  console.log("Done");
})();
