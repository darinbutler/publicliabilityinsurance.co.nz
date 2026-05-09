/**
 * Apify Integration Utility
 * Handles web scraping and data fetching tasks
 * Falls back to local JSON data when API key is not available
 */

// Types for scraped data
export interface CompetitorSiteStructure {
  url: string;
  title: string;
  hasQuoteForm: boolean;
  mainSections: string[];
  coverageOfferings: string[];
  pricingPresented: boolean;
  contactMethods: string[];
}

export interface InsuranceArticle {
  title: string;
  source: string;
  url: string;
  publishDate: string;
  category: string;
  summary: string;
}

export interface ProductData {
  providerName: string;
  coverageType: string;
  coverageAmount: string;
  estimatedPrice: string;
  features: string[];
  targetMarket: string;
}

// Local fallback data
const FALLBACK_COMPETITOR_DATA: CompetitorSiteStructure[] = [
  {
    url: 'https://example-insurer-a.co.nz',
    title: 'Insurer A - Public Liability Insurance',
    hasQuoteForm: true,
    mainSections: ['Home', 'Products', 'Quote', 'Contact'],
    coverageOfferings: ['$1M', '$2M', '$5M', '$10M'],
    pricingPresented: true,
    contactMethods: ['Phone', 'Email', 'Online Chat'],
  },
  {
    url: 'https://example-insurer-b.co.nz',
    title: 'Insurer B - Business Insurance',
    hasQuoteForm: true,
    mainSections: ['Home', 'For Business', 'Coverage', 'Get Quote', 'FAQ'],
    coverageOfferings: ['$2M', '$5M', '$10M', '$20M'],
    pricingPresented: false,
    contactMethods: ['Phone', 'Email', 'Video Call'],
  },
];

const FALLBACK_INSURANCE_ARTICLES: InsuranceArticle[] = [
  {
    title: 'New Zealand Insurance Requirements for SMEs',
    source: 'NZ Insurance News',
    url: 'https://example.com/sme-insurance-requirements',
    publishDate: '2026-03-15',
    category: 'Business Insurance',
    summary:
      'Latest insights on minimum insurance requirements for small and medium-sized enterprises in New Zealand.',
  },
  {
    title: 'Public Liability Claims Trends in Construction',
    source: 'Construction Safety Magazine',
    url: 'https://example.com/construction-claims-2026',
    publishDate: '2026-03-10',
    category: 'Industry Insights',
    summary:
      'Analysis of public liability insurance claims in the construction sector and risk mitigation strategies.',
  },
  {
    title: 'Duty of Care: Schools and Education Providers',
    source: 'Education Weekly',
    url: 'https://example.com/education-duty-of-care',
    publishDate: '2026-03-05',
    category: 'Education',
    summary:
      'Understanding legal obligations and insurance requirements for educational institutions in NZ.',
  },
];

const FALLBACK_PRODUCT_DATA: ProductData[] = [
  {
    providerName: 'Insurer A',
    coverageType: 'Public Liability - Basic',
    coverageAmount: '$1M',
    estimatedPrice: '$450-600/year',
    features: ['Bodily Injury', 'Property Damage', 'Legal Defense'],
    targetMarket: 'Small Retail',
  },
  {
    providerName: 'Insurer A',
    coverageType: 'Public Liability - Professional',
    coverageAmount: '$5M',
    estimatedPrice: '$1,800-2,500/year',
    features: ['Bodily Injury', 'Property Damage', 'Legal Defense', 'Professional Liability'],
    targetMarket: 'Contractors & Professionals',
  },
  {
    providerName: 'Insurer B',
    coverageType: 'Public Liability - Standard',
    coverageAmount: '$2M',
    estimatedPrice: '$700-1,200/year',
    features: ['Bodily Injury', 'Property Damage', 'Medical Payments'],
    targetMarket: 'General Business',
  },
];

/**
 * Scrape competitor websites for structure and offerings
 * @param urls Array of competitor URLs to scrape
 * @returns Promise resolving to competitor site data
 */
export async function scrapeCompetitors(urls: string[]): Promise<CompetitorSiteStructure[]> {
  const apiKey = process.env.APIFY_API_KEY;

  // If no API key, return fallback data
  if (!apiKey) {
    console.warn('APIFY_API_KEY not set, using fallback competitor data');
    return FALLBACK_COMPETITOR_DATA;
  }

  try {
    // In production, use apify-client to crawl competitor sites
    // This would analyze their site structure, quote forms, pricing, etc.
    console.log('Apify competitor scraping would be called for:', urls);

    // Placeholder: Return fallback data
    return FALLBACK_COMPETITOR_DATA;
  } catch (error) {
    console.error('Error scraping competitor sites:', error);
    return FALLBACK_COMPETITOR_DATA;
  }
}

/**
 * Fetch insurance news and articles from various sources
 * @param keywords Array of keywords to search for
 * @returns Promise resolving to insurance articles
 */
export async function fetchContentFeeds(keywords: string[]): Promise<InsuranceArticle[]> {
  const apiKey = process.env.APIFY_API_KEY;

  // If no API key, return fallback data
  if (!apiKey) {
    console.warn('APIFY_API_KEY not set, using fallback insurance articles');
    return FALLBACK_INSURANCE_ARTICLES;
  }

  try {
    // In production, use apify-client to fetch insurance news
    // This would search for and aggregate articles matching the keywords
    console.log('Apify content feed fetch would be called for keywords:', keywords);

    // Placeholder: Return fallback data
    return FALLBACK_INSURANCE_ARTICLES;
  } catch (error) {
    console.error('Error fetching content feeds:', error);
    return FALLBACK_INSURANCE_ARTICLES;
  }
}

/**
 * Scrape insurance product data from multiple sources
 * @param sources Array of source URLs to scrape
 * @returns Promise resolving to product data
 */
export async function scrapeProductData(sources: string[]): Promise<ProductData[]> {
  const apiKey = process.env.APIFY_API_KEY;

  // If no API key, return fallback data
  if (!apiKey) {
    console.warn('APIFY_API_KEY not set, using fallback product data');
    return FALLBACK_PRODUCT_DATA;
  }

  try {
    // In production, use apify-client to scrape insurance product pages
    // This would extract coverage amounts, pricing, features, etc.
    console.log('Apify product data scraping would be called for sources:', sources);

    // Placeholder: Return fallback data
    return FALLBACK_PRODUCT_DATA;
  } catch (error) {
    console.error('Error scraping product data:', error);
    return FALLBACK_PRODUCT_DATA;
  }
}

/**
 * Refresh all external data sources
 * Typically run on a schedule (daily/weekly)
 */
export async function refreshAllData(): Promise<{
  competitors: CompetitorSiteStructure[];
  articles: InsuranceArticle[];
  products: ProductData[];
}> {
  const competitorUrls = [
    'https://example-insurer-a.co.nz',
    'https://example-insurer-b.co.nz',
    'https://example-insurer-c.co.nz',
  ];

  const newsKeywords = ['public liability insurance', 'NZ insurance', 'business insurance'];

  const sources = [
    'https://example-insurer-a.co.nz/products',
    'https://example-insurer-b.co.nz/coverage',
    'https://example-insurer-c.co.nz/quote',
  ];

  const [competitors, articles, products] = await Promise.all([
    scrapeCompetitors(competitorUrls),
    fetchContentFeeds(newsKeywords),
    scrapeProductData(sources),
  ]);

  return {
    competitors,
    articles,
    products,
  };
}
