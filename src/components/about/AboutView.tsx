import React from 'react';
import { 
  Sparkles, 
  Target, 
  ShieldCheck, 
  Compass, 
  Award, 
  Users, 
  GraduationCap,
  Building2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AboutView: React.FC = () => {
  const { siteSettings, setCurrentPage } = useApp();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <div className="bg-[#063A25] rounded-3xl p-8 sm:p-14 text-white border border-[#C5A021]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#031D13] border border-[#C5A021]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>About Polaris Academy Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              A Beacon for the Next Generation of Thinkers, Creators & Leaders
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Founded as a registered nonprofit educational initiative, Polaris Academy Hub is dedicated to empowering children ages 3–12 through joyful exploration, balanced arts and sciences, and inclusive community support.
            </p>
          </div>
        </div>

        {/* Mission, Vision & Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#C5A021] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#063A25] font-heading">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To create an accessible educational platform that helps children ages 3–12 discover their interests, develop academic and creative skills, build confidence, and learn through engaging hands-on experiences.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#063A25] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#063A25] font-heading">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A community where every young mind is equipped with foundational literacy, digital fluency, artistic appreciation, and moral leadership regardless of socioeconomic background.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#063A25]" />
            </div>
            <h3 className="text-xl font-bold text-[#063A25] font-heading">Safety & Inclusivity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We uphold strict child protection standards, rigorous mentor background checks, small-ratio learning environments, and zero financial barriers for families in need.
            </p>
          </div>
        </div>

        {/* Story & Philosophy */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C5A021] uppercase tracking-wide">
              The Polaris Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#063A25] font-heading">
              Why We Combine STEM, Fine Arts & Character
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traditional education often fragments subjects: science is separated from art, and leadership is treated as an afterthought. At Polaris Academy Hub, we believe the greatest breakthroughs happen at the intersection of disciplines.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When a child builds a robot and then choreographs its dance movement, or writes a musical piece informed by mathematical fractions, they develop neural agility, resilience, and profound creative self-assurance.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setCurrentPage('instructors');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#063A25] text-[#FFD700] font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#084C31] transition-colors shadow-sm"
              >
                Meet Our Certified Instructors
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=900"
              alt="Polaris Academy Classroom"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <div className="font-bold text-[#FFD700]">Hands-on collaborative learning in action</div>
              <div className="text-slate-200 text-[11px]">Polaris Academy Starlight Lab</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
