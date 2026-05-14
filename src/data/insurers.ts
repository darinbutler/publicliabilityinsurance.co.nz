export interface InsurerComparison {
  name: string;
  parent: string;
  established: number;
  nzOwned: boolean;
  spRating: string;
  distributionModel: string;
  features: string[];
  premiumRange: string;
  customerService: string;
  claimsSpeed: string;
  bestFor: string;
  websiteLabel: string;
  website: string;
}

export const insurers: InsurerComparison[] = [
  {
    name: 'NZI',
    parent: 'IAG New Zealand',
    established: 1859,
    nzOwned: false,
    spRating: 'AA-',
    distributionModel: 'Broker only',
    features: [
      'Liability One package: Public Liability + Statutory Liability bundled',
      'Broadform/Public Liability covers bodily injury and property damage',
      'Optional Cyber Liability extension with 24/7 emergency helpline',
      'Cover extends to products liability as standard',
      'Dedicated NZ broker support network — over 1,500 brokers nationwide',
      'One of NZ\'s oldest and most financially secure insurers (est. 1859)',
    ],
    premiumRange: '$600 – $4,500/year (SME)',
    customerService: 'Broker-managed; NZI broker portal with dedicated underwriter access',
    claimsSpeed: 'Simple claims: 2–4 weeks; Complex: 8–14 weeks',
    bestFor: 'SMEs wanting a bundled liability package with strong broker support',
    websiteLabel: 'nzi.co.nz',
    website: 'https://www.nzi.co.nz/business-cover/liability-cover',
  },
  {
    name: 'Vero Liability',
    parent: 'Suncorp New Zealand',
    established: 2003,
    nzOwned: false,
    spRating: 'A+',
    distributionModel: 'Broker only',
    features: [
      'NZ\'s only licensed insurer specialising exclusively in liability',
      'Public & Products Liability covers compensation and legal defence costs',
      'LegalEdge SME package: PL, Statutory Liability, Management Liability bundled',
      'Expert in-house legal team to defend claims',
      'Tailored solutions for construction, professional services and NFP sectors',
      'Wide extensions: advertising liability, WOF liability, property in care/custody/control',
    ],
    premiumRange: '$700 – $5,500/year (SME)',
    customerService: 'Broker-managed; specialist liability underwriters available',
    claimsSpeed: 'Simple claims: 2–3 weeks; Complex: 6–12 weeks',
    bestFor: 'Businesses needing specialist liability expertise and bundled management liability',
    websiteLabel: 'veroliability.co.nz',
    website: 'https://www.veroliability.co.nz/products/public-and-products-liability.html',
  },
  {
    name: 'QBE Insurance',
    parent: 'QBE Insurance Group (ASX: QBE)',
    established: 1890,
    nzOwned: false,
    spRating: 'A+',
    distributionModel: 'Broker only (IBANZ members)',
    features: [
      'General Liability automatically includes defective workmanship cover',
      'Products Liability bundled as standard with Public Liability',
      'Statutory Liability covers unintentional breaches of NZ legislation (H&S Act)',
      'Extensions: punitive damages, advertising liability, goods on hook, property in C/C/C',
      'Access to QBE\'s network of top NZ defence lawyers',
      'Commercial-only focus — no personal lines, deep business insurance expertise',
    ],
    premiumRange: '$650 – $4,000/year (SME)',
    customerService: 'Broker-managed; commercial specialist underwriting team in Auckland',
    claimsSpeed: 'Simple claims: 2–4 weeks; Complex: 8–12 weeks',
    bestFor: 'Trade contractors and businesses needing defective workmanship cover as standard',
    websiteLabel: 'qbe.com/nz',
    website: 'https://www.qbe.com/nz/business-insurance/liability',
  },
  {
    name: 'AIG New Zealand',
    parent: 'AIG (American International Group)',
    established: 1970,
    nzOwned: false,
    spRating: 'A',
    distributionModel: 'Broker only',
    features: [
      'Specialty and complex commercial liability underwriting',
      'High-limit coverage available — well above standard market limits',
      'Umbrella and excess liability for businesses requiring layered programmes',
      'Management Liability suite: D&O, Employment Practices, Crime',
      'Global claims handling capability for multinational NZ businesses',
      'Strong in professional services, technology and construction sectors',
    ],
    premiumRange: '$1,000 – $8,000+/year (varies by limit)',
    customerService: 'Broker-managed; AIG Auckland specialist team',
    claimsSpeed: 'Simple claims: 3–5 weeks; Complex: 10–16 weeks',
    bestFor: 'Larger businesses, multinationals and those needing high limits or layered coverage',
    websiteLabel: 'aig.com/nz',
    website: 'https://www.aig.com/business/insurance/liability',
  },
  {
    name: 'Chubb Insurance',
    parent: 'Chubb Limited (NYSE: CB)',
    established: 2016,
    nzOwned: false,
    spRating: 'AA',
    distributionModel: 'Broker only',
    features: [
      'World\'s largest publicly traded P&C insurer — exceptional financial security',
      'Specialty liability for hard-to-place and complex commercial risks',
      'Broad wordings with fewer exclusions than standard market',
      'Dedicated risk engineering services to help reduce claims frequency',
      'Combined General Liability / Products Liability / Completed Operations',
      'Strong in construction, manufacturing, technology and events sectors',
    ],
    premiumRange: '$1,200 – $12,000+/year (specialty focus)',
    customerService: 'Broker-managed; Chubb NZ specialist underwriting team',
    claimsSpeed: 'Simple claims: 2–4 weeks; Complex: 8–14 weeks',
    bestFor: 'Complex or high-value risks where broad policy wording and financial security matter most',
    websiteLabel: 'chubb.com/nz',
    website: 'https://www.chubb.com/nz-en/business-insurance/liability-insurance.html',
  },
];

