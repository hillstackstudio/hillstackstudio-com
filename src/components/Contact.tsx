import React from 'react';

interface ContactProps {
  email?: string;
  regionalKeywords?: string[];
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-[2.5rem] sm:text-4xl md:text-5xl font-extrabold text-[#0B0F19] tracking-tight leading-[1.08] mb-6">
            Improve your digital presence
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            To get in touch, you may submit the form below or send an email to: <a href="mailto:team@hillstackstudio.com" className="text-black font-bold hover:underline transition-all">team@hillstackstudio.com</a>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xl">
            <h3 className="text-2xl font-bold text-[#0B0F19] mb-8 text-center sm:text-left">Request a consultation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#0B0F19] mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="e.g. Anita Site"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#0B0F19] mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="anita@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-[#0B0F19] mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-bold text-[#0B0F19] mb-2">Website URL</label>
                <input 
                  type="url" 
                  id="website" 
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm"
                  placeholder="https://example.com"
                />
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-bold text-[#0B0F19] mb-2">Project Summary</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400 text-sm resize-none"
                  placeholder="Tell us about your business or current website..."
                ></textarea>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-black hover:bg-slate-900 text-white font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 text-base mt-2 flex items-center justify-center gap-2"
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