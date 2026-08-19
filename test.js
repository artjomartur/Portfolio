import puppeteer from 'puppeteer';
import { exec } from 'child_process';

(async () => {
  const server = exec('npm run preview');
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  await page.goto('http://localhost:4173');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  await browser.close();
  server.kill();
  process.exit(0);
})();
