#!/usr/bin/env node

/**
 * Fetch Apify Data Script
 * Fetches data via Apify and saves to src/data/apify/
 *
 * Usage: npm run fetch:apify
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  scrapeCompetitors,
  fetchContentFeeds,
  scrapeProductData,
  refreshAllData,
} from '../lib/apify';

const APIFY_DATA_DIR = path.join(process.cwd(), 'src', 'data', 'apify');

/**
 * Ensure apify data directory exists
 */
function ensureDirectory(): void {
  if (!fs.existsSync(APIFY_DATA_DIR)) {
    fs.mkdirSync(APIFY_DATA_DIR, { recursive: true });
    console.log(`Created directory: ${APIFY_DATA_DIR}`);
  }
}

/**
 * Save data to JSON file
 */
function saveData(filename: string, data: unknown): void {
  const filePath = path.join(APIFY_DATA_DIR, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✓ Saved: ${filename}`);
}

/**
 * Fetch all external data sources
 */
async function fetchAllData(): Promise<void> {
  console.log('Starting data fetch...\n');

  try {
    // Fetch all data concurrently
    const allData = await refreshAllData();

    // Save each data type
    saveData('competitors.json', allData.competitors);
    saveData('articles.json', allData.articles);
    saveData('products.json', allData.products);

    // Create index file
    const index = {
      lastUpdated: new Date().toISOString(),
      sources: {
        competitors: allData.competitors.length,
        articles: allData.articles.length,
        products: allData.products.length,
      },
    };
    saveData('index.json', index);

    console.log(`\n✓ All data fetched and saved successfully!`);
  } catch (error) {
    console.error('Error fetching data:', error);
    process.exit(1);
  }
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log('====================================');
  console.log('Public Liability Insurance Apify Data Fetch Script');
  console.log('====================================\n');

  ensureDirectory();
  await fetchAllData();

  console.log('\n====================================');
  console.log('Data fetch complete!');
  console.log('====================================');
  console.log(`Data saved to: ${APIFY_DATA_DIR}`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
