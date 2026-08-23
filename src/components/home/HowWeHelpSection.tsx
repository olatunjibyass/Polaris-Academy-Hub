import React from 'react';
import { Compass, Lightbulb, Rocket, Award, CheckCircle2 } from 'lucide-react';

export const HowWeHelpSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Ignite Curiosity & Interests',
      desc: 'Through low-stakes exploration across STEM, arts, coding, and dance, children sample different disciplines without pressure until a spark catches.',
      icon: Lightbulb
    },
    {
      num: '2',
      title: 'Build Skill Foundations',
      desc: 'Certified mentors break complex concepts into intuitive, playful steps—whether it is algorithmic loops, piano chords, or fraction models.',
      icon: Compass
    },
    {
      num: '3',
      title: 'Hands-On Creation',
      desc: 'Kids build real artifacts: working robots, watercolor canvases, short speeches, and choreographed routines alongside supportive peers.',
      icon: Rocket
    },
    {
      num: '4',
      title: 'Perform, Lead & Shine',
      desc: 'Showcasing their work in community exhibitions, concerts, and hackathons gives children genuine pride and lasting self-assurance.',
      icon: Award
    }
  ];

  return (
    <section className="py-12 bg-white text-slate-900 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#063A25] text-xs font-black uppercase tracking-wider shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Our 4-Step Developmental Journey</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#063A25] tracking-tight font-heading">
            How We Help Children <span className="text-[#C5A021]">Grow & Shine</span>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            From first-time discovery to public showcase, our learning arc nurtures intrinsic motivation, problem-solving stamina, and joyful confidence.
          </p>
        </div>

        {/* 4 Step Timeline Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="relative bg-white border border-emerald-100 hover:border-[#C5A021] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[#063A25] text-[#FFD700] border border-[#C5A021]/50 font-black text-base flex items-center justify-center shadow-md">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#063A25] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#063A25]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-[#063A25] font-heading group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-950 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A021]" />
                  <span>Growth Mindset Certified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

