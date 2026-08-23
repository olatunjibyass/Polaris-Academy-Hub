import React from 'react';
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Lock, 
  Accessibility, 
  ArrowUp,
  CheckCircle2
} from 'lucide-react';
import { useApp, CurrentPageView } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { siteSettings, setCurrentPage, openModal } = useApp();

  const handleNav = (page: CurrentPageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#031D13] text-slate-300 border-t border-emerald-900/50">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Nonprofit Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 p-1 bg-white rounded-2xl shadow-xl ring-2 ring-[#C5A021] flex items-center justify-center shrink-0">
                <img 
                  src="https://i.imgur.com/cmcwMit.jpeg" 
                  alt="Polaris Academy Hub Logo" 
                  className="w-full h-full object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-black text-xl sm:text-2xl text-white tracking-tight font-heading leading-tight">
                  POLARIS
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#C5A021] leading-tight">
                  Academy Hub
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 pr-4">
              {siteSettings.mission}
            </p>

            {/* Child Safety & Privacy Seal */}
            <div className="bg-[#063A25]/80 border border-emerald-800/50 rounded-xl p-3.5 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#C5A021]" />
                <span>Strict Child Privacy & Safety Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-normal">
                Parent-controlled profiles only. Zero public children data, no ads, and 100% vetted instructors.
              </p>
            </div>
          </div>

          {/* Col 2: Core Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Educational Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#C5A021] transition-colors">
                  Academic Support & Homework
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#C5A021] transition-colors">
                  STEM, AI & Junior Coding
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#C5A021] transition-colors">
                  Arts & Creative Studio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#C5A021] transition-colors">
                  Music & Instruments
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#C5A021] transition-colors">
                  Ballet & Creative Movement
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('programs')} className="hover:text-[#C5A021] transition-colors">
                  Life Skills & Youth Leadership
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Community */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Hub Exploration
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://app.acuityscheduling.com/schedule.php?owner=40157348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 transition-colors"
                >
                  📅 Book an Appointment &rarr;
                </a>
              </li>
              <li>
                <button onClick={() => handleNav('learning-hub')} className="hover:text-[#C5A021] transition-colors">
                  Polaris Learning Hub (Free)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('events')} className="hover:text-[#C5A021] transition-colors">
                  Workshops & Family Events
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instructors')} className="hover:text-[#C5A021] transition-colors">
                  Instructor Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#C5A021] transition-colors">
                  Parent Tips & STEM News
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('parent-portal')} className="hover:text-[#C5A021] transition-colors text-emerald-300 font-semibold">
                  Parent & Guardian Portal &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Operating Schedule & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
              Center Schedule & Info
            </h4>
            
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A021] mt-0.5 shrink-0" />
                <div className="space-y-0.5 font-mono text-[11px]">
                  <p>{siteSettings.tuesdayHours}</p>
                  <p>{siteSettings.thursdayHours}</p>
                  <p>{siteSettings.saturdayHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#C5A021] mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${siteSettings.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors block">
                    {siteSettings.phone}
                  </a>
                  {siteSettings.secondaryPhone && (
                    <a href={`tel:${siteSettings.secondaryPhone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors block">
                      {siteSettings.secondaryPhone}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A021] mt-0.5 shrink-0" />
                <span>{siteSettings.email}</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A021] mt-0.5 shrink-0" />
                <span className="text-[11px]">{siteSettings.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nonprofit Transparency & Disclaimer Section */}
        <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-slate-400 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-4xl leading-relaxed">
              <strong className="text-slate-300">Nonprofit Initiative Disclosure:</strong> {siteSettings.nonprofitStatusNotice}
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#C5A021] hover:text-[#FFD700] text-xs font-semibold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} Polaris Academy Hub. Dedicated to nurturing young minds ages 3–12.</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                Child Safety Policy
              </button>
              <span>•</span>
              <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                Privacy & Data Charter
              </button>
              <span>•</span>
              <button onClick={() => handleNav('about')} className="hover:text-white transition-colors flex items-center gap-1">
                <Accessibility className="w-3 h-3 text-[#C5A021]" />
                <span>Accessibility Statement</span>
              </button>
              <span>•</span>
              <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                Contact & Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
