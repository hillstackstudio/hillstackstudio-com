import React from 'react';

interface ContactProps {
  email?: string;
  regionalKeywords?: string[];
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-[#2563EB] text-sm font-bold uppercase tracking-wider mb-2 block">
            Contact Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight mb-6">
            Improve Your Digital Presence
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            To get in touch, you may submit the form below or send an email to: <a href="mailto:team@hillstackstudio.com" className="text-[#2563EB] font-bold hover:text-[#1D4ED8] transition-colors">team@hillstackstudio.com</a>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl">
            <h3 className="text-2xl font-bold text-[#0B0F19] mb-8 text-center sm:text-left">Request a Consultation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#0B0F19] mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-[#0B0F19] mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="e.g. Acme Services"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#0B0F19] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="john@yourbusiness.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-bold text-[#0B0F19] mb-2">Website URL</label>
                <input 
                  type="url" 
                  id="website" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="https://yourbusiness.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#0B0F19] mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="(253) 555-0199"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-bold text-[#0B0F19] mb-2">Project Summary</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm resize-none"
                  placeholder="Tell us about your business, current website or service area..."
                ></textarea>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 px-8 rounded-full shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 text-base mt-2 flex items-center justify-center gap-2"
            >
              <span>Submit Request</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;