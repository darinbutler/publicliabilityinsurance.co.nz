import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Making a Public Liability Insurance Claim | Step-by-Step Guide',
  description: 'What to do when a claim is made against your business. Step-by-step guide to the public liability claims process, insurer contacts, and documentation requirements.',
  robots: 'index, follow',
};

const steps = [
  {
    number: '01',
    title: 'Do Not Admit Liability',
    description: 'If someone is injured or their property is damaged, express concern and ensure their immediate safety — but do not admit fault, apologise in a way that implies responsibility, or make any offers of payment. Any admission, even informal, can complicate or prejudice your claim.',
    urgent: true,
  },
  {
    number: '02',
    title: 'Notify Your Insurer Promptly',
    description: 'Contact your insurer or broker as soon as you become aware of an incident that may give rise to a claim — even if no formal claim has been made yet. Most policies require notification within a specified timeframe (often 30 days). Delaying notification can jeopardise your cover.',
    urgent: true,
  },
  {
    number: '03',
    title: 'Document the Incident Thoroughly',
    description: 'Gather all relevant evidence while it is fresh. Take photos of the location, any damage, and surrounding conditions. Note the date, time, and exact circumstances. Collect contact details of any witnesses. Preserve any CCTV footage if available.',
    urgent: false,
  },
  {
    number: '04',
    title: 'Forward All Correspondence',
    description: 'If you receive a letter of demand, legal notice, or any written communication from the claimant or their solicitor, forward it to your insurer immediately — unopened if possible. Do not respond to legal correspondence yourself without insurer guidance.',
    urgent: false,
  },
  {
    number: '05',
    title: 'Cooperate Fully With Your Insurer',
    description: 'Your insurer will appoint a claims handler or loss adjuster. Cooperate fully, provide all requested documents promptly, and attend any required interviews. Your policy will have a duty of cooperation clause — failure to comply can affect your claim.',
    urgent: false,
  },
  {
    number: '06',
    title: 'Keep Records of All Costs',
    description: 'Keep records of any costs you incur as a result of the incident — legal fees, repairs, temporary measures. These may be recoverable under your policy. Keep all invoices and receipts.',
    urgent: false,
  },
];

const insurerContacts = [
  {
    name: 'NZI',
    claims: '0800 800 800',
    email: 'claims@nzi.co.nz',
    online: 'nzi.co.nz/claims',
    hours: '24/7 for emergency, business hours for general claims',
  },
  {
    name: 'Vero',
    claims: '0800 800 786',
    email: 'claims@vero.co.nz',
    online: 'vero.co.nz/claims',
    hours: '24/7 for emergency, business hours for general claims',
  },
  {
    name: 'AIG',
    claims: '0800 244 872',
    email: 'nzclaims@aig.com',
    online: 'aig.co.nz',
    hours: 'Business hours (Mon–Fri 8:30am–5:00pm)',
  },
  {
    name: 'Zurich',
    claims: '0800 80 94 02',
    email: 'nz.claims@zurich.com',
    online: 'zurich.co.nz',
    hours: 'Business hours (Mon–Fri 8:30am–5:00pm)',
  },
  {
    name: 'Chubb',
    claims: '0800 287 422',
    email: 'nzclaims@chubb.com',
    online: 'chubb.com/nz',
    hours: '24/7 for emergency assistance',
  },
  {
    name: 'QBE',
    claims: '0800 809 916',
    email: 'nzclaims@qbe.com',
    online: 'qbe.com/nz',
    hours: '24/7 for emergency, business hours for general claims',
  },
];

const documents = [
  'Your insurance policy schedule and certificate of currency',
  'Incident report or accident report form (completed promptly)',
  'Photos and/or video of the incident location and any damage',
  'Names and contact details of any witnesses',
  'Any written correspondence from the claimant or their solicitor',
  'Medical reports or invoices (for personal injury claims)',
  'Repair quotes or invoices (for property damage claims)',
  'Your own records of what happened (contemporaneous notes)',
  'Any CCTV or video footage if available',
  'Employment records if a staff member was involved',
];

const faqs = [
  {
    q: 'How quickly do I need to notify my insurer after an incident?',
    a: 'Most policies require notification as soon as practicable and generally within 30 days of the incident or of becoming aware of a potential claim. Check your policy schedule for the exact timeframe. Notifying promptly is always the safer approach — even if no formal claim has been made yet.',
  },
  {
    q: 'What happens if I admit fault at the scene?',
    a: 'An admission of fault can seriously compromise your insurer\'s ability to defend a claim on your behalf, and may affect whether they are obliged to meet the claim. If this happens, notify your insurer immediately and let them know what was said. Your insurer\'s legal team will advise on next steps.',
  },
  {
    q: 'Will my premiums increase after a claim?',
    a: 'A claim on your public liability policy may affect your renewal premium and claims history. However, this is not automatic — insurers consider the nature of the claim, your overall risk profile, and your claims history over time. Our brokers can help you manage renewal negotiations.',
  },
  {
    q: 'What if the claim is made against me months after the incident?',
    a: 'Public liability policies are typically written on a "claims made" or "occurrence" basis. An occurrence-based policy covers incidents that happen during the policy period regardless of when the claim is made. Check your policy type. If in doubt, notify your insurer of any known incident even before a formal claim arrives.',
  },
  {
    q: 'Can I use my own solicitor?',
    a: 'Typically, your insurer has the right to appoint and instruct solicitors to defend the claim. You may engage your own legal advice for guidance, but the insurer\'s appointed solicitor will handle the defence. Costs for solicitors you appoint yourself are not usually covered unless agreed in advance.',
  },
  {
    q: 'What if my claim is declined?',
    a: 'If your claim is declined, ask for the decision in writing with clear reasons. You can dispute the decision through the insurer\'s internal complaints process, and if unresolved, escalate to the Insurance & Financial Services Ombudsman (IFSO) — a free and independent dispute resolution service.',
  },
];

