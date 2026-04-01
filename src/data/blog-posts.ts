export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-public-liability-nz',
    title: 'Understanding Public Liability Insurance in New Zealand',
    excerpt: 'A comprehensive guide to what public liability insurance covers, why it matters, and how it protects your business from unexpected claims.',
    date: '2026-03-15',
    category: 'Guides',
    author: 'Cover4You Team',
    content: `
      <div class="prose prose-sm max-w-none">
        <h2>What is Public Liability Insurance?</h2>
        <p>Public liability insurance is a form of business insurance that protects your company against legal liability for injuries or property damage caused to members of the public during the course of your business operations.</p>

        <h3>Why It Matters in New Zealand</h3>
        <p>Under New Zealand law, businesses have a duty of care towards the public. If someone is injured or their property is damaged due to your business activities, and you're found liable, the costs can be astronomical. Public liability insurance provides essential protection against these financial risks.</p>

        <h3>What's Typically Covered</h3>
        <ul>
          <li>Bodily injury to members of the public</li>
          <li>Property damage caused by your business</li>
          <li>Legal costs and court fees</li>
          <li>Medical expenses for injured parties</li>
          <li>Loss of earnings if you're unable to work after an incident</li>
        </ul>

        <h3>Coverage Limits in NZ</h3>
        <p>Coverage limits typically range from $1 million to $20 million, depending on your industry and risk profile. Contractors and high-risk industries often require higher limits.</p>

        <h3>Exclusions to Be Aware Of</h3>
        <p>Public liability insurance typically doesn't cover:</p>
        <ul>
          <li>Injury to your own employees (covered by ACC)</li>
          <li>Professional errors or negligence (requires Professional Indemnity)</li>
          <li>Damage to your own property</li>
          <li>Intentional harm or criminal acts</li>
        </ul>

        <h2>Getting the Right Cover</h2>
        <p>The appropriate coverage level depends on your industry, the nature of your work, and your annual turnover. We recommend comparing quotes from multiple insurers to find the best protection at the right price.</p>
      </div>
    `,
  },
  {
    slug: 'how-much-cover-does-your-business-need',
    title: 'How Much Public Liability Cover Does Your Business Need?',
    excerpt: 'Determining the right coverage amount for your business is crucial. Learn how to assess your risk profile and choose appropriate coverage limits.',
    date: '2026-03-08',
    category: 'Guides',
    author: 'Cover4You Team',
    content: `
      <div class="prose prose-sm max-w-none">
        <h2>Assessing Your Coverage Needs</h2>
        <p>Choosing the right amount of public liability cover is one of the most important decisions you'll make. Too little coverage leaves you exposed to financial risk; too much may mean unnecessary expense.</p>

        <h3>Key Factors to Consider</h3>
        <ul>
          <li><strong>Industry Risk:</strong> High-contact industries like hospitality or construction require more cover than office-based businesses.</li>
          <li><strong>Business Size:</strong> Larger operations with more employees and customer interactions need higher limits.</li>
          <li><strong>Type of Work:</strong> Physical work, especially at heights or with machinery, increases risk.</li>
          <li><strong>Client Requirements:</strong> Many contracts require specific minimum coverage levels.</li>
          <li><strong>Regulatory Requirements:</strong> Some industries have mandatory minimums under NZ law.</li>
        </ul>

        <h3>Common Coverage Levels</h3>
        <table class="w-full border-collapse border border-slate-300">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-300 p-3 text-left">Industry/Business Type</th>
              <th class="border border-slate-300 p-3 text-left">Typical Coverage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-3">Retail & Office</td>
              <td class="border border-slate-300 p-3">$1M - $2M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Hospitality & Food Service</td>
              <td class="border border-slate-300 p-3">$2M - $5M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Trade & Contractors</td>
              <td class="border border-slate-300 p-3">$5M - $10M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Construction & Heavy Industry</td>
              <td class="border border-slate-300 p-3">$10M - $20M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Schools & Large Venues</td>
              <td class="border border-slate-300 p-3">$5M - $20M</td>
            </tr>
          </tbody>
        </table>

        <h3>The Financial Impact of Claims</h3>
        <p>A serious injury claim could easily exceed $500,000 in medical costs, rehabilitation, and ongoing care. Major structural damage could run into millions. Choosing inadequate cover can be catastrophic.</p>

        <h2>Recommendations by Industry</h2>
        <p>Different industries face different risk profiles. Trade contractors, for example, typically require $5M minimum cover due to the physical nature of their work and industry standards. Schools and education providers need high coverage due to duty of care obligations to young people.</p>

        <h2>Next Steps</h2>
        <p>Use our free quote comparison tool to see how different coverage levels affect your premium. We'll help you find the right balance between protection and cost.</p>
      </div>
    `,
  },
  {
    slug: 'public-liability-vs-professional-indemnity',
    title: 'Public Liability vs Professional Indemnity: Key Differences',
    excerpt: 'Confused about the difference between public liability and professional indemnity insurance? This guide breaks down what each covers and when you need both.',
    date: '2026-02-28',
    category: 'Guides',
    author: 'Cover4You Team',
    content: `
      <div class="prose prose-sm max-w-none">
        <h2>Understanding the Key Differences</h2>
        <p>Many business owners confuse public liability insurance with professional indemnity insurance. While they both protect against liability claims, they cover very different types of incidents.</p>

        <h3>Public Liability Insurance</h3>
        <p><strong>Covers:</strong> Physical injury or property damage caused to members of the public during your business operations.</p>
        <ul>
          <li>A customer slips and falls in your shop</li>
          <li>Your tradesman damages a client's fence while working</li>
          <li>A product causes allergic reaction to a customer</li>
          <li>Injury from equipment or premises defect</li>
        </ul>

        <h3>Professional Indemnity Insurance</h3>
        <p><strong>Covers:</strong> Financial loss suffered by clients due to professional errors, omissions, or negligent advice.</p>
        <ul>
          <li>An accountant provides incorrect tax advice costing a client money</li>
          <li>An architect's design flaw causes construction problems</li>
          <li>A consultant's recommendation results in financial loss</li>
          <li>A lawyer's negligence causes a client to lose a case</li>
        </ul>

        <h3>The Core Distinction</h3>
        <table class="w-full border-collapse border border-slate-300">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-300 p-3 text-left">Aspect</th>
              <th class="border border-slate-300 p-3 text-left">Public Liability</th>
              <th class="border border-slate-300 p-3 text-left">Professional Indemnity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-3"><strong>Type of Harm</strong></td>
              <td class="border border-slate-300 p-3">Physical injury / property damage</td>
              <td class="border border-slate-300 p-3">Professional errors / bad advice</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3"><strong>Applies To</strong></td>
              <td class="border border-slate-300 p-3">All businesses</td>
              <td class="border border-slate-300 p-3">Professional services only</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3"><strong>Typical Claims</strong></td>
              <td class="border border-slate-300 p-3">Accidents, injuries</td>
              <td class="border border-slate-300 p-3">Negligence, breach of duty</td>
            </tr>
          </tbody>
        </table>

        <h2>Who Needs Both?</h2>
        <p>If you provide professional services (consulting, accounting, legal, design, engineering, etc.), you need BOTH policies. Public liability covers incidents involving the public, while professional indemnity covers errors in your professional work.</p>

        <h2>Cost Considerations</h2>
        <p>Professional indemnity insurance is typically more expensive than public liability because professional errors can result in significant financial claims. However, for professional service providers, it's an essential investment.</p>
      </div>
    `,
  },
  {
    slug: 'top-5-claims-nz-businesses-face',
    title: 'Top 5 Claims That NZ Businesses Face',
    excerpt: 'Real-world examples of the most common public liability claims in New Zealand and what they cost. Learn from others\' experiences to better protect your business.',
    date: '2026-02-20',
    category: 'Industry Insights',
    author: 'Cover4You Team',
    content: `
      <div class="prose prose-sm max-w-none">
        <h2>Real Claims, Real Costs</h2>
        <p>Understanding the types of claims that actually happen helps you appreciate why adequate public liability insurance is so important. Here are the five most common claims we see in New Zealand.</p>

        <h3>1. Slip and Fall Injuries (Most Common)</h3>
        <p><strong>Frequency:</strong> ~30% of all claims</p>
        <p><strong>Average Cost:</strong> $50,000 - $200,000</p>
        <p>A customer slips on a wet floor in a retail store or café, sustaining injuries. Claims include medical expenses, rehabilitation, and loss of earnings.</p>
        <p><strong>Prevention Tip:</strong> Implement clear safety procedures, use non-slip flooring, and maintain detailed incident records.</p>

        <h3>2. Tradespeople Causing Property Damage</h3>
        <p><strong>Frequency:</strong> ~20% of all claims</p>
        <p><strong>Average Cost:</strong> $10,000 - $500,000+</p>
        <p>A plumber damages a water pipe causing flooding, an electrician causes a fire, or a builder damages structural elements during work.</p>
        <p><strong>Prevention Tip:</strong> Ensure proper training, use qualified tradespeople, and have clear scope documents for all work.</p>

        <h3>3. Allergic Reactions to Food/Products</h3>
        <p><strong>Frequency:</strong> ~15% of claims</p>
        <p><strong>Average Cost:</strong> $20,000 - $300,000</p>
        <p>A customer has an allergic reaction to food or a product not properly labeled or handled. Increasingly common as allergen awareness grows.</p>
        <p><strong>Prevention Tip:</strong> Maintain accurate allergen information, clearly label products, and train staff on allergen handling.</p>

        <h3>4. Workplace Visitor Injuries</h3>
        <p><strong>Frequency:</strong> ~15% of claims</p>
        <p><strong>Average Cost:</strong> $30,000 - $250,000</p>
        <p>A delivery person, contractor, or client visiting your premises is injured due to unsafe conditions.</p>
        <p><strong>Prevention Tip:</strong> Conduct regular safety audits, maintain safe premises, and provide induction to all visitors.</p>

        <h3>5. Product Liability Issues</h3>
        <p><strong>Frequency:</strong> ~10% of claims</p>
        <p><strong>Average Cost:</strong> $50,000 - $1,000,000+</p>
        <p>A product sold causes injury or damage due to manufacturing defects, unsafe design, or inadequate warnings.</p>
        <p><strong>Prevention Tip:</strong> Ensure quality control, provide proper product warnings, and maintain good documentation.</p>

        <h2>The Bottom Line</h2>
        <p>These claims happen to responsible businesses all the time. That's why public liability insurance exists. Having adequate cover means you can manage these incidents financially without devastating your business.</p>

        <h2>Protect Yourself Now</h2>
        <p>Compare public liability insurance quotes from NZ insurers today and ensure you have the right protection for your business.</p>
      </div>
    `,
  },
  {
    slug: 'trade-contractors-5m-cover-standard',
    title: 'Trade Contractors: Why $5M Cover is Now Standard',
    excerpt: 'Exploring why trade contractors and builders increasingly require $5M public liability cover as an industry standard and what this means for your business.',
    date: '2026-02-10',
    category: 'Industry Insights',
    author: 'Cover4You Team',
    content: `
      <div class="prose prose-sm max-w-none">
        <h2>The Shift to Higher Coverage</h2>
        <p>Over the last five years, $5M public liability cover has become the de facto industry standard for trade contractors in New Zealand. This shift reflects the high-risk nature of construction and trade work, combined with increasing awareness of potential liabilities.</p>

        <h3>Why $5M is the New Minimum</h3>

        <h4>1. Construction Site Hazards</h4>
        <p>Trade work carries inherent risks. A serious injury on a building site, a structural failure caused by poor workmanship, or damage to a client's property can easily exceed $2M in claims.</p>

        <h4>2. Client Requirements</h4>
        <p>Major clients, property developers, and construction companies now routinely require contractors to hold minimum $5M cover as a contractual requirement. Without it, you simply won't get the work.</p>

        <h4>3. Industry Liability Trends</h4>
        <p>The Master Builders Association and other trade bodies have increased recommended minimums as they've observed the true cost of claims in their sectors.</p>

        <h4>4. Duty of Care</h4>
        <p>Courts increasingly hold trade contractors to high standards. Inadequate insurance coverage is seen as evidence of inadequate risk management.</p>

        <h3>Real Cost Examples</h3>
        <ul>
          <li><strong>Serious Injury:</strong> $500,000 - $2,000,000 (permanent disability, ongoing care)</li>
          <li><strong>Structural Damage:</strong> $1,000,000 - $5,000,000+ (building defects)</li>
          <li><strong>Multiple Injuries:</strong> $3,000,000+ (site accident with multiple casualties)</li>
          <li><strong>Consequential Loss:</strong> $500,000+ (project delays, client losses)</li>
        </ul>

        <h3>Coverage by Contractor Type</h3>
        <table class="w-full border-collapse border border-slate-300">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-300 p-3 text-left">Contractor Type</th>
              <th class="border border-slate-300 p-3 text-left">Recommended Cover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-3">Sole Traders (Low Risk)</td>
              <td class="border border-slate-300 p-3">$2M - $5M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">General Contractors</td>
              <td class="border border-slate-300 p-3">$5M (minimum)</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Builders & Developers</td>
              <td class="border border-slate-300 p-3">$5M - $10M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">High-Risk (Demolition, Roofing)</td>
              <td class="border border-slate-300 p-3">$10M+</td>
            </tr>
          </tbody>
        </table>

        <h2>Competitive Advantage</h2>
        <p>Having $5M cover puts you in a strong position to win contracts. Clients see it as evidence of professionalism and financial responsibility. The small additional premium is easily offset by increased job opportunities.</p>

        <h2>Getting Competitive Rates</h2>
        <p>While $5M cover costs more than $2M, many insurers offer competitive rates for experienced contractors with good safety records. Use our quote comparison tool to find the best rates for your coverage level.</p>
      </div>
    `,
  },
  {
    slug: 'schools-education-duty-of-care',
    title: 'Schools & Education Providers: Your Duty of Care Obligations',
    excerpt: 'Understanding your legal duty of care obligations as an education provider and why comprehensive public liability insurance is non-negotiable.',
    date: '2026-02-01',
    category: 'Industry Insights',
    author: 'Cover4You Team',
    content: `
      <div class="prose prose-sm max-w-none">
        <h2>The Duty of Care in Education</h2>
        <p>Under New Zealand law, schools, early childhood centers, and other education providers have a strict legal duty of care towards the children in their charge. This duty extends beyond simple negligence—you must take all reasonable steps to ensure child safety.</p>

        <h3>What Duty of Care Means</h3>
        <p>Education providers must:</p>
        <ul>
          <li>Maintain safe premises free from hazards</li>
          <li>Provide adequate supervision appropriate to child age and activities</li>
          <li>Have proper safety procedures for all activities</li>
          <li>Respond appropriately to known risks</li>
          <li>Train staff in safety protocols</li>
          <li>Manage health and medical issues appropriately</li>
        </ul>

        <h3>Common Liability Scenarios</h3>

        <h4>Physical Injuries from Unsafe Premises</h4>
        <p>Broken equipment, unsecured furniture, hazardous substances, or unsafe play areas causing injury to children.</p>

        <h4>Supervision Failures</h4>
        <p>Inadequate supervision during activities, resulting in injury or harm to children.</p>

        <h4>Activity-Related Injuries</h4>
        <p>Injuries during sporting activities, field trips, or excursions where proper safety procedures weren't followed.</p>

        <h4>Health & Hygiene Issues</h4>
        <p>Allergic reactions, food poisoning, or disease transmission due to inadequate hygiene protocols.</p>

        <h3>Insurance Coverage Recommendations</h3>
        <table class="w-full border-collapse border border-slate-300">
          <thead>
            <tr class="bg-slate-100">
              <th class="border border-slate-300 p-3 text-left">Institution Type</th>
              <th class="border border-slate-300 p-3 text-left">Recommended Cover</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-300 p-3">Small Playcentre/Preschool</td>
              <td class="border border-slate-300 p-3">$2M - $5M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Primary School</td>
              <td class="border border-slate-300 p-3">$5M - $10M</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Secondary School</td>
              <td class="border border-slate-300 p-3">$10M+</td>
            </tr>
            <tr>
              <td class="border border-slate-300 p-3">Large Education Complex</td>
              <td class="border border-slate-300 p-3">$20M+</td>
            </tr>
          </tbody>
        </table>

        <h3>Beyond Insurance: Risk Management</h3>
        <p>While insurance is essential, the best protection is proper risk management:</p>
        <ul>
          <li>Regular safety audits of premises and equipment</li>
          <li>Clear supervision policies appropriate to age groups</li>
          <li>Comprehensive staff training in safety and emergency procedures</li>
          <li>Health and safety committees with regular meetings</li>
          <li>Documented incident reporting and response procedures</li>
          <li>Regular review of safety policies with staff and parents</li>
        </ul>

        <h2>The Cost of Complacency</h2>
        <p>A serious injury claim from a child can easily reach $2M-$5M when ongoing care and support are included. Inadequate insurance puts the entire institution at financial risk.</p>

        <h2>Next Steps</h2>
        <p>Review your current coverage and compare options to ensure you have adequate protection for your institution size and risk profile. Get a quote today and ensure your duty of care is properly protected.</p>
      </div>
    `,
  },
];
