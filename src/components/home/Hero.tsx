import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  CalendarCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Hero: React.FC = () => {
  const { setCurrentPage, openModal } = useApp();

  return (
    <section 
      className="relative overflow-hidden bg-white text-slate-900 pt-8 pb-12 lg:pt-10 lg:pb-14 border-b border-amber-200/60 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.86) 45%, rgba(255, 255, 255, 0.75) 100%), url('https://i.postimg.cc/RZMd26D4/close-up-smiling-schoolchildren-1098-3826.avif')`
      }}
    >
      
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-100/40 rounded-full blur-[140px]"></div>
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Proposition & Action CTAs */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">

            {/* Main Headline in Dark Slate & Rich Gold */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-950 font-heading leading-[1.12]">
              Where Young Minds{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B38F14] via-[#C5A021] to-[#997705]">
                Learn, Create,
              </span>{' '}
              Perform & Lead.
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Polaris Academy Hub delivers accessible, community-powered learning experiences for children ages 3–12. From foundational homework guidance and robotics coding to visual arts, violin, classical ballet, and public leadership.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-explore-programs-btn"
                onClick={() => {
                  setCurrentPage('programs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-[#C5A021] via-[#D4AF37] to-[#C5A021] hover:from-[#D4AF37] hover:to-[#FFD700] text-slate-950 font-black px-7 py-3.5 rounded-2xl shadow-lg shadow-[#C5A021]/30 transition-all flex items-center justify-center gap-2.5 group active:scale-95 text-sm"
              >
                <span>Explore All Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-book-appointment-btn"
                href="https://app.acuityscheduling.com/schedule.php?owner=40157348"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#063A25] text-white hover:bg-[#094D32] font-bold px-6 py-3.5 rounded-2xl border-2 border-[#063A25] shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 text-sm"
              >
                <CalendarCheck className="w-4 h-4 text-[#FFD700]" />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-700 pt-4 border-t border-slate-200 font-bold">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#063A25]" />
                <span>Vetted Mentors & Safe Labs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#C5A021] fill-[#C5A021]" />
                <span>1:8 Small Group Ratio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Picture Bento Grid of Kids Learning */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 relative max-w-lg mx-auto lg:max-w-none">
              
              {/* Picture 1: Hands-On STEM & Robotics (Top Left) */}
              <div className="group relative rounded-2xl overflow-hidden bg-white p-1.5 shadow-xl border-2 border-[#C5A021]/60 hover:border-[#FFD700] transition-all">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="https://i.imgur.com/XJmmc5B.jpeg"
                    alt="Children engaged in hands-on STEM learning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-[#063A25] text-[#FFD700] text-[10px] font-black px-2 py-0.5 rounded-md border border-[#C5A021]/40 shadow-xs">
                      🤖 STEM & Robotics
                    </span>
                  </div>
                </div>
              </div>

              {/* Picture 2: Ballet & Creative Movement (Top Right) */}
              <div className="group relative rounded-2xl overflow-hidden bg-white p-1.5 shadow-xl border-2 border-white/60 hover:border-[#C5A021] transition-all">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="https://i.imgur.com/bP54wb0.jpeg"
                    alt="Youth ballet and movement class"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-[#063A25] text-white text-[10px] font-black px-2 py-0.5 rounded-md border border-white/30 shadow-xs">
                      🩰 Ballet & Movement
                    </span>
                  </div>
                </div>
              </div>

              {/* Picture 3: Visual Arts & Canvas Painting (Bottom Left) */}
              <div className="group relative rounded-2xl overflow-hidden bg-white p-1.5 shadow-xl border-2 border-white/60 hover:border-[#C5A021] transition-all">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="https://i.imgur.com/fZWhiTM.jpeg"
                    alt="Kids engaged in fine arts painting and crafts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-[#063A25] text-white text-[10px] font-black px-2 py-0.5 rounded-md border border-white/30 shadow-xs">
                      🎨 Fine Arts & Atelier
                    </span>
                  </div>
                </div>
              </div>

              {/* Picture 4: Collaborative Homework & Mentorship (Bottom Right) */}
              <div className="group relative rounded-2xl overflow-hidden bg-white p-1.5 shadow-xl border-2 border-[#C5A021]/60 hover:border-[#FFD700] transition-all">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src="https://i.imgur.com/VKqsl7H.jpeg"
                    alt="Children reading books and doing homework"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-[#063A25] text-[#FFD700] text-[10px] font-black px-2 py-0.5 rounded-md border border-[#C5A021]/40 shadow-xs">
                      📖 Homework & Reading
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Floating Polaris Emblem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#063A25] border-2 border-[#C5A021] text-white px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2 backdrop-blur-md z-10 animate-pulse">
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
                <span className="font-extrabold text-xs tracking-wider uppercase text-white font-heading">
                  12 Active Pillars
                </span>
              </div>

            </div>

            {/* Quick Session Schedule Card */}
            <div className="mt-4 bg-white text-slate-900 p-4 rounded-2xl border-2 border-[#C5A021]/50 shadow-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#063A25] flex items-center justify-center font-bold">
                  📍
                </div>
                <div>
                  <div className="text-xs font-bold text-[#063A25] uppercase tracking-wider">Weekly Studio Hours</div>
                  <div className="text-xs text-slate-600 font-medium">Tues & Thurs 4–7 PM • Sat 9–11 AM</div>
                </div>
              </div>
              <button
                onClick={() => openModal('registration', { programTitle: 'Academic & STEM Discovery' })}
                className="bg-[#063A25] hover:bg-[#094D32] text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors border border-[#C5A021]/40 shadow-sm shrink-0"
              >
                Enroll Free
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

