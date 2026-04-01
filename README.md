# PublicLiabilityInsurance.co.nz

A premium Next.js website for NZ public liability insurance comparison, powered by Google Gemini AI for image generation and Apify for competitive intelligence.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **AI Images:** Google Gemini API
- **Data Intelligence:** Apify
- **Forms:** FormSubmit.co
- **Deployment:** GitHub Pages (static export)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Add your API keys to .env.local

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

| Variable | Description |
|----------|------------|
| `GEMINI_API_KEY` | Google Gemini API key for image generation |
| `APIFY_API_TOKEN` | Apify API token for web scraping |
| `NEXT_PUBLIC_FORM_EMAIL` | Primary form submission email |
| `NEXT_PUBLIC_FORM_CC` | CC email for form submissions |

## API Integrations

### Google Gemini (Image Generation)
Generate hero images and section imagery:
```bash
npx tsx src/scripts/generate-images.ts
```

### Apify (Data Intelligence)
Three use cases:
1. **Competitor scraping** - Crawl competitor sites for structure/content
2. **Content feeds** - Pull insurance news and articles
3. **Product/pricing data** - Scrape insurer pricing data

```bash
npx tsx src/scripts/fetch-apify-data.ts
```

## Deployment to GitHub Pages

1. Push to the `main` branch
2. GitHub Actions automatically builds and deploys
3. To refresh API data, use the manual workflow dispatch:
   - Go to Actions > Deploy to GitHub Pages > Run workflow
   - Check "Refresh Apify data" and/or "Generate Gemini images"

### GitHub Secrets Required
Add these in Settings > Secrets and variables > Actions:
- `GEMINI_API_KEY`
- `APIFY_API_TOKEN`

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, sectors, testimonials, FAQs |
| Businesses | `/sectors/businesses` | Retail, hospitality, professional services |
| Trade Contractors | `/sectors/trade-contractors` | Builders, plumbers, electricians |
| Schools & Education | `/sectors/schools-education` | ECE, primary, secondary, tertiary |
| Public Venues | `/sectors/public-venues` | Events, sports, community halls |
| Coverage Guide | `/coverage` | Coverage levels and what's covered |
| Compare | `/compare` | Insurer comparison matrix |
| Blog | `/blog` | Insurance articles and guides |
| About | `/about` | About Cover4You |
| Contact | `/contact` | Quote form (primary conversion page) |

## Form Submissions

Forms use FormSubmit.co and send to:
- **Primary:** hello@cover4you.co.nz
- **CC:** butlerdarin@gmail.com

## Brand

- **Trading as:** Cover4You
- **Primary color:** Emerald (#10B981)
- **Secondary:** Sky Blue (#0EA5E9)
- **Accent:** Amber (#F59E0B)
- **Font:** Inter
