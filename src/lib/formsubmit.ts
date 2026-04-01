/**
 * Form Submission Handler
 * Handles quote form submissions and redirects
 */

export interface QuoteFormData {
  businessName: string;
  businessType: string;
  annualTurnover: string;
  email: string;
  phone: string;
}

/**
 * Submit quote form data
 * Sends form data to backend for processing and comparison
 * @param formData The quote form data to submit
 * @returns Promise resolving to success response or error
 */
export async function submitQuoteForm(formData: QuoteFormData): Promise<{
  success: boolean;
  message: string;
  redirectUrl?: string;
}> {
  try {
    // Validate form data
    if (!formData.businessName || !formData.email || !formData.phone) {
      return {
        success: false,
        message: 'Please fill in all required fields',
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address',
      };
    }

    // Validate phone format (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.phone)) {
      return {
        success: false,
        message: 'Please enter a valid phone number',
      };
    }

    // In production, send to backend API or form service
    // This could be:
    // - Your own backend endpoint
    // - Formspree.io
    // - Brevo (formerly Sendinblue)
    // - Another form service

    // Example API call
    const response = await fetch('/api/quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    const result = await response.json();

    return {
      success: true,
      message: 'Quote request submitted successfully',
      redirectUrl: '/thank-you',
    };
  } catch (error) {
    console.error('Error submitting quote form:', error);
    return {
      success: false,
      message: 'An error occurred while processing your request. Please try again.',
    };
  }
}

/**
 * Format phone number to standard format
 * @param phone Phone number string
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');

  // Format as +64 (for NZ)
  if (cleaned.startsWith('64')) {
    return `+${cleaned}`;
  }

  // If starts with 0, replace with +64
  if (cleaned.startsWith('0')) {
    return `+64${cleaned.slice(1)}`;
  }

  return `+64${cleaned}`;
}

/**
 * Get business category label from value
 * @param value The business type value
 * @returns Display label
 */
export function getBusinessTypeLabel(value: string): string {
  const labels: Record<string, string> = {
    retail: 'Retail & Hospitality',
    trade: 'Trade & Contractors',
    education: 'Education',
    venue: 'Public Venue',
    professional: 'Professional Services',
    other: 'Other',
  };
  return labels[value] || value;
}

/**
 * Get annual turnover range label
 * @param value The turnover range value
 * @returns Display label
 */
export function getTurnoverLabel(value: string): string {
  const labels: Record<string, string> = {
    '0-100k': '$0 - $100,000',
    '100k-500k': '$100,000 - $500,000',
    '500k-1m': '$500,000 - $1,000,000',
    '1m-5m': '$1,000,000 - $5,000,000',
    '5m+': '$5,000,000+',
  };
  return labels[value] || value;
}

/**
 * Create a summary of form data for display
 * @param formData The form data
 * @returns Formatted summary string
 */
export function createFormSummary(formData: QuoteFormData): string {
  return `
Business: ${formData.businessName}
Type: ${getBusinessTypeLabel(formData.businessType)}
Annual Turnover: ${getTurnoverLabel(formData.annualTurnover)}
Contact: ${formData.email}
Phone: ${formatPhoneNumber(formData.phone)}
  `.trim();
}

/**
 * Send quote request confirmation email
 * In production, integrate with email service (SendGrid, Brevo, etc.)
 * @param email Recipient email address
 * @param businessName Business name from form
 * @returns Promise resolving to success or error
 */
export async function sendConfirmationEmail(email: string, businessName: string): Promise<boolean> {
  try {
    // In production, use an email service API
    // Example: SendGrid, AWS SES, Resend, etc.

    console.log(`Confirmation email would be sent to: ${email} for ${businessName}`);

    // Placeholder: Return success
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
}

/**
 * Generate a unique quote request ID
 * @returns Unique quote ID
 */
export function generateQuoteId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 10);
  return `QT-${timestamp}-${random}`.toUpperCase();
}
