import { test, expect } from "@playwright/test";
import blocks from "@/app/api/blocks/blocks.json";

const randomBlock = blocks[Math.floor(Math.random() * blocks.length)]; // Randomly selected block
const unavailableBlockHash = "unavailable-block-hash";

test.describe("Transaction Detail Page", () => {
  test("Returns an available block", async ({ page }) => {
    await page.goto(`/trx/${randomBlock.blockHash}`);

    await page.waitForURL(`/trx/${randomBlock.blockHash}`);

    await expect(page.getByText(`Block #${randomBlock.slot}`)).toBeVisible();
  });

  test("Returns 404 for unavailable block", async ({ page }) => {
    await page.goto(`/trx/${unavailableBlockHash}`);

    await page.waitForURL(`/trx/${unavailableBlockHash}`);

    await expect(page.getByText(`Aww : (`)).toBeVisible();
    await expect(
      page.getByText(`Please confirm the URL is correct and try again.`)
    ).toBeVisible();

    const goBackButton = page.getByText("Go back");
    await goBackButton.click();

    await page.waitForURL(`/`);

    expect(page.url()).toBe("http://localhost:8800/");
  });

  test("Go back arrow routes to home page", async ({ page }) => {
    await page.goto(`/trx/${randomBlock.blockHash}`);

    const arrowBackButton = page.locator("a[aria-label='Go back']");
    await arrowBackButton.click();

    await page.waitForURL(`/`);
    expect(page.url()).toBe("http://localhost:8800/");
  });

  test("Copies block hash to clipboard", async ({ page }) => {
    await page.goto(`/trx/${randomBlock.blockHash}`);

    const copyIcon = page.getByTestId("block-copy-icon");
    await copyIcon.click();

    await expect(page.getByText("Copied to clipboard")).toBeVisible();
  });

  test("Copies leader address to clipboard", async ({ page }) => {
    await page.goto(`/trx/${randomBlock.blockHash}`);

    const copyIcon = page.getByTestId("leader-copy-icon");
    await copyIcon.click();

    await expect(page.getByText("Copied to clipboard")).toBeVisible();
  });
});
