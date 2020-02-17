const puppeteer = require('puppeteer');
const { toMatchImageSnapshotAsync, toMatchImageSnapshot } = require('../../src');

describe('the thing', () => {
  let browser;
  afterEach(() => browser.close());
  it('works', async () => {
    expect.extend({ toMatchImageSnapshotAsync });
    expect.extend({ toMatchImageSnapshot });

    browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');

    expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
    // expect(await page.screenshot()).toMatchImageSnapshotAsync();
  });
});
