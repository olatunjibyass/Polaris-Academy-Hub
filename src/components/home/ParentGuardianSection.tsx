import React from 'react';
import { 
  ShieldCheck, 
  User, 
  Star, 
  Calendar, 
  Award, 
  Lock, 
  ArrowRight, 
  FileText,
  Clock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ParentGuardianSection: React.FC = () => {
  const { setCurrentPage, setUserRole, childProfiles } = useApp();

  const handleOpenParentPortal = () => {
    setUserRole('parent');
    setCurrentPage('parent-portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#07132C] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Parent Portal Features & Safety Guarantee */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A021]/10 border border-[#C5A021]/30 text-[#C5A021] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>Parent-First Security & Safety</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
              A Private, Secure Portal Designed for Guardians.
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Polaris Academy Hub keeps parents in complete control. Track your child’s weekly learning milestones, manage class registrations, and download printable achievements without any public exposure or advertising.
            </p>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3 bg-slate-800/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Child Profile Management:</strong>
                  <span className="text-slate-300">Create personalized explorer profiles for each child, set age groups, and curate interest paths.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-[#FFD700] border border-[#C5A021]/30 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Real-time Learning Progress:</strong>
                  <span className="text-slate-300">See completed interactive lessons, stars collected, attendance records, and personalized mentor notes.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-bold">Strict Child Data Privacy:</strong>
                  <span className="text-slate-300">Zero public profiles, no search engine indexing, and strictly no direct peer-to-peer child messaging.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="home-open-parent-portal-btn"
                onClick={handleOpenParentPortal}
                className="bg-[#C5A021] hover:bg-[#D4AF37] text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-lg shadow-[#C5A021]/20 flex items-center gap-2.5 transition-all group"
              >
                <span>Launch Parent & Guardian Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Portal UI Preview Simulation */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl space-y-6">
              
              {/* Header Bar of Preview */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#050B18] border border-[#C5A021]/40 text-[#C5A021] flex items-center justify-center font-bold text-sm">
                    PA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Guardian Dashboard (Preview)</div>
                    <div className="text-[11px] text-slate-400">Managing 2 Active Explorer Profiles</div>
                  </div>
                </div>
                <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Secure & Verified</span>
                </span>
              </div>

              {/* Children Tabs Snapshot */}
              <div className="grid grid-cols-2 gap-3">
                {childProfiles.slice(0, 2).map((child) => (
                  <div key={child.id} className="bg-slate-900/80 p-4 rounded-2xl border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{child.avatar}</span>
                      <span className="bg-[#C5A021] text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full">
                        ⭐ {child.starsCount}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{child.firstName} (Age {child.age})</div>
                      <div className="text-[10px] text-slate-400">{child.completedResourceIds.length} activities completed</div>
                    </div>
                    <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-white/10">
                      <div className="bg-[#C5A021] h-full rounded-full w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Enrolled Sessions Snippet */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
                  <span>Enrolled Hub Classes This Term:</span>
                  <span className="text-[11px] text-[#FFD700] font-semibold cursor-pointer hover:underline" onClick={handleOpenParentPortal}>
                    Manage &rarr;
                  </span>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white">STEM & Junior Coding Explorers</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C5A021]" />
                      <span>Tuesday: 5:30 PM – 7:00 PM (Robotics Lab)</span>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">
                    Confirmed
                  </span>
                </div>
              </div>

              <button
                onClick={handleOpenParentPortal}
                className="w-full py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-white/10 hover:border-white/20 text-xs font-bold transition-colors text-center"
              >
                Access Full Parent Suite & Certificates
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
