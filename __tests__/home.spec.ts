import { test, expect } from "@playwright/test";
/**
 * Since the "blocks" data is static, we dont need to create a mock data for this test.
 * We can just check for correctness directly.
 */
import blocks from "@/app/api/blocks/blocks.json";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Landing Page", () => {
  test("updates filter url state when search input changes", async ({
    page,
  }) => {
    const searchInput = page.getByPlaceholder(
      "Search for transactions, blocks, accounts"
    );
    await searchInput.fill("251481718");

    expect(searchInput).toHaveValue("251481718");
    await page.waitForURL("/?q=251481718");
    expect(page.url()).toContain("q=251481718");
  });

  test("Displays correct number of available blocks", async ({ page }) => {
    const body = page.locator("body");
    await body.scrollIntoViewIfNeeded();

    const blockTableRows = page.getByTestId(/blocks-table-row-*/);
    expect(blockTableRows).toHaveCount(blocks.length);
  });

  test("Displays correct number of filtered blocks", async ({ page }) => {
    const block = blocks[0];
    await page.goto(`/?q=${block.blockHash}`);

    const body = page.locator("body");
    await body.scrollIntoViewIfNeeded();

    const blockTableRows = page.getByTestId(
      `blocks-table-row-${block.blockHash}`
    );
    expect(blockTableRows).toHaveCount(1);
  });

  test("navigates to trx detail on row click", async ({ page }) => {
    const block = blocks[0];
    await page.goto(`/?q=${block.slot}`);

    const blockTableRow = page.getByTestId(
      `blocks-table-row-${block.blockHash}`
    );
    await blockTableRow.click();

    await page.waitForURL(`/trx/${block.blockHash}`);

    expect(page.url()).toContain(`/trx/${block.blockHash}`);
  });
});
