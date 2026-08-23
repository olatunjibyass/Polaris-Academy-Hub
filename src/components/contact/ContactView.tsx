import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ContactView: React.FC = () => {
  const { siteSettings } = useApp();

  const faqs = [
    {
      q: 'Are Polaris Academy Hub programs completely free?',
      a: 'Yes! As a nonprofit community initiative, all core after-school and weekend learning hub sessions are accessible to ensure no child is turned away.'
    },
    {
      q: 'What ages can attend Polaris Academy Hub?',
      a: 'Our programs are specifically designed for children ages 3 to 12, organized into three developmentally tailored tracks: Ages 3–5, Ages 6–8, and Ages 9–12.'
    },
    {
      q: 'What are your class hours and days?',
      a: 'We host weekly sessions on Tuesday & Thursday afternoons from 4:00 PM to 7:00 PM, and Saturday morning family discovery sessions from 9:00 AM to 11:00 AM.'
    },
    {
      q: 'How do you ensure child safety during programs?',
      a: 'Every instructor and volunteer undergoes strict criminal and youth safety background checks. We maintain strict sign-in/sign-out protocols, small 1:8 student-mentor ratios, and zero public data collection.'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-[#063A25] rounded-3xl p-8 sm:p-12 text-white border border-[#C5A021]/30 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#031D13] border border-[#C5A021]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>We Are Here to Help</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Contact Polaris Academy Hub
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Have questions about program registrations, scheduling accommodations, volunteering, or donating? Our friendly family support team is happy to assist you.
            </p>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-md space-y-8">
          <div>
            <h3 className="text-2xl font-black text-[#063A25] font-heading">
              Hub Headquarters & Contact Details
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Reach out directly to our coordinators, visit our facility, or call during open learning hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#063A25] text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-bold text-[#063A25]">Ohio Headquarters</strong>
                <span className="text-xs text-slate-600 leading-relaxed block mt-1">{siteSettings.address}</span>
              </div>
            </div>

            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#063A25] text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-bold text-[#063A25]">Operating Schedule</strong>
                <span className="text-xs text-slate-600 leading-relaxed block mt-1">{siteSettings.operatingHours}</span>
              </div>
            </div>

            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#063A25] text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-bold text-[#063A25]">Telephone Lines</strong>
                <div className="space-y-1 mt-1">
                  <a href={`tel:${siteSettings.phone.replace(/[^0-9]/g, '')}`} className="text-xs text-emerald-800 font-bold hover:underline block">
                    {siteSettings.phone}
                  </a>
                  {siteSettings.secondaryPhone && (
                    <a href={`tel:${siteSettings.secondaryPhone.replace(/[^0-9]/g, '')}`} className="text-xs text-emerald-800 font-bold hover:underline block">
                      {siteSettings.secondaryPhone}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#063A25] text-[#FFD700] flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-bold text-[#063A25]">Email Inquiries</strong>
                <a href={`mailto:${siteSettings.email}`} className="text-xs text-emerald-800 font-bold hover:underline block mt-1">{siteSettings.email}</a>
              </div>
            </div>
          </div>

          {/* Safety notice */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#C5A021] shrink-0" />
            <span>Family inquiries are kept completely confidential and protected under our strict Child Safety Policy.</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md space-y-6">
          <div className="flex items-center gap-2 text-[#063A25]">
            <HelpCircle className="w-5 h-5 text-[#C5A021]" />
            <h3 className="text-xl font-bold font-heading">Frequently Asked Questions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, fIdx) => (
              <div key={fIdx} className="bg-slate-50 p-5 rounded-2xl border border-emerald-100/70 space-y-2">
                <h4 className="text-sm font-bold text-[#063A25]">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
