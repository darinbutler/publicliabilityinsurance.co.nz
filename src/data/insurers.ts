export interface InsurerComparison {
  name: string;
  established: number;
  nzOwned: boolean;
  features: string[];
  premiumRange: string;
  customerService: string;
  claimsSpeed: string;
}

export const insurers: InsurerComparison[] = [
  {
    name: 'Insurer A',
    established: 2005,
    nzOwned: true,
    features: [
      'Online quote in 5 minutes',
      'Instant policy issue',
      'No annual review required',
      'Broker support available',
      'Industry-specific products',
    ],
    premiumRange: '$500 - $3,000 (varies by coverage)',
    customerService: 'Phone + Email support, average response <4 hours',
    claimsSpeed: 'Simple claims: 2-4 weeks, Complex: 8-12 weeks',
  },
  {
    name: 'Insurer B',
    established: 1998,
    nzOwned: false,
    features: [
      '24/7 phone support',
      'Dedicated account managers',
      'Risk management resources',
      'Optional zero excess available',
      'Multi-policy discounts',
    ],
    premiumRange: '$600 - $3,500 (varies by coverage)',
    customerService: 'Phone 24/7, dedicated managers for large accounts',
    claimsSpeed: 'Simple claims: 1-3 weeks, Complex: 6-10 weeks',
  },
  {
    name: 'Insurer C',
    established: 2010,
    nzOwned: true,
    features: [
      'Industry specialists on staff',
      'Flexible payment options',
      'Loyalty rewards program',
      'Online claims lodgement',
      'Comprehensive FAQs and resources',
    ],
    premiumRange: '$450 - $2,800 (varies by coverage)',
    customerService: 'Email + Phone, response <6 hours',
    claimsSpeed: 'Simple claims: 3-5 weeks, Complex: 10-14 weeks',
  },
  {
    name: 'Insurer D',
    established: 2015,
    nzOwned: false,
    features: [
      'Lowest-cost market leader',
      'Comparison tool friendly',
      'Basic coverage options',
      'Email support',
      'Good for simple businesses',
    ],
    premiumRange: '$300 - $2,000 (varies by coverage)',
    customerService: 'Email support, response <24 hours',
    claimsSpeed: 'Simple claims: 4-6 weeks, Complex: 12-16 weeks',
  },
  {
    name: 'Insurer E',
    established: 2002,
    nzOwned: true,
    features: [
      'Premium risk assessment',
      'Full-service broker partnerships',
      'Specialized trade contractor products',
      'Injury management assistance',
      'Professional indemnity bundling',
    ],
    premiumRange: '$700 - $4,000 (varies by coverage)',
    customerService: 'Phone + Email, dedicated brokers available',
    claimsSpeed: 'Simple claims: 2-3 weeks, Complex: 6-9 weeks',
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
    feature: 'Legal Defense Costs',
    included: [true, true, true, true, true],
  },
  {
    feature: 'Medical Payments Coverage',
    included: [true, true, true, false, true],
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
    included: [false, true, true, false, true],
  },
  {
    feature: 'Management Liability',
    included: [false, true, false, false, true],
  },
  {
    feature: 'Cyber Liability',
    included: [false, false, false, false, true],
  },
  {
    feature: 'Employee Dishonesty',
    included: [false, true, true, false, true],
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
    industry: 'Café/Restaurant (Small)',
    coverage: '$2M',
    rangeMin: 900,
    rangeMax: 1800,
    notes: 'Food handling, alcohol service, slip/fall risks',
  },
  {
    industry: 'Café/Restaurant (Large)',
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
    industry: 'Accountant/Tax Advisor',
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
