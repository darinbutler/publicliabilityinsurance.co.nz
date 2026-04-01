export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Coverage & Coverage Levels
  {
    category: 'Coverage & Coverage Levels',
    question: 'What is public liability insurance?',
    answer: 'Public liability insurance protects your business against legal liability for bodily injury or property damage caused to members of the public during the course of your business operations. It covers legal costs, medical expenses, and compensation claims.',
  },
  {
    category: 'Coverage & Coverage Levels',
    question: 'What coverage limit do I need for my business?',
    answer: 'The appropriate coverage depends on your industry, business size, and type of work. Retail typically needs $1M-$2M, hospitality $2M-$5M, trade contractors $5M+, and schools $5M-$20M. Review your industry standards and client requirements.',
  },
  {
    category: 'Coverage & Coverage Levels',
    question: 'What does "per occurrence" mean?',
    answer: 'Per occurrence refers to the maximum amount the insurer will pay out for a single incident. For example, with $5M per occurrence, the insurer will pay up to $5M for one event, but could face multiple separate claims up to the annual aggregate limit.',
  },
  {
    category: 'Coverage & Coverage Levels',
    question: 'What is the difference between $1M, $2M, $5M, and $10M coverage?',
    answer: 'These represent different maximum payout amounts per claim. $1M is suitable for low-risk retail businesses, $2M for hospitality, $5M for trade contractors and many professional services, and $10M+ for high-risk industries, schools, or large operations.',
  },
  {
    category: 'Coverage & Coverage Levels',
    question: 'Do I need coverage above $10M?',
    answer: 'Businesses with significant risk exposure, large employee bases, or major client requirements may need $10M-$20M+. This includes construction companies, large education providers, venue operators, and some professional services. Check your contracts and industry standards.',
  },

  // What\'s Covered
  {
    category: 'What\'s Covered',
    question: 'What does public liability insurance cover?',
    answer: 'Public liability covers: bodily injury to members of the public, property damage you cause, legal defense costs, court fees, medical expenses, and loss of earnings claims. It applies to incidents arising from your business operations.',
  },
  {
    category: 'What\'s Covered',
    question: 'What is NOT covered by public liability insurance?',
    answer: 'Not covered: injury to your own employees (ACC handles this), professional errors requiring PI insurance, damage to your own property, intentional harm or criminal acts, defective workmanship (usually covered by defects liability), fines or penalties.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does public liability cover property damage I cause?',
    answer: 'Yes, if you damage a client\'s or third party\'s property during your business operations. For example, a plumber damaging a pipe or a tradie damaging a fence. However, damage to your own property is your responsibility.',
  },
  {
    category: 'What\'s Covered',
    question: 'Are legal costs covered?',
    answer: 'Yes, public liability typically covers legal defense costs and court fees. The insurer usually appoints lawyers to defend claims on your behalf, protecting you from significant legal expenses.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does it cover food poisoning claims?',
    answer: 'Yes, if you operate a food business and someone suffers food poisoning from your food, public liability should cover the resulting claim. However, ensuring proper food safety protocols is essential.',
  },

  // Exclusions & Limitations
  {
    category: 'Exclusions & Limitations',
    question: 'Why isn\'t injury to my employees covered?',
    answer: 'Employee injuries are covered by ACC (Accident Compensation Corporation) in New Zealand. Public liability is for injuries to members of the public, not your own team.',
  },
  {
    category: 'Exclusions & Limitations',
    question: 'What is a "duty to defend" vs "damages only"?',
    answer: 'Duty to defend means the insurer pays legal costs to defend you. Damages only means they only cover compensation if you lose. Always ensure your policy includes duty to defend.',
  },
  {
    category: 'Exclusions & Limitations',
    question: 'Are gradual pollutions or environmental claims covered?',
    answer: 'Typically no. Pollution and environmental damage are usually excluded or have special limitations. If this is relevant to your business, discuss specific environmental liability coverage.',
  },
  {
    category: 'Exclusions & Limitations',
    question: 'Does professional indemnity come with public liability?',
    answer: 'No, they are separate policies. Professional indemnity covers errors in professional advice, while public liability covers physical injury/property damage. Professional service providers need both.',
  },

  // Cost & Premiums
  {
    category: 'Cost & Premiums',
    question: 'What factors affect my public liability insurance premium?',
    answer: 'Factors include: business type and industry, annual turnover, number of employees, type of work (manual vs office), safety record, claims history, coverage limit, deductible amount, and location.',
  },
  {
    category: 'Cost & Premiums',
    question: 'Why does a higher coverage limit cost more?',
    answer: 'Higher limits mean greater potential payout, so the insurer charges higher premiums to cover the increased risk. However, the cost per dollar of coverage often decreases with higher limits.',
  },
  {
    category: 'Cost & Premiums',
    question: 'Can I reduce my premium by increasing my excess/deductible?',
    answer: 'Yes, choosing a higher deductible (the amount you pay toward a claim) will lower your premium. However, ensure you can afford the deductible if a claim occurs.',
  },
  {
    category: 'Cost & Premiums',
    question: 'How much does public liability insurance typically cost?',
    answer: 'Costs vary widely based on industry and coverage. Retail might pay $500-$1,500 annually for $2M cover, while trade contractors pay $1,500-$4,000 for $5M cover. Get specific quotes for your business.',
  },
  {
    category: 'Cost & Premiums',
    question: 'Are there discounts available?',
    answer: 'Many insurers offer discounts for: good safety records, industry affiliations, bundling multiple policies, long-term loyalty, or having implemented safety systems (like ISO 45001).',
  },

  // Claims Process
  {
    category: 'Claims Process',
    question: 'How do I make a claim?',
    answer: 'Contact your insurer immediately when an incident occurs. Provide detailed information about what happened, people involved, any witnesses, photographs, and documentation. Don\'t admit liability; let the insurer handle this.',
  },
  {
    category: 'Claims Process',
    question: 'How long does a claim take to settle?',
    answer: 'Simple claims may settle in weeks, while complex cases can take months or even years. The insurer will investigate and negotiate with the claimant. You\'ll be kept informed throughout.',
  },
  {
    category: 'Claims Process',
    question: 'What happens if someone sues me?',
    answer: 'Notify your insurer immediately. They will provide legal representation and handle the defense. The insurer covers legal costs (up to policy limits) and any damages awarded. Do not communicate directly with the claimant.',
  },
  {
    category: 'Claims Process',
    question: 'Will a claim increase my future premiums?',
    answer: 'Possibly. A claim will be noted on your record and may affect future premiums. However, insurers understand that accidents happen; a single legitimate claim won\'t necessarily cause major increases.',
  },
  {
    category: 'Claims Process',
    question: 'What if the claimant\'s claim exceeds my coverage limit?',
    answer: 'The insurer will pay up to your coverage limit. Any amount above that becomes your personal liability. This is why choosing adequate coverage is important.',
  },

  // Specific Industries
  {
    category: 'Specific Industries',
    question: 'What public liability coverage do contractors need?',
    answer: 'Trade contractors typically need $5M-$10M coverage minimum. Many major clients require $5M as a contractual requirement. The exact amount depends on the type of work and project values.',
  },
  {
    category: 'Specific Industries',
    question: 'Do schools need different coverage than other businesses?',
    answer: 'Yes, schools need higher coverage due to duty of care obligations toward children. Primary schools typically need $5M-$10M, while secondary schools and large institutions may need $10M-$20M.',
  },
  {
    category: 'Specific Industries',
    question: 'What about hospitality and food venues?',
    answer: 'Hospitality typically needs $2M-$5M coverage. Risks include slip/fall injuries, food poisoning, and alcohol-related incidents. Food safety practices directly impact your premium.',
  },
  {
    category: 'Specific Industries',
    question: 'Do retail shops need public liability?',
    answer: 'Absolutely. Retail faces slip/fall risks, product liability, and customer injuries. Coverage typically starts at $1M-$2M depending on shop size and products sold.',
  },
  {
    category: 'Specific Industries',
    question: 'What about online-only businesses?',
    answer: 'Even online businesses need public liability if they have any physical component (delivery, events, offices). Digital-only businesses with no physical interaction typically face lower risk.',
  },

  // NZ-Specific
  {
    category: 'NZ-Specific',
    question: 'Is public liability insurance required by law in New Zealand?',
    answer: 'Not universally, but many contracts require it, and it\'s an essential risk management tool. Some industries have de facto requirements set by industry bodies or major clients.',
  },
  {
    category: 'NZ-Specific',
    question: 'What is ICNZ and why does it matter?',
    answer: 'ICNZ (Insurance Council of New Zealand) sets standards for the insurance industry. They provide dispute resolution and consumer protections. Using ICNZ-registered insurers provides additional security.',
  },
  {
    category: 'NZ-Specific',
    question: 'Are NZ insurers different from Australian ones?',
    answer: 'Yes. NZ insurance is governed by NZ law and regulated by ICNZ. While some Australian companies operate here, ensure your insurer understands NZ legal requirements and precedents.',
  },
  {
    category: 'NZ-Specific',
    question: 'What is the Health and Safety at Work Act 2015 connection?',
    answer: 'The HSWA 2015 places strong duty of care obligations on businesses. Having adequate public liability insurance demonstrates commitment to managing those risks. Non-compliance can aggravate claims.',
  },
  {
    category: 'NZ-Specific',
    question: 'How does ACC affect my public liability insurance?',
    answer: 'ACC covers employee injuries, but not visitor injuries. Public liability covers visitor and public injuries. They complement each other—you need both for full protection.',
  },

  // Quote & Comparison
  {
    category: 'Quote & Comparison',
    question: 'How long does it take to get a quote?',
    answer: 'Basic quotes typically take 5-15 minutes to request online. Detailed quotes requiring more information may take 24-48 hours. We compare quotes from multiple insurers for you.',
  },
  {
    category: 'Quote & Comparison',
    question: 'What information do I need to get an accurate quote?',
    answer: 'Business name and type, annual turnover, number of employees, specific activities/operations, claims history, safety measures in place, and desired coverage level. More detail = more accurate quote.',
  },
  {
    category: 'Quote & Comparison',
    question: 'Can I compare quotes from different insurers easily?',
    answer: 'Yes! Our comparison tool lets you see quotes from multiple insurers side-by-side, including coverage details, exclusions, and premiums. This helps you make an informed decision.',
  },
  {
    category: 'Quote & Comparison',
    question: 'Should I always choose the cheapest quote?',
    answer: 'Not necessarily. The cheapest premium may have higher excess, lower coverage limits, or more exclusions. Compare the full package: coverage, excess, customer service, and claims handling reputation.',
  },
  {
    category: 'Quote & Comparison',
    question: 'Can I negotiate on the quoted premium?',
    answer: 'Sometimes. Insurers may offer discounts for: longer policy terms, bundling multiple policies, improved safety measures, or loyalty. It\'s worth asking, but don\'t compromise on coverage.',
  },
];
