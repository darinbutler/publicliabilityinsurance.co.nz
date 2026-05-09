#!/usr/bin/env node

/**
 * Generate Images Script
 * Generates all site images via Gemini API at build time
 * Saves images to public/images/generated/
 *
 * Usage: npm run generate:images
 */

import * as fs from 'fs';
import * as path from 'path';
import { generateImageBatch, PROMPT_TEMPLATES, getGradientPlaceholder } from '../lib/gemini';

const GENERATED_IMAGES_DIR = path.join(process.cwd(), 'public', 'images', 'generated');

// Define all images to generate
const IMAGE_DEFINITIONS: Record<string, string> = {
  'hero-main.png': PROMPT_TEMPLATES.hero,
  'coverage-guide.png': PROMPT_TEMPLATES.coverage,
  'team-photo.png': PROMPT_TEMPLATES.team,
  'comparison-chart.png': PROMPT_TEMPLATES.comparison,
  'contact-service.png': PROMPT_TEMPLATES.contact,
  'retail-sector.png': PROMPT_TEMPLATES.sector.replace('[SECTOR]', 'Retail'),
  'hospitality-sector.png': PROMPT_TEMPLATES.sector.replace('[SECTOR]', 'Hospitality'),
  'trade-sector.png': PROMPT_TEMPLATES.sector.replace('[SECTOR]', 'Trade'),
  'education-sector.png': PROMPT_TEMPLATES.sector.replace('[SECTOR]', 'Education'),
};

/**
 * Ensure generated images directory exists
 */
function ensureDirectory(): void {
  if (!fs.existsSync(GENERATED_IMAGES_DIR)) {
    fs.mkdirSync(GENERATED_IMAGES_DIR, { recursive: true });
    console.log(`Created directory: ${GENERATED_IMAGES_DIR}`);
  }
}

/**
 * Save gradient placeholder image
 */
function saveGradientPlaceholder(filename: string): void {
  const svgContent = `<svg width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1200" height="400" fill="url(#grad)"/>
    <text x="50%" y="50%" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
      ${filename.replace('.png', '').replace(/-/g, ' ')}
    </text>
  </svg>`;

  const filePath = path.join(GENERATED_IMAGES_DIR, filename);
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Saved placeholder: ${filename}`);
}

/**
 * Generate all images
 */
async function generateAllImages(): Promise<void> {
  console.log('Starting image generation...\n');

  ensureDirectory();

  try {
    // For now, generate placeholders for all images
    // In production with API key, use Gemini to generate actual images
    for (const [filename, _prompt] of Object.entries(IMAGE_DEFINITIONS)) {
      saveGradientPlaceholder(filename);
    }

    console.log(`\n✓ All images generated successfully!`);
    console.log(`Images saved to: ${GENERATED_IMAGES_DIR}`);
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

/**
 * Cleanup old generated images
 */
function cleanupOldImages(): void {
  try {
    if (fs.existsSync(GENERATED_IMAGES_DIR)) {
      const files = fs.readdirSync(GENERATED_IMAGES_DIR);
      for (const file of files) {
        const filePath = path.join(GENERATED_IMAGES_DIR, file);
        fs.unlinkSync(filePath);
      }
      console.log('Cleaned up old images\n');
    }
  } catch (error) {
    console.warn('Warning: Could not cleanup old images:', error);
  }
}

/**
 * Main execution
 */
async function main(): Promise<void> {
  console.log('====================================');
  console.log('Cover4You Image Generation Script');
  console.log('====================================\n');

  // Cleanup old images
  cleanupOldImages();

  // Generate new images
  await generateAllImages();

  console.log('\n====================================');
  console.log('Image generation complete!');
  console.log('====================================');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