export default function ClaimsPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-slate-800 to-slate-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Making a Claim</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Making a Public Liability Claim
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A clear, step-by-step guide to what you should do when an incident occurs — and how to navigate the claims process with confidence.
          </p>
        </div>
      </section>

      {/* Critical warning bar */}
      <div className="w-full bg-amber-50 border-b border-amber-200 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-3">
          <span className="text-amber-600 text-xl flex-shrink-0">⚠</span>
          <p className="text-sm text-amber-800">
            <strong>Do not admit liability.</strong> If an incident occurs, express concern for the injured party but make no admissions of fault — verbally or in writing — before speaking with your insurer. Contact your insurer as soon as possible after any incident.
          </p>
        </div>
      </div>

      <main className="w-full">

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">The Claims Process — Step by Step</h2>
          <p className="text-slate-600 mb-10">Follow these steps carefully. The actions you take (or don&apos;t take) in the first 24–48 hours after an incident can materially affect the outcome of your claim.</p>

          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex gap-5 items-start rounded-2xl p-6 border ${step.urgent ? 'bg-red-50 border-red-200' : 'bg-white border-slate-200'}`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${step.urgent ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'}`}>
                  {step.number}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                    {step.urgent && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Critical</span>
                    )}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation checklist */}
        <section className="w-full bg-slate-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Documentation Checklist</h2>
            <p className="text-slate-600 mb-8">Gather these documents as soon as possible after an incident. The more complete your documentation, the smoother the claims process will be.</p>
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="grid sm:grid-cols-2 gap-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-slate-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insurer contacts */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Insurer Claims Contacts</h2>
          <p className="text-slate-600 mb-8">
            If you know which insurer holds your policy, contact them directly using the details below. If you came through our service and are unsure of your insurer, email us at{' '}
            <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 font-semibold hover:underline">hello@cover4you.co.nz</a> and we will assist you.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {insurerContacts.map((ins) => (
              <div key={ins.name} className="bg-white rounded-2xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 text-lg mb-3">{ins.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">📞</span>
                    <a href={`tel:${ins.claims.replace(/\s/g, '')}`} className="text-slate-700 hover:text-emerald-600 font-medium">{ins.claims}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">✉</span>
                    <a href={`mailto:${ins.email}`} className="text-slate-600 hover:text-emerald-600">{ins.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600">🌐</span>
                    <span className="text-slate-500">{ins.online}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-1 border-t border-slate-100 mt-2">
                    <span className="text-slate-400">🕐</span>
                    <span className="text-slate-500 text-xs">{ins.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> Contact details are correct to the best of our knowledge but may change. Always verify current contact information directly with your insurer or on their website. If you need assistance locating your insurer&apos;s claims team, contact us at{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-semibold">hello@cover4you.co.nz</a>.
            </p>
          </div>
        </section>

        {/* Dispute resolution */}
        <section className="w-full bg-emerald-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">If Your Claim Is Disputed</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-white text-lg mb-3">Internal Complaints Process</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  If your claim is declined or you are unhappy with the outcome, first use your insurer&apos;s internal complaints process. Ask for the decision in writing with full reasons. Most insurers will escalate unresolved complaints to a senior complaints officer.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-white text-lg mb-3">Insurance & Financial Services Ombudsman (IFSO)</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  If internal resolution fails, you can escalate to the IFSO Scheme — a free, independent dispute resolution service. Visit{' '}
                  <a href="https://www.ifso.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-white underline">ifso.nz</a>{' '}
                  or call <strong className="text-white">0800 888 202</strong>. Most ICNZ members are participants in this scheme.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-white text-lg mb-3">Financial Markets Authority (FMA)</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  The FMA oversees insurance providers and financial services in New Zealand. If you believe your insurer has acted unlawfully or in breach of the Financial Markets Conduct Act, you can make a complaint at{' '}
                  <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-white underline">fma.govt.nz</a>.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="font-bold text-white text-lg mb-3">We Can Help</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  If you sourced your policy through our service and are experiencing difficulties with a claim, reach out to us at{' '}
                  <a href="mailto:hello@cover4you.co.nz" className="text-emerald-300 hover:text-white underline">hello@cover4you.co.nz</a>. While we are a referral service and not a claims manager, we will do our best to assist and direct you to the right resource.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Claims FAQs</h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-slate-900 list-none hover:bg-slate-50">
                  {faq.q}
                  <span className="flex-shrink-0 ml-4 text-emerald-600 group-open:rotate-180 transition-transform text-lg">▼</span>
                </summary>
                <div className="px-6 pb-6 text-slate-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Disclosure note */}
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-700 mb-2">Important Notice</p>
            <p className="leading-relaxed">
              The information on this page is general in nature and is intended as a practical guide only. It does not constitute legal or financial advice. Insurance policies differ — always refer to your specific policy wording for the terms and conditions that apply to you. If you are unsure of your obligations under your policy, consult your broker or a qualified legal adviser. Insurer contact details are provided in good faith and may be subject to change — always verify directly with your insurer.
            </p>
          </div>
        </section>

      </main>

      <CTABanner
        heading="Not yet insured? Get covered today."
        subtext="Submit your details and a licensed broker will compare options from multiple NZ insurers — no obligation."
      />
    </>
  );
}
