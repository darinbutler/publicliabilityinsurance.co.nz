export interface BusinessType {
  slug: string;
  name: string;
  shortName: string;
  category: 'trades' | 'service' | 'food' | 'retail';
  icon: string;
  heroImage: string;
  heroGradient: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  keyRisks: string[];
  whatsCovered: string[];
  typicalPremium: string;
  minimumCover: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const businessTypes: BusinessType[] = [
  // TRADES
  {
    slug: 'builders',
    name: 'Builders',
    shortName: 'Building',
    category: 'trades',
    icon: '🏗️',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Builders NZ | Cover4You',
    metaDescription: 'Builders public liability insurance in NZ from $800/year. Cover property damage, personal injury & legal costs. Get a quote online.',
    headline: 'Public Liability Insurance for Builders',
    intro: 'Building sites involve constant risk of property damage and third-party injury. Our specialist builders insurance protects your business from costly claims while meeting NZ regulations and client requirements.',
    keyRisks: [
      'Damage to client property while working on-site',
      'Injury to third parties (pedestrians, neighbours, site visitors)',
      'Defective workmanship claims and remedial costs',
      'Injury to workers on your building sites',
      'Structural damage from dropped tools or materials',
      'Weather damage during construction',
      'Liability during renovation or demolition work',
      'Site accidents involving machinery and equipment'
    ],
    whatsCovered: [
      'Legal costs for defending claims',
      'Compensation payouts to injured third parties',
      'Property damage caused by your work',
      'Personal injury liability on building sites',
      'Emergency medical expenses for on-site injuries',
      'Remedial costs for defective workmanship',
      'Temporary structures and protection costs'
    ],
    typicalPremium: '$800 – $2,000/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: `Do I need public liability if I'm a sole trader builder?`,
        a: 'Yes. Most building contracts and councils require proof of public liability insurance before you can start work. It protects you if your work causes injury or property damage.'
      },
      {
        q: 'Are defects and remedial work covered?',
        a: 'Coverage depends on your policy. Some policies exclude defective workmanship, but cover can include remedial costs resulting in injury or third-party property damage.'
      },
      {
        q: 'What if I work at height or use scaffolding?',
        a: 'Standard policies cover these activities. However, high-risk work like roofing or crane operations may need specific exclusions or higher premiums. Discuss with your insurer.'
      },
      {
        q: 'Does the cover apply to subcontractors I hire?',
        a: `Your policy covers your own liability. Each subcontractor should have their own insurance. Always check they're insured before engaging them.`
      }
    ],
    relatedSlugs: ['roofers', 'painters-decorators', 'electricians']
  },
  {
    slug: 'electricians',
    name: 'Electricians',
    shortName: 'Electrical Work',
    category: 'trades',
    icon: '⚡',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Electricians NZ | Cover4You',
    metaDescription: 'Electricians public liability insurance NZ from $600/year. Cover electrical fires, injury & property damage. Licensed & compliant. Compare quotes now.',
    headline: 'Public Liability Insurance for Electricians',
    intro: 'Electrical work carries high risk of fire, shock, and serious injury to yourself and third parties. Our electricians insurance meets NZ regulations and provides comprehensive protection for your growing business.',
    keyRisks: [
      'Electrical fire caused by faulty installation',
      'Electrocution of third parties or yourself',
      'Property damage from electrical faults',
      'Death or permanent injury from electrical shock',
      'Damage to client appliances or systems during work',
      'Injury from tools or equipment failures',
      'Liability for non-compliance with NZ electrical standards',
      'Damage to surrounding infrastructure'
    ],
    whatsCovered: [
      'Legal defence costs for electrical injury claims',
      'Compensation for third-party burns and electrocution',
      'Property damage caused by electrical work',
      'Fire damage liability',
      'Medical expenses for shock injuries',
      'Damage to client wiring and appliances',
      'Costs of making safe a faulty installation'
    ],
    typicalPremium: '$600 – $1,500/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: `Do I need insurance if I'm a registered electrician?`,
        a: `Yes. Registration shows you're qualified, but public liability insurance is separate—it covers financial claims if your work causes injury or damage. Most clients and councils require proof of insurance.`
      },
      {
        q: 'Does the cover include electrical fires I cause?',
        a: 'Yes. Liability for fires caused by faulty installation, poor workmanship, or non-compliance with NZ electrical standards is covered.'
      },
      {
        q: `What if I cause damage to a client's expensive equipment?`,
        a: 'Your public liability policy covers accidental damage caused during your work. The insurer will pay for repair or replacement up to your cover limit.'
      },
      {
        q: 'Am I covered while training new staff on-site?',
        a: 'Your policy covers your liability as the business owner. Make sure trainees are properly supervised and that you have employer liability insurance for their injuries.'
      }
    ],
    relatedSlugs: ['builders', 'plumbers', 'drain-layers']
  },
  {
    slug: 'plumbers',
    name: 'Plumbers',
    shortName: 'Plumbing',
    category: 'trades',
    icon: '🔧',
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Plumbers NZ | Cover4You',
    metaDescription: 'Plumbers public liability insurance NZ from $550/year. Cover water damage, injury, burst pipes. Licensed plumber friendly. Get quote.',
    headline: 'Public Liability Insurance for Plumbers',
    intro: 'Plumbing work involves water damage risks, lifting injuries, and working in confined spaces. Our plumbers insurance is tailored to NZ conditions and protects against costly water and injury claims.',
    keyRisks: [
      'Water damage from burst pipes or faulty installation',
      'Flooding damage to client property',
      'Injury from lifting heavy pipes or equipment',
      'Asbestos exposure from old pipes',
      'Injury from power tools and equipment',
      'Contamination of water supply from poor work',
      'Collapse or structural damage during drainage work',
      'Thermal burn injuries'
    ],
    whatsCovered: [
      'Water damage liability to client properties',
      'Flooding caused by faulty plumbing work',
      'Personal injury claims from lifting or tool accidents',
      'Legal costs for defending water damage claims',
      'Remedial costs to make safe a faulty installation',
      'Third-party injury from your work',
      'Damage to existing pipes during repair work'
    ],
    typicalPremium: '$550 – $1,400/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: 'Does public liability cover water damage I cause?',
        a: `Yes. If your faulty installation or poor work causes flooding or water damage to a client's property, public liability covers the legal costs and compensation payouts.`
      },
      {
        q: 'What if a pipe I install bursts later?',
        a: `It depends on when it bursts. If it fails immediately due to workmanship, it's usually covered. If it fails years later from normal wear, it may not be. Check your policy wording.`
      },
      {
        q: 'Am I covered for asbestos exposure?',
        a: `Standard public liability doesn't cover your own occupational illness. You may need specialist asbestos insurance. Tell your insurer if you work with asbestos.`
      },
      {
        q: 'Does the cover include commercial properties?',
        a: 'Most standard policies cover both residential and light commercial. Large commercial projects may need higher cover limits or special conditions. Confirm with your insurer.'
      }
    ],
    relatedSlugs: ['drain-layers', 'builders', 'electricians']
  },
  {
    slug: 'painters-decorators',
    name: 'Painters & Decorators',
    shortName: 'Painting & Decorating',
    category: 'trades',
    icon: '🎨',
    heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Painters NZ | Cover4You',
    metaDescription: 'Painters and decorators public liability insurance NZ from $450/year. Cover falls, property damage, injury. Affordable & quick online quotes.',
    headline: 'Public Liability Insurance for Painters & Decorators',
    intro: 'Painting and decorating involves working at height, using hazardous materials, and accessing client homes and businesses. Our painters insurance covers injury claims and property damage across residential and commercial properties.',
    keyRisks: [
      'Falls from ladders or scaffolding',
      'Injury to bystanders from falling equipment',
      'Paint spill damage to client furnishings and flooring',
      'Damage to client property during preparation work',
      'Chemical burns from paint or solvents',
      'Respiratory issues from fume exposure',
      'Structural damage from removing wallpaper or plaster',
      'Injury from power tools (sanders, grinders)'
    ],
    whatsCovered: [
      'Medical costs and compensation for fall injuries',
      'Property damage from paint spills and stains',
      'Legal defence for third-party injury claims',
      'Damage to client flooring or fixtures during work',
      'Removal costs if you damage structural elements',
      'Injury to third parties from your equipment or tools',
      'Chemical burn or inhalation injury claims'
    ],
    typicalPremium: '$450 – $1,000/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: `Am I covered if I damage a client's carpet while painting?`,
        a: 'Yes. Accidental damage to client property caused during your work is covered by public liability. Always use protective coverings to minimise claims.'
      },
      {
        q: 'What if I fall off a ladder and get injured?',
        a: `Public liability covers your injury to third parties, not your own. You'll need ACC and possibly worker injury insurance. Check if you're covered as self-employed through ACC.`
      },
      {
        q: 'Does the cover include wallpapering and decorating work?',
        a: 'Yes. Painting, wallpapering, and general decorating are all covered. Let your insurer know the full scope of your work.'
      },
      {
        q: 'Are heritage properties or period homes riskier?',
        a: 'They can be. Working with old plaster, leadpaint, or historic surfaces may need special care. Discuss heritage work with your insurer—some may ask for higher premiums or conditions.'
      }
    ],
    relatedSlugs: ['builders', 'flooring-layers', 'hairdressers']
  },
  {
    slug: 'landscapers',
    name: 'Landscapers',
    shortName: 'Landscaping',
    category: 'trades',
    icon: '🌿',
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Landscapers NZ | Cover4You',
    metaDescription: 'Landscapers public liability insurance NZ from $600/year. Cover injury, damage from machinery, trees. NZ-based underwriters. Compare quotes now.',
    headline: 'Public Liability Insurance for Landscapers',
    intro: 'Landscaping work involves heavy machinery, tree work, and working on residential and commercial properties. Our landscapers insurance protects against injury claims, property damage, and tree-related incidents.',
    keyRisks: [
      'Injury from lawnmowers and ride-on equipment',
      'Falling trees or branches damaging property',
      'Damage to underground services (pipes, cables)',
      'Injury to bystanders from flying debris',
      'Back and joint injuries from manual labour',
      'Property damage from equipment or vehicles',
      'Damage to client plants or fencing during work',
      'Chemical exposure from pesticides or fertilisers'
    ],
    whatsCovered: [
      'Third-party injury from lawnmowers or equipment',
      'Tree damage liability (excluding tree surgery)',
      'Damage to underground services you uncover',
      'Property damage from landscaping equipment',
      'Legal costs for defending injury claims',
      'Bystander injury from flying debris',
      'Damage to adjacent properties during work'
    ],
    typicalPremium: '$600 – $1,400/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: 'Does the cover include tree removal?',
        a: 'Basic public liability covers damage your equipment causes. However, tree felling is higher risk and may need specialist tree surgery insurance. Discuss with your insurer.'
      },
      {
        q: 'What if I damage a power line or underground cable?',
        a: `You're liable. Public liability covers damage you cause to third-party services. Always call Before You Dig (0800 208 696) before digging to check service locations.`
      },
      {
        q: `Am I covered if a client's child is injured by a lawnmower?`,
        a: 'Yes. Injury to third parties (including children) caused by your equipment or work is covered. This is exactly what public liability is designed for.'
      },
      {
        q: 'Does the cover extend to pesticide or fertiliser claims?',
        a: 'Standard public liability covers injury or property damage. Claims for crop failure or environmental damage may not be included. Discuss chemical work with your insurer.'
      }
    ],
    relatedSlugs: ['builders', 'drain-layers', 'tilers']
  },
  {
    slug: 'roofers',
    name: 'Roofers',
    shortName: 'Roofing',
    category: 'trades',
    icon: '🏠',
    heroImage: 'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Roofers NZ | Cover4You',
    metaDescription: 'Roofers public liability insurance NZ from $800/year. Cover falls, roof damage, injury. Work at height protection. Get a quote.',
    headline: 'Public Liability Insurance for Roofers',
    intro: 'Roofing is one of the highest-risk trades in New Zealand. Falls from height, falling debris, and weather exposure create serious injury and property damage risks. Our roofers insurance is specifically tailored to the NZ roofing industry.',
    keyRisks: [
      'Fatal or serious falls from roof height',
      'Falling tools or materials injuring pedestrians or neighbours',
      'Damage to underlying structure from poor work',
      'Weather damage during roofing work',
      'Injury from power tools on exposed roofs',
      'Damage to guttering, flashing, or downpipes',
      'Injury from roof edge collapses',
      'Asbestos exposure from old roof materials'
    ],
    whatsCovered: [
      'Serious injury and death compensation claims',
      'Property damage from falling debris',
      'Damage to underlying roof structure',
      'Guttering and flashing damage liability',
      'Legal costs for defending fall claims',
      'Third-party injury from roofing work',
      'Damage to adjacent buildings'
    ],
    typicalPremium: '$800 – $2,000/year',
    minimumCover: '$2M or $5M',
    faqs: [
      {
        q: 'Is roofing work covered as a standard trade?',
        a: `Roofing is high-risk. Some insurers won't cover it, or may charge extra or impose conditions. Disclose all roofing work when you quote. Specialist roofers insurance is available.`
      },
      {
        q: 'What if a neighbour is injured by falling tiles?',
        a: 'Your public liability covers the claim. This is why insurance is so critical for roofers—falling debris claims are common and costly.'
      },
      {
        q: 'Does the cover include residential and commercial roofs?',
        a: 'Most policies cover both. However, large commercial or industrial roofs, solar panel installation, or high-rise work may need special conditions or higher premiums.'
      },
      {
        q: 'Do I need separate fall protection insurance?',
        a: `Public liability covers third-party injury. For your own protection from falls, you'll need ACC cover and possibly a fall arrest system policy. Check your ACC registration.`
      }
    ],
    relatedSlugs: ['builders', 'painters-decorators', 'scaffolders']
  },
  {
    slug: 'tilers',
    name: 'Tilers',
    shortName: 'Tiling',
    category: 'trades',
    icon: '⬜',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Tilers NZ | Cover4You',
    metaDescription: 'Tilers public liability insurance NZ from $500/year. Cover property damage, injury, faulty tiling. Bathroom & floor specialists. Quick quote.',
    headline: 'Public Liability Insurance for Tilers',
    intro: 'Tile work involves damage risks from water, falling tiles, and working in wet environments like bathrooms. Our tilers insurance covers property damage, slip injuries, and faulty workmanship liability.',
    keyRisks: [
      'Water damage from poor grout or seal',
      'Slips and falls on wet tiled floors',
      'Falling tiles injuring clients or bystanders',
      'Damage to underlying substrate or structure',
      'Injury from cutting and grinding tools',
      'Mould growth from moisture failure',
      'Expensive damage to tile installation',
      'Injury from heavy tiles or stone'
    ],
    whatsCovered: [
      'Water damage liability from poor tiling',
      'Slip and fall injury compensation',
      'Property damage to substrate or fittings',
      'Falling tile injury to third parties',
      'Legal defence for moisture damage claims',
      'Remedial costs to fix faulty installation',
      'Injury from tile cutting tools'
    ],
    typicalPremium: '$500 – $1,100/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: 'Does the cover include water damage from failed grout?',
        a: 'Yes. If your grouting or sealing is faulty and causes water damage to the property, this is a standard public liability claim.'
      },
      {
        q: 'What if tiles crack or come loose shortly after I install them?',
        a: `If it's due to your workmanship, the remedial cost to fix it is usually covered. If it's a material defect, the tile supplier may be liable instead.`
      },
      {
        q: 'Am I covered for tiles applied to pool areas?',
        a: 'Most standard policies cover pool tiles. However, pool construction or specialist pool finishes may need higher cover or special conditions. Confirm with your insurer.'
      },
      {
        q: 'Does the cover extend to stone or marble flooring?',
        a: 'Yes. Tiling insurance generally includes natural stone laying. Higher-value stone may need a higher cover limit or declaration of value.'
      }
    ],
    relatedSlugs: ['builders', 'flooring-layers', 'painters-decorators']
  },
  {
    slug: 'flooring-layers',
    name: 'Flooring Layers',
    shortName: 'Flooring',
    category: 'trades',
    icon: '⏬',
    heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Flooring Layers NZ | Cover4You',
    metaDescription: 'Flooring layers public liability insurance NZ from $500/year. Cover laminate, timber, vinyl. Property damage protection. Get a quote.',
    headline: 'Public Liability Insurance for Flooring Layers',
    intro: 'Flooring installation involves working in client homes and businesses, heavy materials, and risks of property damage and slip injuries. Our flooring insurance protects against costly claims from faulty work and accidents.',
    keyRisks: [
      'Damaged existing flooring during removal or preparation',
      'Uneven flooring causing trips and falls',
      'Damage to underlying substrate or subfloor',
      'Injury from power tools (saws, sanders)',
      'Moisture problems leading to mould growth',
      'Damage to client property from dust or spillage',
      'Lifting injuries from heavy flooring materials',
      'Injury to third parties from trip hazards'
    ],
    whatsCovered: [
      'Property damage during floor removal or preparation',
      'Trip and fall injury compensation',
      'Damage to underlying structure or substrate',
      'Legal costs for slip and fall claims',
      'Remedial costs to fix uneven installation',
      'Moisture and mould damage liability',
      'Damage to adjacent rooms or property'
    ],
    typicalPremium: '$500 – $1,100/year',
    minimumCover: '$1M, $2M or $5M',
    faqs: [
      {
        q: 'Does the cover include timber, vinyl, and laminate flooring?',
        a: 'Yes. Public liability covers all types of flooring installation. Specialty finishes or unusual materials may need declaration, but standard flooring is included.'
      },
      {
        q: 'What if the floor I install becomes uneven or buckles?',
        a: `If it's due to your workmanship (poor substrate preparation, moisture issues), the remedial cost is usually covered under public liability.`
      },
      {
        q: 'Am I covered if a customer slips on the new floor?',
        a: 'Yes. If the slip is caused by your work (improper sealing, wet surface left by you), public liability covers the injury claim.'
      },
      {
        q: 'Does the cover extend to commercial floor installation?',
        a: 'Yes. Commercial flooring is covered. Larger projects or specialist industrial flooring may need higher cover limits. Discuss your work scope with your insurer.'
      }
    ],
    relatedSlugs: ['tilers', 'builders', 'painters-decorators']
  },
  {
    slug: 'drain-layers',
    name: 'Drain Layers',
    shortName: 'Drainage',
    category: 'trades',
    icon: '🌊',
    heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Drain Layers NZ | Cover4You',
    metaDescription: 'Drain layers public liability insurance NZ from $600/year. Cover underground damage, collapse risk. Before You Dig partner. Get a quote.',
    headline: 'Public Liability Insurance for Drain Layers',
    intro: 'Drain laying involves excavation, underground service risks, and property damage from trench collapse or flooding. Our drain layers insurance covers damage to underground services, subsidence claims, and third-party injury.',
    keyRisks: [
      'Trench collapse causing injury or death',
      'Damage to power lines or water mains',
      'Blockage or failure of drainage system',
      'Subsidence or ground movement',
      'Flooding from blocked or burst drains',
      'Injury from excavation equipment',
      'Contamination from sewage or septic tanks',
      'Damage to property adjacent to drainage work'
    ],
    whatsCovered: [
      'Serious injury from trench collapse',
      'Damage to underground services (electricity, water, gas)',
      'Subsidence liability from excavation',
      'Flooding damage from faulty drainage',
      'Legal costs for defending injury claims',
      'Third-party property damage',
      'Remedial costs to make safe a failed drain',
      'Emergency response costs'
    ],
    typicalPremium: '$600 – $1,500/year',
    minimumCover: '$2M or $5M',
    faqs: [
      {
        q: 'What if I damage a power line or water main?',
        a: `You're fully liable. Always call Before You Dig (0800 208 696) before excavating. Public liability covers the damage cost, but prevention is critical.`
      },
      {
        q: 'Does the cover include septic tank work?',
        a: 'Yes. Septic tank installation and maintenance are covered. However, some insurers may ask for higher premiums due to contamination risks.'
      },
      {
        q: 'Am I covered if ground subsidence occurs after my work?',
        a: `If subsidence is directly caused by your drainage work, it's a public liability claim. If it's long-term settlement or geological, it may not be.`
      },
      {
        q: 'Is trench safety my responsibility?',
        a: 'Yes. You must comply with NZ Health & Safety regulations for trench safety. Public liability covers injury claims, but non-compliance can affect your cover.'
      }
    ],
    relatedSlugs: ['plumbers', 'builders', 'landscapers']
  },
  {
    slug: 'scaffolders',
    name: 'Scaffolders',
    shortName: 'Scaffolding',
    category: 'trades',
    icon: '⛓️',
    heroImage: 'https://images.unsplash.com/photo-1531189001411-c98efaaa8bab?w=1200&q=80',
    heroGradient: 'from-orange-700 to-amber-600',
    metaTitle: 'Public Liability Insurance for Scaffolders NZ | Cover4You',
    metaDescription: 'Scaffolders public liability insurance NZ from $900/year. Cover collapse, fall injury, third-party damage. Work at height expert. Quote now.',
    headline: 'Public Liability Insurance for Scaffolders',
    intro: 'Scaffolding is critical infrastructure for safe work at height. Failure, collapse, or improper installation can cause fatal injuries. Our scaffolders insurance protects against serious claims from collapse, falls, and third-party injury.',
    keyRisks: [
      'Fatal or serious injury from scaffold collapse',
      'Falling tools or equipment from scaffold',
      'Injury to other workers or bystanders below',
      'Instability from poor ground conditions',
      'Inadequate load capacity assessment',
      'High wind damage to temporary structures',
      'Damage to adjacent properties during erection',
      'Personal fall injury from inadequate protection'
    ],
    whatsCovered: [
      'Serious injury and death from collapse',
      'Third-party injury from falling debris',
      'Property damage from collapsed scaffold',
      'Legal costs for defending serious claims',
      'Damage to client property during erection',
      'Remedial costs to make safe',
      'Emergency response and recovery costs'
    ],
    typicalPremium: '$900 – $2,000/year',
    minimumCover: '$2M or $5M',
    faqs: [
      {
        q: 'Do I need specialist scaffolding insurance?',
        a: `Yes. Scaffolding is high-risk. Most general trades insurance won't cover it. You need specialist scaffolders public liability insurance.`
      },
      {
        q: 'What if the scaffold collapses and someone is seriously hurt?',
        a: 'This is exactly what public liability covers. Scaffold collapse claims are potentially multi-million dollar claims. Proper insurance is essential.'
      },
      {
        q: 'Does the cover include design responsibility?',
        a: 'Public liability covers your liability for poor installation. Design liability is separate. If you design scaffolds, discuss this with your insurer.'
      },
      {
        q: 'Am I covered if the scaffold fails due to poor ground?',
        a: `If you failed to assess ground conditions properly, it's your liability and you are covered. Always conduct a site assessment before erecting scaffold.`
      }
    ],
    relatedSlugs: ['builders', 'roofers', 'electricians']
  },

  // SERVICE
  {
    slug: 'dog-walkers',
    name: 'Dog Walkers',
    shortName: 'Dog Walking',
    category: 'service',
    icon: '🐕',
    heroImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Dog Walkers NZ | Cover4You',
    metaDescription: 'Dog walkers public liability insurance NZ from $300/year. Cover dog injury, third-party damage & vet bills. Affordable NZ quotes online.',
    headline: 'Public Liability Insurance for Dog Walkers',
    intro: `Dog walking involves responsibility for clients' beloved pets and liability for injuries to third parties. Our dog walkers insurance covers injury caused by dogs you're responsible for, property damage, and vet bills for injured dogs.`,
    keyRisks: [
      'Dog attack causing injury to other dogs or people',
      'Third-party injury from client dog during walk',
      'Dog running away or becoming lost',
      `Your own dog biting a client's pet`,
      'Property damage caused by excited dogs',
      'Allergic reaction or injury to sensitive clients',
      'Vehicle injury if dog escapes onto road',
      'Dog injury requiring emergency vet care'
    ],
    whatsCovered: [
      `Third-party injury caused by dog you're walking`,
      'Other dogs injured by your care dog',
      'Vet bills for injured dogs in your care',
      'Property damage from dogs (broken gates, fences)',
      'Legal costs for defending injury claims',
      `Loss of or injury to client's dog while in care`,
      'Emergency veterinary treatment costs'
    ],
    typicalPremium: '$300 – $700/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: `What if a dog I'm walking bites someone?`,
        a: 'Public liability covers the injury claim. This is the most common claim for dog walkers. Make sure your insurance includes dog liability—not all policies do.'
      },
      {
        q: 'Am I covered if a dog gets injured while in my care?',
        a: `Yes. If a dog is injured due to your negligence, you're liable. Insurance covers veterinary costs. Your contract with owners should clarify this responsibility.`
      },
      {
        q: 'Do I need to declare the size and breed of dogs I walk?',
        a: 'Yes. Larger breeds and certain breeds carry higher risk. Some insurers exclude high-risk breeds. Be honest about the dogs you walk.'
      },
      {
        q: 'Is my cover valid for off-lead walking?',
        a: 'Many policies exclude or limit off-lead walking. Check your policy. Most cover leashed walking. If you offer off-lead services, disclose this to your insurer.'
      }
    ],
    relatedSlugs: ['pet-sitters', 'personal-trainers', 'event-planners']
  },
  {
    slug: 'cleaners',
    name: 'Cleaners',
    shortName: 'Cleaning',
    category: 'service',
    icon: '🧹',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Cleaners NZ | Cover4You',
    metaDescription: 'Cleaners public liability insurance NZ from $350/year. Cover property damage, injury, chemical exposure. Residential & commercial. Quote now.',
    headline: 'Public Liability Insurance for Cleaners',
    intro: 'Cleaning work involves access to client properties, chemical handling, and risks of damage and injury. Our cleaners insurance covers property damage, slip injuries, and chemical exposure claims for residential and commercial cleaning.',
    keyRisks: [
      'Property damage from water or chemical spills',
      'Slip and fall injuries on wet floors',
      'Damage to client belongings during cleaning',
      'Chemical burns or respiratory injury',
      'Injury from cleaning equipment (power washers)',
      'Theft accusation or missing items',
      'Damage to carpets or fabrics from cleaning products',
      'Injury to clients from slippery surfaces'
    ],
    whatsCovered: [
      'Property damage from water or chemical spillage',
      'Third-party slip and fall injury liability',
      'Damage to client carpets or upholstery',
      'Chemical burn or inhalation claims',
      'Legal costs for defending damage claims',
      'Injury from cleaning equipment',
      'Accidental damage during access to property'
    ],
    typicalPremium: '$350 – $800/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Does the cover include window cleaning?',
        a: 'Yes. Window cleaning is usually covered. However, work at height (high-rise windows) may need specialist insurance or higher premiums.'
      },
      {
        q: `What if I damage a client's expensive carpet?`,
        a: 'Your public liability covers accidental damage caused during cleaning work. Always disclose carpet type and use appropriate products.'
      },
      {
        q: 'Am I covered for chemical exposure claims?',
        a: 'Third-party chemical injury or inhalation is covered. Your own occupational exposure (asthma from fumes) needs occupational health insurance separately.'
      },
      {
        q: 'Does the cover include industrial or commercial cleaning?',
        a: 'Yes. Most policies cover both residential and commercial cleaning. Larger industrial contracts may need higher cover limits or special conditions.'
      }
    ],
    relatedSlugs: ['dog-walkers', 'hairdressers', 'photographers']
  },
  {
    slug: 'personal-trainers',
    name: 'Personal Trainers',
    shortName: 'Personal Training',
    category: 'service',
    icon: '💪',
    heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Personal Trainers NZ | Cover4You',
    metaDescription: 'Personal trainers public liability insurance NZ from $400/year. Cover client injury from exercise. Fitness professionals. Get a quote.',
    headline: 'Public Liability Insurance for Personal Trainers',
    intro: 'Personal training involves supervising exercise, using equipment, and working with clients of varying fitness levels. Our trainers insurance covers injury claims from exercise, equipment failure, and third-party injury.',
    keyRisks: [
      'Client injury during exercise or training',
      'Heart attack or stroke during or after training',
      'Equipment failure or breakdown during use',
      'Incorrect exercise instruction causing injury',
      'Pre-existing condition triggered by training',
      'Property damage during training sessions',
      'Injury to bystanders during group sessions',
      'Injury from personal trainer negligence'
    ],
    whatsCovered: [
      'Client injury compensation claims',
      'Legal costs for defending injury claims',
      'Third-party injury during training',
      'Equipment-related injury claims',
      'Property damage caused during training',
      'Emergency response costs',
      'Medical evidence gathering costs'
    ],
    typicalPremium: '$400 – $900/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Am I covered if a client has a heart attack during training?',
        a: `Public liability covers injury if it's your negligence (e.g., ignoring health warnings). If a client has an undisclosed heart condition, you may not be liable. Always get full health declarations.`
      },
      {
        q: 'What if I give incorrect exercise instruction and the client is injured?',
        a: 'If the instruction causes injury due to your negligence, public liability covers the claim. This is why proper training and qualifications are critical.'
      },
      {
        q: 'Does the cover include online or remote personal training?',
        a: `Many policies cover in-person training. Online training where you can't see the client directly is higher risk. Disclose online training to your insurer.`
      },
      {
        q: 'Do I need disclosure forms from clients about health conditions?',
        a: 'Highly recommended. A signed health declaration helps protect you legally. It shows the client disclosed risks. Always keep these on file.'
      }
    ],
    relatedSlugs: ['massage-therapists', 'dog-walkers', 'event-planners']
  },
  {
    slug: 'photographers',
    name: 'Photographers',
    shortName: 'Photography',
    category: 'service',
    icon: '📷',
    heroImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Photographers NZ | Cover4You',
    metaDescription: 'Photographers public liability insurance NZ from $350/year. Cover property damage, injury at events. Wedding & portrait photographer friendly.',
    headline: 'Public Liability Insurance for Photographers',
    intro: 'Photography work involves attending events, using equipment, and working in various venues. Our photographers insurance covers property damage from equipment, injury to third parties, and liability at weddings, portraits, and commercial shoots.',
    keyRisks: [
      'Damage to client property during setup or shooting',
      'Injury to third parties from your equipment or tripods',
      'Damage to venue during photo session',
      'Loss or damage of client items during shoot',
      'Injury from heavy equipment or flash equipment',
      'Trip hazard from your cables and equipment',
      'Privacy or defamation claims from photos',
      'Property damage from lighting rigs or stands'
    ],
    whatsCovered: [
      'Property damage caused during photo sessions',
      'Third-party injury from equipment or setup',
      'Venue damage liability',
      'Legal costs for defending injury claims',
      'Injury from photographer equipment',
      'Accidental damage to client property',
      'Emergency response costs'
    ],
    typicalPremium: '$350 – $800/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Does the cover include wedding photography?',
        a: 'Yes. Wedding photography is covered. However, large events may need higher cover or event liability. Discuss your event sizes with your insurer.'
      },
      {
        q: 'What if my tripod falls and injures someone?',
        a: 'Your public liability covers the injury. This is why proper equipment setup and safety is critical at all events.'
      },
      {
        q: 'Am I covered if the venue prohibits my photography?',
        a: `Public liability covers accidental injury from your work. If you violate venue rules, the venue may sue you separately—that's not an insurance matter.`
      },
      {
        q: 'Does the cover include online photography contests or competitions?',
        a: `Liability is based on your physical activities. Online-only photography contests don't have physical liability risks. Standard photography cover applies.`
      }
    ],
    relatedSlugs: ['event-planners', 'cleaners', 'hairdressers']
  },
  {
    slug: 'tutors',
    name: 'Tutors',
    shortName: 'Tutoring',
    category: 'service',
    icon: '📚',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Tutors NZ | Cover4You',
    metaDescription: 'Tutors public liability insurance NZ from $300/year. Cover property damage, student injury, safeguarding. Online & in-person tutor friendly.',
    headline: 'Public Liability Insurance for Tutors',
    intro: `Tutors work with young people and in clients' homes or rented venues. Our tutors insurance covers property damage, student injury claims, and safeguarding liability for private tuition and educational services.`,
    keyRisks: [
      'Injury to student during tutoring session',
      'Property damage to client home or venue',
      'Safeguarding or abuse allegations',
      'Allergic reaction or medical emergency',
      'Injury from educational materials or equipment',
      'Trip and fall in client property',
      'Damage to client property from spills or accidents',
      'Online privacy or data breach claims'
    ],
    whatsCovered: [
      'Student injury liability',
      'Property damage to client homes or venues',
      'Legal costs for safeguarding allegations',
      'Emergency medical response costs',
      'Third-party injury claims',
      'Accidental damage during lessons',
      'Legal defence costs'
    ],
    typicalPremium: '$300 – $700/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Do I need insurance for home-based tutoring?',
        a: `Yes. You're liable if a student is injured in your home. Public liability protects you and is often required by parents.`
      },
      {
        q: 'What if a student claims I breached safeguarding?',
        a: 'Public liability covers legal defence costs. However, prevention is critical—maintain proper records, have clear policies, and consider DBS screening if working with children.'
      },
      {
        q: 'Does the cover include online tutoring?',
        a: 'Online tutoring has different risks. Physical property damage is unlikely. Data protection and privacy risks may need cyber liability insurance instead.'
      },
      {
        q: 'Am I covered if a student has a medical emergency?',
        a: `If it's not your fault, insurance won't pay (it's just an emergency). If your negligence caused it (e.g., ignoring allergy), you are liable and covered.`
      }
    ],
    relatedSlugs: ['hairdressers', 'personal-trainers', 'cleaners']
  },
  {
    slug: 'event-planners',
    name: 'Event Planners',
    shortName: 'Event Planning',
    category: 'service',
    icon: '🎉',
    heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Event Planners NZ | Cover4You',
    metaDescription: 'Event planners public liability insurance NZ from $450/year. Cover guest injury, property damage, venue liability. Weddings & corporate events.',
    headline: 'Public Liability Insurance for Event Planners',
    intro: 'Event planning involves coordinating venues, guests, and contractors. Our event planners insurance covers guest injury, property damage at venues, and liability for third-party accidents during events you organize.',
    keyRisks: [
      'Guest injury during event (trip, fall, food poisoning)',
      'Property damage to venue during setup',
      'Food poisoning from catered food',
      'Injury from entertainment or activities',
      'Damage caused by contractor you arranged',
      'Alcohol-related incident liability',
      'Overcrowding or safety code violation',
      'Injury from temporary structures or equipment'
    ],
    whatsCovered: [
      'Guest injury and compensation claims',
      'Venue property damage liability',
      'Food poisoning claims',
      'Entertainment-related injury',
      'Legal costs for defending claims',
      'Alcohol service liability',
      'Damage from contractors you engaged'
    ],
    typicalPremium: '$450 – $1,000/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: `Do I need insurance if I'm planning events for friends?`,
        a: 'Yes. Even small events carry liability. If a guest is injured, you could be sued. Insurance protects you and your personal assets.'
      },
      {
        q: 'What if a guest gets food poisoning from catered food?',
        a: 'Your liability depends on whether you selected the caterer. If you arranged poor quality catering and someone gets sick, you may be liable. Insurance covers this risk.'
      },
      {
        q: 'Am I covered for large events like festivals or weddings?',
        a: 'Yes. Large events are covered, but may need higher cover limits or special conditions. Discuss your typical event size with your insurer.'
      },
      {
        q: 'What if a contractor I hired causes injury or damage?',
        a: 'You may be liable for contractors you hire. Ensure they have their own insurance. Public liability covers your liability, but each contractor should be insured separately.'
      }
    ],
    relatedSlugs: ['photographers', 'personal-trainers', 'caterers']
  },
  {
    slug: 'hairdressers',
    name: 'Hairdressers',
    shortName: 'Hair Styling',
    category: 'service',
    icon: '💇',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Hairdressers NZ | Cover4You',
    metaDescription: 'Hairdressers public liability insurance NZ from $350/year. Cover chemical burns, allergic reaction, property damage. Salon & mobile friendly.',
    headline: 'Public Liability Insurance for Hairdressers',
    intro: 'Hairdressers work with chemicals, hot equipment, and client health risks. Our hairdressers insurance covers chemical burns, allergic reactions, property damage, and injury from equipment like hair dryers and straighteners.',
    keyRisks: [
      'Chemical burn from hair dye or perm solution',
      'Allergic reaction to hair products',
      'Eye injury from chemicals or product',
      'Thermal burn from hot styling tools',
      'Injury from scissors or sharp tools',
      'Infection from non-sterile equipment',
      'Property damage from product stains',
      'Injury to third parties in salon'
    ],
    whatsCovered: [
      'Chemical burn compensation',
      'Allergic reaction injury claims',
      'Eye injury from products',
      'Thermal burn liability',
      'Infection or illness claims',
      'Legal costs for defending claims',
      'Emergency medical response costs'
    ],
    typicalPremium: '$350 – $800/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Does the cover include mobile hairdressing?',
        a: 'Yes. Mobile hairdressing is covered. You may need home-based business cover if you work from home. Disclose your location with your insurer.'
      },
      {
        q: 'What if a client has an allergic reaction to hair dye?',
        a: 'If you patch tested and the client still had a reaction, insurance covers the medical costs. Always conduct patch tests and keep records.'
      },
      {
        q: 'Am I covered for hair loss claims?',
        a: 'If hair loss results from chemical damage or poor handling, you may be liable. Insurance covers injury claims. However, some policies exclude cosmetic damage claims.'
      },
      {
        q: 'Do I need to declare all products I use?',
        a: 'It helps to disclose major products. Professional-grade products are standard. Over-the-counter products may have different coverage. Discuss with your insurer.'
      }
    ],
    relatedSlugs: ['beauty-therapists', 'massage-therapists', 'cleaners']
  },
  {
    slug: 'beauty-therapists',
    name: 'Beauty Therapists',
    shortName: 'Beauty Therapy',
    category: 'service',
    icon: '💄',
    heroImage: 'https://images.unsplash.com/photo-1487412992656-27a8d67ac3a8?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Beauty Therapists NZ | Cover4You',
    metaDescription: 'Beauty therapists public liability insurance NZ from $350/year. Cover waxing injury, allergic reaction, infections. Salon & mobile friendly.',
    headline: 'Public Liability Insurance for Beauty Therapists',
    intro: 'Beauty therapy involves close client contact, chemical use, and specialized equipment. Our beauty therapists insurance covers chemical burns, waxing injuries, allergic reactions, and infection claims for facials, waxing, and other treatments.',
    keyRisks: [
      'Skin burn from hot wax or treatments',
      'Allergic reaction to beauty products',
      'Eye injury from cosmetics or treatments',
      'Infection from non-sterile equipment',
      'Ingrown hair or scarring from waxing',
      'Skin sensitisation from products',
      'Injury from electrical equipment',
      'Injury to third parties in treatment space'
    ],
    whatsCovered: [
      'Burn injury compensation',
      'Allergic reaction claims',
      'Infection or illness from treatment',
      'Eye injury compensation',
      'Scarring and tissue damage claims',
      'Legal costs for defending claims',
      'Emergency medical response'
    ],
    typicalPremium: '$350 – $800/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Does the cover include mobile beauty treatments?',
        a: 'Yes. Mobile beauty therapy is covered. You may need home business cover if you work from home. Disclose your working location.'
      },
      {
        q: 'What if a client gets an infection after waxing?',
        a: `If it's due to non-sterile equipment or poor hygiene, you're liable. Insurance covers the medical costs. Maintain strict hygiene protocols.`
      },
      {
        q: 'Am I covered for allergic reactions to products?',
        a: 'Yes, if the reaction is from proper application of standard professional products. Always patch test and keep allergy history records.'
      },
      {
        q: 'Does the cover include tattooing or permanent makeup?',
        a: 'Tattooing and permanent makeup need specialist insurance due to higher infection and scarring risks. Discuss these services separately with your insurer.'
      }
    ],
    relatedSlugs: ['hairdressers', 'massage-therapists', 'tutors']
  },
  {
    slug: 'massage-therapists',
    name: 'Massage Therapists',
    shortName: 'Massage Therapy',
    category: 'service',
    icon: '💆',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Massage Therapists NZ | Cover4You',
    metaDescription: 'Massage therapists public liability insurance NZ from $350/year. Cover injury from massage, allergic reaction. NZ therapists. Get a quote.',
    headline: 'Public Liability Insurance for Massage Therapists',
    intro: 'Massage therapy involves close client contact, manual techniques, and use of oils and equipment. Our massage therapists insurance covers injury from treatment, allergic reactions, and infection claims.',
    keyRisks: [
      'Injury from massage technique (muscle strain, fracture)',
      'Aggravation of pre-existing injury',
      'Allergic reaction to oils or products',
      'Infection from non-sterile equipment',
      'Property damage from oil spills',
      'Inappropriate contact allegations',
      'Injury to therapist (repetitive strain)',
      'Client medical emergency during treatment'
    ],
    whatsCovered: [
      'Injury compensation from massage technique',
      'Allergic reaction to oils or products',
      'Infection claims from non-sterile practice',
      'Property damage from spills',
      'Legal costs for defending claims',
      'Emergency medical response',
      'Safeguarding legal defence'
    ],
    typicalPremium: '$350 – $800/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'What if a client is injured by my massage technique?',
        a: `If the injury results from your negligence or improper technique, you're liable. Insurance covers the compensation. Always work within your qualifications and training.`
      },
      {
        q: 'Does the cover include mobile massage therapy?',
        a: 'Yes. Mobile therapy is covered. Working from home or commercial rooms are both insurable. Disclose your location.'
      },
      {
        q: 'Am I covered if a client has an allergic reaction to massage oil?',
        a: 'Yes, if you used appropriate professional oils. Always ask about allergies before treatment and keep allergy records.'
      },
      {
        q: 'Does the cover include remedial or sports massage?',
        a: 'Yes. All massage types are covered. However, if you also do other treatments (acupuncture, cupping), disclose these as they may need additional cover.'
      }
    ],
    relatedSlugs: ['hairdressers', 'beauty-therapists', 'personal-trainers']
  },
  {
    slug: 'security-guards',
    name: 'Security Guards',
    shortName: 'Security',
    category: 'service',
    icon: '👮',
    heroImage: 'https://images.unsplash.com/photo-1555448248-2571daf6344b?w=1200&q=80',
    heroGradient: 'from-emerald-700 to-teal-600',
    metaTitle: 'Public Liability Insurance for Security Guards NZ | Cover4You',
    metaDescription: 'Security guards public liability insurance NZ from $600/year. Cover injury from restraint, wrongful arrest. Professional guards. Get quote.',
    headline: 'Public Liability Insurance for Security Guards',
    intro: 'Security work involves confrontation, restraint, and liability for false arrest. Our security guards insurance covers injury from physical intervention, assault claims, wrongful arrest allegations, and third-party injury.',
    keyRisks: [
      'Injury to person during restraint or ejection',
      'Wrongful arrest or false imprisonment claim',
      'Assault causing serious injury',
      'Excessive force allegations',
      'Third-party injury from security incident',
      'Property damage during security response',
      'Injury from weapons or equipment',
      'Privacy violation or discrimination claims'
    ],
    whatsCovered: [
      'Third-party injury compensation',
      'Legal defence for wrongful arrest',
      'Assault injury liability',
      'Excessive force defence costs',
      'Property damage from security incident',
      'Medical costs for injured third parties'
    ],
    typicalPremium: '$600 – $1,400/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'What if I injure someone while restraining them?',
        a: 'If the force was reasonable and proportionate, insurance provides legal defence. If you used excessive force, coverage may be denied. Always follow NZ security training standards.'
      },
      {
        q: 'Am I covered for false arrest claims?',
        a: 'Yes. If you wrongfully arrest someone without legal grounds, public liability covers the legal costs and compensation. This is why evidence and training are critical.'
      },
      {
        q: 'Does the cover include armed security work?',
        a: 'Armed security requires specialist insurance and special licensing. Discuss weapons training and licensing requirements separately with your insurer.'
      },
      {
        q: 'What about privacy breaches or discrimination claims?',
        a: 'Public liability covers injury and property damage, not privacy or discrimination claims. These require separate professional indemnity insurance.'
      }
    ],
    relatedSlugs: ['personal-trainers', 'event-planners', 'cleaners']
  },

  // FOOD
  {
    slug: 'cafes',
    name: 'Cafes',
    shortName: 'Cafe Operations',
    category: 'food',
    icon: '☕',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
    heroGradient: 'from-red-700 to-orange-600',
    metaTitle: 'Public Liability Insurance for Cafes NZ | Cover4You',
    metaDescription: 'Cafe public liability insurance NZ from $700/year. Cover food poisoning, customer injury, property damage. Small cafe friendly. Quote.',
    headline: 'Public Liability Insurance for Cafes',
    intro: 'Cafes face food safety risks, customer injury, and property damage liability. Our cafe insurance covers food poisoning claims, slip and fall injuries, and property damage from equipment or spillage.',
    keyRisks: [
      'Food poisoning from contaminated food or drink',
      'Slip and fall injury from wet floors',
      'Burn injury from hot beverages or equipment',
      'Choking or injury from food',
      'Property damage from fire or water',
      'Injury from broken glass or utensils',
      'Allergic reaction to food ingredients',
      'Third-party injury in cafe space'
    ],
    whatsCovered: [
      'Food poisoning compensation claims',
      'Slip and fall injury liability',
      'Burn injury from hot beverages',
      'Property damage in cafe',
      'Legal costs for defending food safety claims',
      'Emergency medical response',
      'Remedial food safety costs'
    ],
    typicalPremium: '$700 – $1,500/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'If a customer gets food poisoning from my cafe, am I liable?',
        a: `Yes, if it's due to poor food safety or hygiene. Public liability covers the compensation claim. Maintain strict food safety standards and HACCP procedures.`
      },
      {
        q: 'What if someone burns themselves on hot coffee?',
        a: `You're liable if the cup was improperly filled or the temperature was dangerously high. Insurance covers the burn injury claim.`
      },
      {
        q: 'Does the cover include outdoor cafe seating?',
        a: 'Yes. Indoor and outdoor seating are both covered. Outdoor areas may have additional wind/weather risk. Ensure proper maintenance of outdoor areas.'
      },
      {
        q: 'Am I covered if a customer claims allergic reaction to food?',
        a: `If you failed to disclose ingredients or didn't warn of allergens, you're liable. Always provide allergy information and keep ingredient records.`
      }
    ],
    relatedSlugs: ['restaurants', 'takeaways', 'caterers']
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    shortName: 'Restaurant',
    category: 'food',
    icon: '🍽️',
    heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    heroGradient: 'from-red-700 to-orange-600',
    metaTitle: 'Public Liability Insurance for Restaurants NZ | Cover4You',
    metaDescription: 'Restaurant public liability insurance NZ from $900/year. Cover food poisoning, customer injury, fire damage. Full-service protection. Get quote.',
    headline: 'Public Liability Insurance for Restaurants',
    intro: 'Restaurants face significant food safety, customer injury, and property damage risks. Our restaurant insurance covers food poisoning, slip injuries, fire damage, and third-party liability for full-service dining operations.',
    keyRisks: [
      'Food poisoning from contaminated dishes',
      'Slip and fall from greasy kitchen floors',
      'Burn injury from hot plates or equipment',
      'Choking or food injury',
      'Fire or explosion in kitchen',
      'Property damage from food spills',
      'Glass fragments in food',
      'Allergic reaction to meals'
    ],
    whatsCovered: [
      'Food poisoning compensation',
      'Slip and fall injury liability',
      'Burn injury from plates or kitchen equipment',
      'Fire damage liability',
      'Property damage in restaurant',
      'Legal costs for food safety claims',
      'Emergency response and remediation'
    ],
    typicalPremium: '$900 – $2,000/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'What food safety standards must I meet for insurance?',
        a: 'You must comply with NZ Food Safety Code. Regular inspections, proper storage, and HACCP procedures are expected. Non-compliance may void coverage.'
      },
      {
        q: 'If multiple customers get food poisoning, can they all claim?',
        a: 'Yes. Each customer can make a claim if they can prove food from your restaurant caused illness. This is why food safety is critical.'
      },
      {
        q: 'Does the cover include a licensed bar or alcohol service?',
        a: 'Most standard policies cover food service. Alcohol service liability may need an endorsement. Always disclose if you serve alcohol.'
      },
      {
        q: 'What if a customer is injured by broken glass in food?',
        a: `Your liability depends on how the glass got there. If it's your negligence, you're liable. Insurance covers the injury claim.`
      }
    ],
    relatedSlugs: ['cafes', 'bars-pubs', 'caterers']
  },
  {
    slug: 'takeaways',
    name: 'Takeaways & Food Trucks',
    shortName: 'Takeaway',
    category: 'food',
    icon: '🚐',
    heroImage: 'https://images.unsplash.com/photo-1555505609f2e35a10e90bc6d4cf2e01a9e489e4d?w=1200&q=80',
    heroGradient: 'from-red-700 to-orange-600',
    metaTitle: 'Public Liability Insurance for Takeaways NZ | Cover4You',
    metaDescription: 'Takeaway & food truck public liability insurance NZ from $650/year. Cover food poisoning, vehicle damage. Mobile food friendly. Get quote.',
    headline: 'Public Liability Insurance for Takeaways & Food Trucks',
    intro: 'Takeaway and food truck operations involve food safety risks and mobile venue challenges. Our takeaway insurance covers food poisoning, customer injury, and vehicle-related liability for mobile and fixed takeaway operations.',
    keyRisks: [
      'Food poisoning from contaminated takeaway',
      'Injury from hot oil or equipment',
      'Customer injury in takeaway queue',
      'Vehicle accident liability (if mobile)',
      'Spillage or burns from hot food',
      'Allergic reaction to ingredients',
      'Property damage from fire or water',
      'Injury from sharp tools or broken items'
    ],
    whatsCovered: [
      'Food poisoning compensation',
      'Burn injury from hot food or equipment',
      'Property damage from food preparation',
      'Vehicle-related injury (if mobile)',
      'Legal costs for food safety claims',
      'Emergency remediation',
      'Third-party injury claims'
    ],
    typicalPremium: '$650 – $1,400/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Do I need insurance for a food truck or mobile takeaway?',
        a: 'Yes. Mobile food operations need public liability covering food safety, vehicle incidents, and customer injury. Some insurers specialize in mobile food.'
      },
      {
        q: 'Does the cover include vehicle damage if I have an accident?',
        a: `Public liability doesn't cover vehicle damage. You need motor vehicle insurance. Public liability covers third-party injury or property damage from the accident.`
      },
      {
        q: 'What if I operate from multiple locations?',
        a: 'Multi-location operations are covered. Some insurers may ask for details of all sites. Discuss your operation locations.'
      },
      {
        q: 'Am I covered for food handling violations?',
        a: 'Public liability covers injury claims. If you breach food safety regulations, you may face fines from council, but claims for customer illness are covered.'
      }
    ],
    relatedSlugs: ['cafes', 'restaurants', 'market-stalls']
  },
  {
    slug: 'caterers',
    name: 'Caterers',
    shortName: 'Catering',
    category: 'food',
    icon: '🥘',
    heroImage: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80',
    heroGradient: 'from-red-700 to-orange-600',
    metaTitle: 'Public Liability Insurance for Caterers NZ | Cover4You',
    metaDescription: 'Caterers public liability insurance NZ from $800/year. Cover food poisoning, event injury, venue damage. Wedding & corporate caterer friendly.',
    headline: 'Public Liability Insurance for Caterers',
    intro: 'Caterers work at client venues for weddings, corporate events, and special occasions. Our caterers insurance covers food poisoning, customer injury at events, venue damage, and liability for off-site food service.',
    keyRisks: [
      'Food poisoning from catered meals',
      'Injury to guests from hot food or burns',
      'Damage to venue during catering setup',
      'Allergic reaction to meal ingredients',
      'Choking or food-related injury',
      'Equipment damage in client kitchen',
      'Spillage or staining of venue',
      'Injury from catering equipment'
    ],
    whatsCovered: [
      'Food poisoning compensation',
      'Guest burn injury liability',
      'Venue property damage',
      'Allergic reaction claims',
      'Legal costs for food safety',
      'Equipment damage in client kitchen',
      'Emergency remediation'
    ],
    typicalPremium: '$800 – $1,600/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'What if a guest gets food poisoning from my catering?',
        a: `You're liable if the illness resulted from poor food handling. Insurance covers the compensation claim. Maintain strict food safety throughout catering.`
      },
      {
        q: `Am I covered for damage to a client's venue kitchen?`,
        a: 'Yes. Accidental damage caused during catering setup and preparation is covered. Use protective coverings to minimize damage risk.'
      },
      {
        q: 'Does the cover include bar catering and alcohol service?',
        a: 'Food catering is standard. Alcohol service may need an endorsement or separate dram shop liability. Disclose if you provide bar service.'
      },
      {
        q: 'What if a guest has an allergic reaction to food I served?',
        a: `If you failed to disclose ingredients or warn of allergens, you're liable. Always provide ingredient information and maintain allergy records.`
      }
    ],
    relatedSlugs: ['restaurants', 'cafes', 'event-planners']
  },
  {
    slug: 'bars-pubs',
    name: 'Bars & Pubs',
    shortName: 'Bar & Pub',
    category: 'food',
    icon: '🍺',
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
    heroGradient: 'from-red-700 to-orange-600',
    metaTitle: 'Public Liability Insurance for Bars & Pubs NZ | Cover4You',
    metaDescription: 'Bars and pubs public liability insurance NZ from $1,000/year. Cover alcohol-related injury, property damage. Dram shop cover. Get quote.',
    headline: 'Public Liability Insurance for Bars & Pubs',
    intro: 'Bars and pubs face unique liability risks from alcohol service, intoxicated patrons, and violence. Our bars and pubs insurance covers assault liability, dram shop claims, and property damage from incidents in your venue.',
    keyRisks: [
      'Assault or injury from intoxicated patron',
      'Injury from broken glass or weapons',
      'Dram shop liability (over-serving)',
      'Third-party injury from patron behaviour',
      'Property damage from fights or violence',
      'Slip and fall from spilt alcohol',
      'Injury to staff from assault',
      'Injury from defective equipment or furniture'
    ],
    whatsCovered: [
      'Assault injury compensation',
      'Dram shop liability for over-serving',
      'Third-party injury from patron',
      'Property damage from violence',
      'Legal costs for defending assault claims',
      'Medical costs for injured parties',
      'Damage to pub property'
    ],
    typicalPremium: '$1,000 – $2,000/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'What is dram shop liability?',
        a: 'If you over-serve alcohol and the patron injures a third party, you may be liable. NZ law holds venues responsible for reckless service. Always check ID and monitor intoxication.'
      },
      {
        q: 'If a patron assaults another guest, am I liable?',
        a: `You're liable if you failed to provide adequate security or control the situation. Insurance covers the injury claim. Employ security and staff trained in violence prevention.`
      },
      {
        q: 'Does the cover include late-night venues or nightclubs?',
        a: 'Late-night venues have higher risk. Some insurers specialize in nightclub cover. Disclose your opening hours and typical patron numbers.'
      },
      {
        q: 'What if staff are injured in an assault?',
        a: 'Your public liability covers third-party injury. Staff injuries need employer liability insurance. Ensure you have both covers.'
      }
    ],
    relatedSlugs: ['restaurants', 'caterers', 'event-planners']
  },
  {
    slug: 'market-stalls',
    name: 'Market Stalls',
    shortName: 'Market Stall',
    category: 'food',
    icon: '🏪',
    heroImage: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80',
    heroGradient: 'from-red-700 to-orange-600',
    metaTitle: 'Public Liability Insurance for Market Stalls NZ | Cover4You',
    metaDescription: 'Market stall public liability insurance NZ from $600/year. Cover food safety, customer injury, product liability. Farmers market friendly.',
    headline: 'Public Liability Insurance for Market Stalls',
    intro: 'Market stall operators face food safety, customer injury, and product liability risks. Our market stall insurance covers food poisoning, customer injury, and third-party damage for food and non-food market stalls.',
    keyRisks: [
      'Food poisoning from market stall food',
      'Customer injury from products or equipment',
      'Injury to bystanders from unstable stall',
      'Property damage from stall collapse',
      'Allergic reaction to food products',
      'Injury from sharp or heavy items',
      'Weather damage to stall setup',
      'Third-party damage from stall equipment'
    ],
    whatsCovered: [
      'Food poisoning compensation',
      'Customer injury from products',
      'Third-party injury from stall',
      'Property damage from stall collapse',
      'Allergic reaction claims',
      'Legal costs for defending claims',
      'Emergency response costs'
    ],
    typicalPremium: '$600 – $1,200/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Do I need insurance if I only sell non-food items at markets?',
        a: 'Yes. Even non-food stalls have liability risk (customer injury, property damage). Public liability protects you against customer claims.'
      },
      {
        q: 'What if my food stall causes food poisoning?',
        a: `You're liable if poor food handling caused illness. Insurance covers the compensation claim. Follow NZ Food Safety Code and maintain proper storage and hygiene.`
      },
      {
        q: 'Does the cover include setup and teardown liability?',
        a: 'Yes. Liability during setup, operation, and teardown is covered. Injury or damage during these times is included.'
      },
      {
        q: `Am I covered if the market organizer doesn't have insurance?`,
        a: `Your own public liability is separate from the market's insurance. You're responsible for your own liability regardless of the market's coverage.`
      }
    ],
    relatedSlugs: ['cafes', 'takeaways', 'restaurants']
  },

  // RETAIL
  {
    slug: 'retail-shops',
    name: 'Retail Shops',
    shortName: 'Retail',
    category: 'retail',
    icon: '🛍️',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    heroGradient: 'from-blue-700 to-indigo-600',
    metaTitle: 'Public Liability Insurance for Retail Shops NZ | Cover4You',
    metaDescription: 'Retail shop public liability insurance NZ from $500/year. Cover customer injury, slip hazards, product liability. Affordable retail cover. Quote.',
    headline: 'Public Liability Insurance for Retail Shops',
    intro: 'Retail shops face customer injury risks from slip hazards, product defects, and property damage. Our retail insurance covers slip and fall claims, product liability, and third-party injury in your shop.',
    keyRisks: [
      'Customer slip and fall from wet floors',
      'Injury from falling merchandise or shelving',
      'Product defect causing injury',
      'Injury to customer or staff from equipment',
      'Property damage to customer belongings',
      'Trip hazard from poor layout',
      'Injury from unstable display',
      'Allergic reaction to products'
    ],
    whatsCovered: [
      'Slip and fall injury compensation',
      'Falling merchandise injury liability',
      'Product defect injury claims',
      'Property damage in shop',
      'Legal costs for defending claims',
      'Equipment-related injury',
      'Emergency medical response'
    ],
    typicalPremium: '$500 – $1,100/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'If a customer slips on a wet floor, am I liable?',
        a: 'Yes, if you failed to clean the spill promptly or warn of the hazard. Use wet floor signs and clean up spills quickly. Insurance covers the injury claim.'
      },
      {
        q: 'What if a shelf falls and injures a customer?',
        a: `You're liable if shelving was improperly installed or maintained. Public liability covers the injury claim. Maintain shelves and ensure proper installation.`
      },
      {
        q: 'Does the cover include product liability?',
        a: 'Public liability covers injury from defective products you sell. If the defect causes injury, insurance covers the claim. Keep product records and safety info.'
      },
      {
        q: 'Am I covered for customer property damage in my shop?',
        a: `If damage is caused by your negligence (e.g., product falling on customer bag), you're liable. Insurance covers the claim.`
      }
    ],
    relatedSlugs: ['market-stalls', 'hairdressers', 'photographers']
  },
  {
    slug: 'rideshare-drivers',
    name: 'Rideshare Drivers',
    shortName: 'Rideshare',
    category: 'retail',
    icon: '🚗',
    heroImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80',
    heroGradient: 'from-blue-700 to-indigo-600',
    metaTitle: 'Public Liability Insurance for Rideshare Drivers NZ | Cover4You',
    metaDescription: 'Rideshare driver public liability insurance NZ from $400/year. Cover passenger injury, vehicle damage. Uber & Zoomy friendly. Get quote.',
    headline: 'Public Liability Insurance for Rideshare Drivers',
    intro: 'Rideshare drivers face passenger injury risks and vehicle-related liability. Our rideshare insurance covers passenger injury, vehicle damage claims, and third-party liability while transporting passengers.',
    keyRisks: [
      'Passenger injury from vehicle incident',
      'Injury from aggressive passenger behaviour',
      'Vehicle accident causing injury to third party',
      'Injury from sharp objects or spills in vehicle',
      'Property damage to passenger belongings',
      'Injury from sudden braking or acceleration',
      'Assault or robbery by passenger',
      'Medical emergency during ride'
    ],
    whatsCovered: [
      'Passenger injury compensation',
      'Third-party injury from vehicle accident',
      'Property damage to passenger items',
      'Legal costs for defending injury claims',
      'Emergency medical response',
      'Personal injury from passenger assault',
      'Vehicle damage from accident'
    ],
    typicalPremium: '$400 – $900/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: `Do I need insurance beyond Uber or Zoomy's coverage?`,
        a: `Uber and Zoomy provide some cover, but personal public liability adds extra protection for your personal liability. It's highly recommended for full coverage.`
      },
      {
        q: 'What if a passenger is injured in my vehicle?',
        a: 'Your public liability covers passenger injury from your driving or negligence. Ensure your motor vehicle insurance is current as well.'
      },
      {
        q: 'Am I covered if a passenger assaults me?',
        a: 'Public liability covers property damage and third-party injury, not personal assault. Your contents insurance and personal accident cover should address your own injury.'
      },
      {
        q: 'Does the cover extend to damaged passenger property?',
        a: 'If the property was damaged due to your negligence, you may be liable. Insurance covers the claim. Always inspect your vehicle before passengers board.'
      }
    ],
    relatedSlugs: ['security-guards', 'event-planners', 'personal-trainers']
  },
  {
    slug: 'it-consultants',
    name: 'IT Consultants',
    shortName: 'IT Consulting',
    category: 'retail',
    icon: '💻',
    heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    heroGradient: 'from-blue-700 to-indigo-600',
    metaTitle: 'Public Liability Insurance for IT Consultants NZ | Cover4You',
    metaDescription: 'IT consultants public liability insurance NZ from $400/year. Cover data loss, system failure, advice negligence. Tech consultant protection.',
    headline: 'Public Liability Insurance for IT Consultants',
    intro: 'IT consultants provide advice and system support to clients. Our IT consultants insurance covers third-party injury from your work, system failure claims, and property damage from IT incidents.',
    keyRisks: [
      'System failure causing business loss',
      'Data loss from your work or error',
      'Advice leading to financial loss',
      'Malware or security breach from your work',
      'Property damage from electrical equipment',
      'Injury to third parties from IT installation',
      'Network failure affecting client business',
      'Intellectual property disputes'
    ],
    whatsCovered: [
      'Third-party injury from IT work',
      'Property damage from electrical incidents',
      'Emergency response costs',
      'Legal costs for defending claims',
      'Damage to client equipment',
      'Business interruption from your error'
    ],
    typicalPremium: '$400 – $900/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: 'Does public liability cover system failure losses?',
        a: 'No. System failure losses are covered by professional indemnity insurance, not public liability. Most IT consultants need both policies.'
      },
      {
        q: 'What if my advice causes client financial loss?',
        a: `That's covered by professional indemnity, not public liability. Public liability covers third-party injury and property damage only.`
      },
      {
        q: 'Am I covered if I accidentally cause property damage installing IT equipment?',
        a: 'Yes. Damage to client property caused during IT installation is a public liability claim.'
      },
      {
        q: 'Does the cover include cyber security consulting?',
        a: 'Public liability covers physical property damage and third-party injury. Cyber security advice needs professional indemnity insurance.'
      }
    ],
    relatedSlugs: ['photographers', 'tutors', 'security-guards']
  },
  {
    slug: 'real-estate-agents',
    name: 'Real Estate Agents',
    shortName: 'Real Estate',
    category: 'retail',
    icon: '🏘️',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    heroGradient: 'from-blue-700 to-indigo-600',
    metaTitle: 'Public Liability Insurance for Real Estate Agents NZ | Cover4You',
    metaDescription: 'Real estate agents public liability insurance NZ from $450/year. Cover client injury at viewings, property damage. Agent protection. Get quote.',
    headline: 'Public Liability Insurance for Real Estate Agents',
    intro: 'Real estate agents conduct property viewings and open homes where public liability risks exist. Our agents insurance covers client injury at viewings, property damage, and third-party liability during open home events.',
    keyRisks: [
      'Client injury during property viewing',
      'Slip and fall in client property',
      'Injury from defective property feature',
      'Third-party injury at open home event',
      'Property damage during viewing',
      'Injury from pest or asbestos exposure',
      'Escaping pets or animals at property',
      'Injury from unstable structure'
    ],
    whatsCovered: [
      'Viewer injury liability',
      'Slip and fall claims',
      'Third-party injury at open homes',
      'Property damage during viewings',
      'Legal costs for defending claims',
      'Emergency response costs',
      'Injury from property defects'
    ],
    typicalPremium: '$450 – $1,000/year',
    minimumCover: '$1M or $2M',
    faqs: [
      {
        q: `Am I liable if a viewer is injured in the property I'm showing?`,
        a: 'You may be liable if you failed to warn of hazards or if negligence caused the injury. Always inspect properties, warn of hazards, and maintain records.'
      },
      {
        q: 'Does the cover include open home events?',
        a: 'Yes. Open homes are standard real estate activities. Larger events may need event liability insurance. Always have adequate signage and supervision.'
      },
      {
        q: 'What if asbestos is found during a viewing?',
        a: 'Public liability covers third-party injury from asbestos exposure. If viewers are exposed, you may be liable. Always disclose known hazards.'
      },
      {
        q: 'Does the cover extend to property management work?',
        a: 'Property management has different risks than sales. Discuss all services (sales, management, leasing) with your insurer for full coverage.'
      }
    ],
    relatedSlugs: ['photographers', 'event-planners', 'retail-shops']
  }
];

export function getBusinessBySlug(slug: string): BusinessType | undefined {
  return businessTypes.find(business => business.slug === slug);
}
