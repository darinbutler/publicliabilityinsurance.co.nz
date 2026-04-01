export interface InsurerComparison {
  name: string;
  established: number;
  nzOwned: boolean;
  features: string[];
  premiumRange: string;
  customerService: string;
  claimsSpeed: string;
  rating: number;
  bestFor: string;
  minCover: string;
  maxCover: string;
  excessFrom: string;
  onlineQuote: boolean;
  nzBased: boolean;
}

export const insurers: InsurerComparison[] = [
  {
    name: 'Vero Insurance',
    established: 1998,
    nzOwned: false,
    features: [
      'Comprehensive commercial packages',
      'Specialist trade contractor cover',
      'Dedicated NZ claims team',
      'Broker-supported advice',
      'Multi-policy bundling discounts',
    ],
    premiumRange: '$600 - $4,000',
    customerService: 'Phone + Email, broker network, NZ-based claims team',
    claimsSpeed: 'Simple: 2-4 weeks, Complex: 6-10 weeks',
    rating: 4.5,
    bestFor: 'Established businesses & trades',
    minCover: '$1M',
    maxCover: '$20M',
    excessFrom: '$500',
    onlineQuote: false,
    nzBased: true,
  },
  {
    name: 'NZI (IAG)',
    established: 1859,
    nzOwned: false,
    features: [
      'NZ\'s oldest insurer',
      '24/7 claims lodgement',
      'Wide broker network',
      'Risk management resources',
      'Tailored industry solutions',
    ],
    premiumRange: '$550 - $3,500',
    customerService: '24/7 phone claims, dedicated account managers',
    claimsSpeed: 'Simple: 1-3 weeks, Complex: 6-10 weeks',
    rating: 4.6,
    bestFor: 'Large businesses & corporates',
    minCover: '$1M',
    maxCover: '$50M',
    excessFrom: '$500',
    onlineQuote: false,
    nzBased: true,
  },
  {
    name: 'AIG New Zealand',
    established: 1969,
    nzOwned: false,
    features: [
      'Global claims network',
      'High-limit cover available',
      'Specialist risk assessment',
      'Professional indemnity bundling',
      'Multinational programme capability',
    ],
    premiumRange: '$700 - $5,000',
    customerService: 'Phone + Email, specialist underwriters',
    claimsSpeed: 'Simple: 2-4 weeks, Complex: 8-12 weeks',
    rating: 4.3,
    bestFor: 'High-risk industries & large limits',
    minCover: '$1M',
    maxCover: '$100M+',
    excessFrom: '$1,000',
    onlineQuote: false,
    nzBased: true,
  },
  {
    name: 'Crombie Lockwood',
    established: 1985,
    nzOwned: true,
    features: [
      'NZ-owned broker',
      'Personalised risk advice',
      'Access to multiple insurers',
      'Claims advocacy service',
      'Industry-specific packages',
    ],
    premiumRange: '$450 - $3,500',
    customerService: 'Dedicated broker, phone + in-person meetings',
    claimsSpeed: 'Simple: 2-3 weeks, Complex: 6-8 weeks',
    rating: 4.7,
    bestFor: 'SMEs wanting personalised advice',
    minCover: '$1M',
    maxCover: '$20M+',
    excessFrom: '$250',
    onlineQuote: false,
    nzBased: true,
  },
  {
    name: 'Delta Insurance',
    established: 2014,
    nzOwned: true,
    features: [
      'Online-first approach',
      'Fast quote turnaround',
      'Competitive SME pricing',
      'Flexible payment options',
      'NZ-owned and operated',
    ],
    premiumRange: '$400 - $3,000',
    customerService: 'Phone + Email + Online portal, NZ team',
    claimsSpeed: 'Simple: 1-2 weeks, Complex: 4-8 weeks',
    rating: 4.4,
    bestFor: 'Small businesses & startups',
    minCover: '$500K',
    maxCover: '$10M',
    excessFrom: '$250',
    onlineQuote: true,
    nzBased: true,
  },
];

export interface CoverageComparison {
  feature: string;
  included: boolean[];
}