export interface CoverageComparison {
  feature: string;
  notes: string;
  included: boolean[];
}

// Column order: NZI, Vero Liability, QBE, AIG, Chubb
export const coverageFeatures: CoverageComparison[] = [
  {
    feature: 'Bodily Injury Coverage',
    notes: 'Third-party personal injury',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Property Damage Coverage',
    notes: 'Third-party property damage',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Legal Defence Costs',
    notes: 'Costs to defend claims in court',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Products Liability',
    notes: 'Claims arising from products you supply',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Defective Workmanship',
    notes: 'Property damage from faulty work',
    included: [true, true, true, false, true],
  },
  {
    feature: 'Advertising Liability',
    notes: 'Claims from ads, copyright, defamation',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Property in Care/Custody/Control',
    notes: 'Client property in your possession',
    included: [true, true, true, false, true],
  },
  {
    feature: 'Statutory Liability Bundle',
    notes: 'H&S Act and other NZ legislation breaches',
    included: [true, true, true, false, false],
  },
  {
    feature: 'Cyber Liability (Add-on)',
    notes: 'Optional cyber extension available',
    included: [true, false, false, true, true],
  },
  {
    feature: 'Management / D&O Liability',
    notes: 'Directors & Officers cover available',
    included: [false, true, false, true, true],
  },
  {
    feature: 'High-Limit Umbrella Coverage',
    notes: 'Excess/umbrella above primary layer',
    included: [false, false, false, true, true],
  },
  {
    feature: 'Worldwide Coverage Extension',
    notes: 'Cover for work done outside NZ',
    included: [false, false, false, true, true],
  },
];

export interface IndustryPremiumRange {
  industry: string;
  coverage: string;
  rangeMin: number;
  rangeMax: number;
  notes: string;
}

