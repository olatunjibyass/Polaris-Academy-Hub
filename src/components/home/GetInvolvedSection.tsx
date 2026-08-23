import React from 'react';
import { 
  Heart, 
  Users, 
  Building2, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GetInvolvedSection: React.FC = () => {
  const { openModal, setCurrentPage } = useApp();

  const options = [
    {
      title: 'Donate',
      tag: 'Direct Impact',
      desc: 'Fund educational materials, science experiment kits, robotics microcontrollers, and art supplies for local youth.',
      icon: Heart,
      color: 'bg-rose-950/20 border-rose-500/30 text-rose-300',
      iconBg: 'bg-rose-500/20 text-rose-300 border border-rose-400/30',
      btnText: 'Make a Tax-Deductible Gift',
      action: () => openModal('donate')
    },
    {
      title: 'Volunteer & Mentor',
      tag: 'Share Your Passion',
      desc: 'Become an after-school tutor, STEM mentor, guest arts instructor, or family workshop assistant.',
      icon: Users,
      color: 'bg-blue-950/20 border-blue-500/30 text-blue-300',
      iconBg: 'bg-blue-500/20 text-blue-300 border border-blue-400/30',
      btnText: 'Apply to Volunteer',
      action: () => openModal('volunteer')
    },
    {
      title: 'Partner With Us',
      tag: 'Institutional Outreach',
      desc: 'Schools, libraries, nonprofit organizations, and businesses can co-host workshops and educational days.',
      icon: Building2,
      color: 'bg-amber-950/20 border-[#C5A021]/30 text-[#FFD700]',
      iconBg: 'bg-amber-500/20 text-[#FFD700] border border-[#C5A021]/30',
      btnText: 'Explore Partnerships',
      action: () => {
        setCurrentPage('get-involved');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      title: 'Sponsor a Child',
      tag: 'Full Scholarship',
      desc: 'Support a young learner with a dedicated 1-year educational fellowship including all classes, kits, and field trips.',
      icon: GraduationCap,
      color: 'bg-purple-950/20 border-purple-500/30 text-purple-300',
      iconBg: 'bg-purple-500/20 text-purple-300 border border-purple-400/30',
      btnText: 'Sponsor an Explorer',
      action: () => openModal('donate', { defaultAllocation: 'Child Scholarship Fund', defaultAmount: 150 })
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-[#050B18] text-white border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A021]/10 border border-[#C5A021]/30 text-[#C5A021] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Community Non-Profit Initiative</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Help Us Give Every Child a Chance to Shine.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Polaris Academy Hub is powered by the passion of our community. Whether you contribute resources, volunteer your time, or collaborate as an institutional partner, your support directly empowers the next generation of thinkers, creators, and leaders.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {options.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`backdrop-blur-xl rounded-3xl p-6 border ${item.color} flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-slate-200 px-2.5 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <button
                    onClick={item.action}
                    className="w-full bg-[#C5A021] hover:bg-[#D4AF37] text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nonprofit placeholder statement banner */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-white/10 text-center text-xs text-slate-300 max-w-4xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Polaris Academy Hub is a registered nonprofit initiative. All contributions directly support child program subsidies, makerspace equipment, and certified educational staff.
          </span>
        </div>

      </div>
    </section>
  );
};