export const coverageFeatures: CoverageComparison[] = [
  {
    feature: 'Bodily Injury Coverage',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Property Damage Coverage',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Legal Defence Costs',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Medical Payments Coverage',
    included: [true, true, true, true, false],
  },
  {
    feature: 'Products Liability',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Hire & Loan Coverage',
    included: [true, true, true, false, true],
  },
  {
    feature: 'Directors & Officers Liability',
    included: [false, true, true, true, false],
  },
  {
    feature: 'Management Liability',
    included: [false, true, true, false, false],
  },
  {
    feature: 'Cyber Liability',
    included: [false, false, true, false, true],
  },
  {
    feature: 'Employee Dishonesty',
    included: [false, true, true, true, false],
  },
  {
    feature: 'Statutory Liability',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Contractors\' Pollution Liability',
    included: [true, true, true, false, false],
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
    rangeMax: 800,
    notes: 'Low-risk retail, minimal customer interaction hazards',
  },
  {
    industry: 'Retail (Large)',
    coverage: '$2M',
    rangeMin: 700,
    rangeMax: 1500,
    notes: 'Large footprint, high customer traffic',
  },
  {
    industry: 'Cafe/Restaurant (Small)',
    coverage: '$2M',
    rangeMin: 900,
    rangeMax: 1800,
    notes: 'Food handling, alcohol service, slip/fall risks',
  },
  {
    industry: 'Cafe/Restaurant (Large)',
    coverage: '$5M',
    rangeMin: 2000,
    rangeMax: 3500,
    notes: 'Larger venue, higher capacity, increased risks',
  },
  {
    industry: 'Hairdresser/Beauty',
    coverage: '$2M',
    rangeMin: 600,
    rangeMax: 1200,
    notes: 'Chemical exposure, injury during treatment',
  },
  {
    industry: 'Plumber',
    coverage: '$5M',
    rangeMin: 1200,
    rangeMax: 2500,
    notes: 'Water damage risk, working in customer homes',
  },
  {
    industry: 'Electrician',
    coverage: '$5M',
    rangeMin: 1500,
    rangeMax: 3000,
    notes: 'High-risk work, fire/electrocution potential',
  },
  {
    industry: 'Builder/Contractor',
    coverage: '$5M',
    rangeMin: 1800,
    rangeMax: 3500,
    notes: 'Construction site risks, damage potential',
  },
  {
    industry: 'Carpenter',
    coverage: '$2M - $5M',
    rangeMin: 900,
    rangeMax: 2500,
    notes: 'Varies by work type and project complexity',
  },
  {
    industry: 'Roofing Specialist',
    coverage: '$5M - $10M',
    rangeMin: 2500,
    rangeMax: 5000,
    notes: 'High-risk work at heights',
  },
  {
    industry: 'Accountant/Tax Adviser',
    coverage: '$2M',
    rangeMin: 1000,
    rangeMax: 2500,
    notes: 'Professional indemnity separate; PL often bundled',
  },
  {
    industry: 'Consultant',
    coverage: '$2M',
    rangeMin: 1200,
    rangeMax: 3000,
    notes: 'Depends on field; tech consultants higher risk',
  },
  {
    industry: 'Gym/Fitness Studio',
    coverage: '$5M',
    rangeMin: 1500,
    rangeMax: 3500,
    notes: 'Injury during classes/training, equipment liability',
  },
  {
    industry: 'Kindergarten/Early Childhood',
    coverage: '$5M',
    rangeMin: 1800,
    rangeMax: 4000,
    notes: 'Duty of care to young children',
  },
  {
    industry: 'Primary School',
    coverage: '$5M - $10M',
    rangeMin: 3000,
    rangeMax: 6000,
    notes: 'Depends on student numbers and facilities',
  },
  {
    industry: 'Event Management',
    coverage: '$5M - $10M',
    rangeMin: 2500,
    rangeMax: 5000,
    notes: 'Public events, visitor injury risk',
  },
  {
    industry: 'Property Management',
    coverage: '$2M - $5M',
    rangeMin: 800,
    rangeMax: 2000,
    notes: 'Building maintenance, tenant/visitor injuries',
  },
  {
    industry: 'Pet Grooming',
    coverage: '$2M',
    rangeMin: 700,
    rangeMax: 1500,
    notes: 'Animal-related risks, handling injuries',
  },
  {
    industry: 'Landscape/Gardening',
    coverage: '$2M - $5M',
    rangeMin: 900,
    rangeMax: 2000,
    notes: 'Varies by equipment and scale of work',
  },
];
