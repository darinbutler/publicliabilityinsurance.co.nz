import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | PublicLiabilityInsurance.co.nz',
  description: 'Important disclaimer for PublicLiabilityInsurance.co.nz — general information notice, referral service disclosure, regulatory status, and accuracy of information.',
  robots: 'index, follow',
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-slate-800 to-slate-700 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Disclaimer</h1>
          <p className="text-slate-300">Important information about how this website operates and the nature of the information provided.</p>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-4xl mx-auto px-4 py-12">

          {/* Prominent notice */}
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-10 flex items-start gap-4">
            <span className="text-amber-600 text-2xl flex-shrink-0">⚠</span>
            <div>
              <p className="font-bold text-amber-900 mb-1">General Information Only — Not Financial Advice</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                PublicLiabilityInsurance.co.nz provides general information about public liability insurance. This information does not constitute personalised financial advice. Always read the policy wording and obtain advice from a licensed financial adviser before purchasing any insurance product.
              </p>
            </div>
          </div>

          <div className="space-y-10 text-slate-700">

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Financial Advice</h2>
              <p className="leading-relaxed">
                The information on this website is general in nature and is provided for informational and educational purposes only. It does not take into account your individual circumstances, financial situation, or specific insurance needs, and therefore does not constitute personalised financial advice within the meaning of the Financial Markets Conduct Act 2013 (FMCA).
              </p>
              <p className="leading-relaxed mt-3">
                Insurance products, coverage terms, exclusions, and premiums vary significantly between providers and individual policies. Before purchasing any insurance product, you should carefully read the relevant policy wording, Product Disclosure Statement (PDS), and seek independent advice from a licensed insurance adviser or broker who is authorised under the FMCA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How This Website Operates</h2>
              <p className="leading-relaxed">
                PublicLiabilityInsurance.co.nz is a comparison and referral service operated by Cover4You. We are not an insurance underwriter, licensed insurer, or policy issuer. We collect enquiries from businesses seeking public liability insurance and refer those enquiries to licensed insurance advisers and brokers who are authorised under the Financial Markets Conduct Act 2013.
              </p>
              <p className="leading-relaxed mt-3">
                Our service is free to use. Cover4You may receive a referral fee or commission from insurance providers when a policy is taken out following a referral from this website. This does not increase the cost of any policy to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Regulatory Status</h2>
              <p className="leading-relaxed">
                Cover4You operates as a financial advice provider registered under the Financial Markets Conduct Act 2013. Insurance advisers and brokers to whom we refer enquiries hold their own licences and authorisations as required by the FMCA and are members of recognised industry bodies including the Insurance Council of New Zealand (ICNZ).
              </p>
              <p className="leading-relaxed mt-3">
                Where financial advice is provided in connection with a referral, it is provided by the licensed adviser to whom your enquiry is referred — not by PublicLiabilityInsurance.co.nz or Cover4You directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Accuracy of Information</h2>
              <p className="leading-relaxed">
                We make every effort to ensure that the information on this website — including insurer comparisons, premium estimates, and coverage descriptions — is accurate and up to date. However, insurance products, pricing, policy terms, and insurer details change frequently and without notice.
              </p>
              <p className="leading-relaxed mt-3">
                All comparison data and premium ranges published on this site are based on publicly available information and our own expert analysis at the time of publication. They are indicative only and should not be relied upon as definitive quotes or coverage guarantees. Actual premiums and coverage terms will be confirmed by the relevant insurer or broker following assessment of your specific circumstances.
              </p>
              <p className="leading-relaxed mt-3">
                If any insurer, provider, or industry participant believes any information on this site is inaccurate, outdated, or misleading, we encourage them to contact us at{' '}
                <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline font-semibold">hello@cover4you.co.nz</a> and we will review the information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Comparison Methodology</h2>
              <p className="leading-relaxed">
                Our insurance comparisons are prepared using publicly available policy documents, Product Disclosure Statements, and information published by insurers on their own websites. We supplement this with analysis from our panel of licensed advisers who have direct knowledge of the products compared.
              </p>
              <p className="leading-relaxed mt-3">
                Comparisons reflect our assessment as at the date of publication and are made in good faith. They are not exhaustive — individual policies may contain conditions, endorsements, or exclusions not reflected in summary comparisons. Always obtain and read the full policy wording before making a purchasing decision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links and Content</h2>
              <p className="leading-relaxed">
                This website may contain links to third-party websites, including those of insurers, government agencies, and industry bodies. These links are provided for convenience only. We have no control over the content of third-party websites and accept no responsibility for the accuracy, completeness, or currency of information on external sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Cover4You and PublicLiabilityInsurance.co.nz exclude all liability for any loss or damage arising from your reliance on information contained on this website. This includes, without limitation, any loss arising from purchasing or not purchasing an insurance policy based on information provided here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                This disclaimer is governed by the laws of New Zealand. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of New Zealand.
              </p>
              <p className="leading-relaxed mt-3">
                See also our{' '}
                <Link href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</Link>,{' '}
                <Link href="/terms" className="text-emerald-600 hover:underline">Terms of Service</Link>, and{' '}
                <Link href="/claims" className="text-emerald-600 hover:underline">Claims Guide</Link>.
              </p>
            </section>

            <div className="text-sm text-slate-500 border-t border-slate-200 pt-6">
              Last updated: April 2026. If you have any questions about this disclaimer, contact us at{' '}
              <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline">hello@cover4you.co.nz</a>.
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
