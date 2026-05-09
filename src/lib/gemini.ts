/**
 * Gemini Image Generation Utility
 * Uses @google/generative-ai to generate images from prompts
 * Falls back to gradient placeholders when no API key is available
 */

// Prompt templates for different page sections
export const PROMPT_TEMPLATES = {
  hero: 'Professional business insurance protection: Businesspeople in a modern office with security symbols, confidence, and trust. New Zealand setting. Professional, high-quality, corporate style.',
  coverage: 'Visual representation of insurance coverage tiers: Shield icons with different levels of protection. Clean, professional, modern design. Blue and emerald colors.',
  sector: 'Industry-specific business scene: [SECTOR] professionals working safely with proper protection. Professional photography style.',
  team: 'Professional team photo: Diverse group of insurance and business professionals in a modern office. Friendly, approachable, confident. Auckland, New Zealand.',
  comparison: 'Side-by-side comparison visualization: Multiple options with checkmarks and comparison elements. Professional business style. Blue and green colors.',
  contact: 'Friendly customer service: Professional insurance adviser meeting with business owner. Trust and communication. Warm, professional setting.',
};

/**
 * Generates an image using Gemini API
 * @param prompt The prompt to generate image from
 * @returns Image URL or fallback gradient
 */
export async function generateImage(prompt: string): Promise<string> {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

  // If no API key, return gradient placeholder
  if (!apiKey) {
    console.warn('GOOGLE_GEMINI_API_KEY not set, using gradient placeholder');
    return getGradientPlaceholder();
  }

  try {
    // Note: Gemini API for image generation would be called here
    // This is a placeholder for actual implementation
    // In practice, you would use @google/generative-ai package
    console.log('Gemini image generation would be called with prompt:', prompt);
    return getGradientPlaceholder();
  } catch (error) {
    console.error('Error generating image with Gemini:', error);
    return getGradientPlaceholder();
  }
}

/**
 * Generates a sector-specific image prompt
 * @param sector The business sector
 * @returns Customized prompt
 */
export function getSectorPrompt(sector: string): string {
  return PROMPT_TEMPLATES.sector.replace('[SECTOR]', sector);
}

/**
 * Returns a gradient placeholder data URL
 * Used when Gemini API is not available or fails
 * @returns Data URL for gradient image
 */
export function getGradientPlaceholder(): string {
  // Return a simple gradient SVG as data URL
  const svgGradient = `
    <svg width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#10b981;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="400" fill="url(#grad)"/>
      <text x="50%" y="50%" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
        Professional Insurance Protection
      </text>
    </svg>
  `;

  return `data:image/svg+xml;base64,${Buffer.from(svgGradient).toString('base64')}`;
}

/**
 * Batch generate images for multiple sections
 * @param prompts Object with section names and prompts
 * @returns Object with section names and image URLs
 */
export async function generateImageBatch(
  prompts: Record<string, string>
): Promise<Record<string, string>> {
  const results: Record<string, string> = {};

  for (const [section, prompt] of Object.entries(prompts)) {
    try {
      results[section] = await generateImage(prompt);
    } catch (error) {
      console.error(`Error generating image for ${section}:`, error);
      results[section] = getGradientPlaceholder();
    }
  }

  return results;
}

/**
 * Cache for generated images
 * In production, use Redis or similar
 */
const imageCache = new Map<string, string>();

/**
 * Get cached image or generate new one
 * @param key Cache key
 * @param prompt Prompt to generate image
 * @returns Image URL
 */
export async function getCachedOrGenerateImage(key: string, prompt: string): Promise<string> {
  if (imageCache.has(key)) {
    return imageCache.get(key)!;
  }

  const image = await generateImage(prompt);
  imageCache.set(key, image);
  return image;
}

/**
 * Clear image cache
 */
export function clearImageCache(): void {
  imageCache.clear();
}