export const industryPremiums: IndustryPremiumRange[] = [
  {
    industry: 'Retail (Small)',
    coverage: '$1M',
    rangeMin: 400,
    rangeMax: 850,
    notes: 'Low foot traffic, minimal hazards. Standard slip/fall cover.',
  },
  {
    industry: 'Retail (Large / High Traffic)',
    coverage: '$2M',
    rangeMin: 750,
    rangeMax: 1600,
    notes: 'Large footprint, high customer volume. Products liability important.',
  },
  {
    industry: 'Café / Restaurant (Small)',
    coverage: '$2M',
    rangeMin: 950,
    rangeMax: 2000,
    notes: 'Food handling, alcohol service, slip/fall risk on premises.',
  },
  {
    industry: 'Café / Restaurant (Large / Liquor)',
    coverage: '$5M',
    rangeMin: 2000,
    rangeMax: 4000,
    notes: 'Larger venue, liquor liability, higher capacity = higher risk rating.',
  },
  {
    industry: 'Hairdresser / Beauty Salon',
    coverage: '$2M',
    rangeMin: 600,
    rangeMax: 1300,
    notes: 'Chemical treatment risk, slip/fall on wet floors.',
  },
  {
    industry: 'Plumber',
    coverage: '$5M',
    rangeMin: 1200,
    rangeMax: 2800,
    notes: 'Water damage to client property is a core risk. Defective workmanship cover recommended.',
  },
  {
    industry: 'Electrician',
    coverage: '$5M',
    rangeMin: 1500,
    rangeMax: 3200,
    notes: 'High-risk trade. Fire, electrocution exposure means higher premiums.',
  },
  {
    industry: 'Builder / General Contractor',
    coverage: '$5M',
    rangeMin: 1800,
    rangeMax: 4000,
    notes: 'Construction site risks, third-party property damage, subcontractor liability.',
  },
  {
    industry: 'Roofing Specialist',
    coverage: '$5M–$10M',
    rangeMin: 2500,
    rangeMax: 5500,
    notes: 'Working at height = significantly elevated risk rating. Height safety record matters.',
  },
  {
    industry: 'Landscaper / Gardener',
    coverage: '$2M–$5M',
    rangeMin: 900,
    rangeMax: 2200,
    notes: 'Equipment operation, damage to property. Varies by scale and machinery used.',
  },
  {
    industry: 'IT Consultant / Tech Business',
    coverage: '$2M',
    rangeMin: 1200,
    rangeMax: 3000,
    notes: 'Professional indemnity often bundled. Cyber extension strongly recommended.',
  },
  {
    industry: 'Accountant / Bookkeeper',
    coverage: '$2M',
    rangeMin: 1000,
    rangeMax: 2500,
    notes: 'PI insurance is separate; PL covers physical premises and third-party events.',
  },
  {
    industry: 'Gym / Fitness Studio',
    coverage: '$5M',
    rangeMin: 1500,
    rangeMax: 3800,
    notes: 'Participant injury during classes, equipment liability, slip/fall in change rooms.',
  },
  {
    industry: 'Childcare / Early Learning',
    coverage: '$5M',
    rangeMin: 1800,
    rangeMax: 4500,
    notes: 'Duty of care to minors increases risk rating. Regulatory compliance required.',
  },
  {
    industry: 'Primary / Secondary School',
    coverage: '$5M–$10M',
    rangeMin: 3000,
    rangeMax: 7000,
    notes: 'Student numbers, sports and excursion exposure, grounds liability all factor in.',
  },
  {
    industry: 'Event Management',
    coverage: '$5M–$10M',
    rangeMin: 2500,
    rangeMax: 6000,
    notes: 'Public events carry significant third-party injury risk. Limit depends on attendance.',
  },
  {
    industry: 'Property / Building Manager',
    coverage: '$2M–$5M',
    rangeMin: 800,
    rangeMax: 2200,
    notes: 'Tenant and visitor injury, maintenance obligations, common area hazards.',
  },
  {
    industry: 'Pet Grooming',
    coverage: '$2M',
    rangeMin: 700,
    rangeMax: 1600,
    notes: 'Animal injury/escape risk, chemicals, handling-related claims.',
  },
];
