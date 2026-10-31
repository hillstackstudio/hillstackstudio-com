import React, { useState } from 'react';

interface ContactProps {
  email?: string;
  regionalKeywords?: string[];
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const WEB3FORMS_ACCESS_KEY = 'de07b90c-8993-4d19-9d67-4758d0575508';

const Contact: React.FC<ContactProps> = ({ email = 'team@hillstackstudio.com' }) => {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check: if filled by a bot, silently succeed
    if (formData.get('botcheck')) {
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const senderName = (formData.get('name') as string)?.trim() || 'Website Visitor';
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `New Consultation Request from ${senderName} — Hill Stack Studio`);
    formData.append('from_name', 'Hill Stack Studio Website');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(
          result.message || `Something went wrong. Please try again or email us directly at ${email}.`
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        `Unable to send your request right now. Please check your connection or email us directly at ${email}.`
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
            Improve your digital presence
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            To get in touch, you may submit the form below or send an email to:{' '}
            <a
              href={`mailto:${email}`}
              className="text-black font-bold hover:underline transition-all"
            >
              {email}
            </a>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#0B0F19] mb-8 text-center sm:text-left">
              Request a consultation
            </h3>

            {/* Hidden honeypot input for spam bots */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#0B0F19] mb-2">
                  Full Name <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm disabled:opacity-60"
                  placeholder="e.g. Anita Site"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#0B0F19] mb-2">
                  Email <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm disabled:opacity-60"
                  placeholder="anita@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#0B0F19] mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm disabled:opacity-60"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-bold text-[#0B0F19] mb-2">
                  Website URL
                </label>
                <input 
                  type="text" 
                  id="website"
                  name="website"
                  autoComplete="url"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm disabled:opacity-60"
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-bold text-[#0B0F19] mb-2">
                  Project Summary <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm resize-none disabled:opacity-60"
                  placeholder="Tell us about your business or current website..."
                ></textarea>
              </div>
            </div>

            {/* Status Feedback Banners */}
            <div aria-live="polite">
              {status === 'success' && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm sm:text-base flex items-start gap-3"
                >
                  <span className="text-emerald-600 font-bold text-lg leading-none mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold">Thank you! Your request has been sent.</p>
                    <p className="text-emerald-800 text-sm mt-0.5">
                      Our team will review your details and get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 text-sm sm:text-base flex items-start gap-3"
                >
                  <span className="text-red-600 font-bold text-lg leading-none mt-0.5" aria-hidden="true">
                    ✕
                  </span>
                  <div>
                    <p className="font-bold">Submission failed</p>
                    <p className="text-red-800 text-sm mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black hover:bg-slate-900 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 text-base mt-2 flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Sending Request...</span>
                </>
              ) : (
                <span>Submit Request</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;