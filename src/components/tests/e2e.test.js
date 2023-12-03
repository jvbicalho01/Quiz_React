// import puppeteer from "puppeteer";
import { Puppeteer } from "puppeteer"
import { launch } from "puppeteer"

describe("Quiz Title", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
  });

  test("Testando se contém a mensagem de tílulo do quiz", async () => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector("h1");
    const text = await page.$eval("h1", (e) => e.textContent);
    expect(text).toContain("Quiz");
  });

  afterAll(() => browser.close());
});

describe("Welcome Message", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
  });

  test("Testando se contém mensagens de boas vindas", async () => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector(".welcome h2");
    const text = await page.$eval(".welcome h2", (e) => e.textContent);
    expect(text).toContain("Seja bem-vindo");
  });

  afterAll(() => browser.close());
});

describe("Start Button", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
  });

  test("Testando se contém o botão de iniciar", async () => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector(".welcome button");
    const text = await page.$eval(".welcome button", (e) => e.textContent);
    expect(text).toContain("Iniciar");
  });

  afterAll(() => browser.close());
});

describe("Start Button Click", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await launch();
    page = await browser.newPage();
  });

  test("Testando o clique no botão de iniciar", async () => {
    await page.goto("http://localhost:5173");
    // await page.waitForSelector(".welcome button");
    await page.click(".welcome button");
    // await page.waitForSelector(".welcome button");
    // const text = await page.$eval(".category h2", (e) => e.textContent);
    // expect(text).toContain("Escolha uma categoria");
  });

  afterAll(() => browser.close());
});