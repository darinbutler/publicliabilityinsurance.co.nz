import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Public Liability Insurance',
  description: 'Public Liability Insurance privacy policy explaining how we collect, use, and protect your personal information.',
  robots: 'noindex, follow',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100">
            How Public Liability Insurance protects your personal information
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-sm max-w-none text-slate-700">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-slate-900 font-semibold">
              Last Updated: April 1, 2026
            </p>
          </div>

          <h2>1. Introduction</h2>
          <p>
            Public Liability Insurance ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, contact us, or use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide Directly</h3>
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Submit a quote request form</li>
            <li>Contact us via email, phone, or contact forms</li>
            <li>Subscribe to our newsletter</li>
            <li>Create an account (if applicable)</li>
          </ul>
          <p>
            This information may include: your name, email address, phone number, business name, business type, annual turnover, number of employees, and other business-related information necessary to provide quote comparisons.
          </p>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website, we automatically collect certain information, including:</p>
          <ul>
            <li>Log data (IP address, browser type, pages visited, time spent)</li>
            <li>Device information (device type, operating system)</li>
            <li>Location information (general location based on IP address)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3>2.3 Information From Third Parties</h3>
          <p>
            We may receive information about you from our insurance partners and brokers to process your quote requests and provide you with personalised recommendations.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>Providing and improving our quote comparison services</li>
            <li>Processing your insurance quote requests</li>
            <li>Communicating with you about quotes, services, and updates</li>
            <li>Personalizing your experience on our website</li>
            <li>Sending marketing communications (with your consent)</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
            <li>Analyzing usage patterns to improve our services</li>
          </ul>

          <h2>4. Who We Share Your Information With</h2>
          <h3>4.1 Insurance Partners</h3>
          <p>
            We share your information with ICNZ-registered insurance companies and brokers to provide you with quote comparisons. These partners use your information solely to prepare personalised quotes and provide their services.
          </p>

          <h3>4.2 Service Providers</h3>
          <p>
            We may share information with service providers who assist us in operating our website, processing transactions, and providing customer support. These providers are contractually obligated to protect your information.
          </p>

          <h3>4.3 Legal Requirement</h3>
          <p>
            We may disclose your information if required by law, court order, or government authority, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3>4.4 Business Transfers</h3>
          <p>
            If Public Liability Insurance is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Quote request information is typically retained for 12 months. You may request deletion of your information at any time, subject to legal retention requirements.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate technical, administrative, and physical security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Your Privacy Rights</h2>
          <h3>7.1 Access and Correction</h3>
          <p>
            You have the right to access, review, and correct your personal information. Contact us at hello@cover4you.co.nz to request access to your information.
          </p>

          <h3>7.2 Opt-Out of Marketing</h3>
          <p>
            You can opt-out of receiving marketing emails at any time by clicking the unsubscribe link in our emails or by contacting us directly.
          </p>

          <h3>7.3 Deletion Request</h3>
          <p>
            You may request deletion of your personal information, subject to legal retention requirements. We will respond to deletion requests within 30 days.
          </p>

          <h2>8. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
          </p>
          <p>
            We use:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> To understand how you use our website</li>
            <li><strong>Marketing Cookies:</strong> To provide personalised advertising (with consent)</li>
          </ul>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing your information.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Public Liability Insurance does not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected information from a child under 13, we will delete such information and terminate the child's account.
          </p>

          <h2>11. International Data Transfers</h2>
          <p>
            If your information is transferred internationally, we implement appropriate safeguards, including standard contractual clauses and data protection agreements, to protect your information.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last Updated" date and, when appropriate, by sending you a notice. Your continued use of our services following notification of changes constitutes your acceptance of the updated policy.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, our privacy practices, or your personal information, please contact us:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p>
              <strong>Public Liability Insurance</strong><br />
              Auckland, New Zealand<br />
              Email: <a href="mailto:privacy@cover4you.co.nz" className="text-blue-600 hover:text-blue-700">privacy@cover4you.co.nz</a><br />
              Phone: <a href="tel:098859549" className="text-blue-600 hover:text-blue-700">09 885 9549</a>
            </p>
          </div>

          <h2>14. Your Rights Under NZ Privacy Act</h2>
          <p>
            Under the Privacy Act 2020 (New Zealand), you have the right to:
          </p>
          <ul>
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of information</li>
            <li>Withdraw consent for information collection</li>
            <li>Lodge a complaint with the Privacy Commissioner</li>
          </ul>

          <div className="mt-8 p-4 bg-slate-100 rounded-lg">
            <p className="text-sm text-slate-600">
              <strong>Disclaimer:</strong> This Privacy Policy is provided for informational purposes and does not constitute legal advice. For specific privacy concerns or questions regarding your rights, we recommend consulting with a privacy lawyer.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
