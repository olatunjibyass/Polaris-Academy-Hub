import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Users, 
  HeartHandshake, 
  Lightbulb, 
  Trophy,
  CheckCircle2
} from 'lucide-react';

export const WhyPolarisSection: React.FC = () => {
  const features = [
    {
      icon: HeartHandshake,
      title: '100% Free & Nonprofit Accessibility',
      desc: 'No child is ever turned away due to financial constraints. Community donors and grants fund free equipment, books, and scholarship spots.',
      photo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=300'
    },
    {
      icon: Users,
      title: 'Small Class Sizes (1:8 Ratio)',
      desc: 'Small student-to-mentor ratios ensure individualized attention, deep rapport, and personalized encouragement for every student.',
      photo: 'https://i.imgur.com/VKqsl7H.jpeg'
    },
    {
      icon: Lightbulb,
      title: 'Multidisciplinary Synthesis',
      desc: 'We combine logic (STEM & Math) with emotion & aesthetics (Arts, Music, Dance) so children develop balanced, agile problem-solving skills.',
      photo: 'https://i.imgur.com/XJmmc5B.jpeg'
    },
    {
      icon: ShieldCheck,
      title: 'Vetted & Safe Environment',
      desc: 'Every instructor is background-checked and certified in child development. Strict safety protocols with complete privacy protection.',
      photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300'
    },
    {
      icon: Sparkles,
      title: 'Confidence-First Mentorship',
      desc: 'We celebrate bravery, creative iteration, and growth mindset over high-pressure memorization or stressful tests.',
      photo: 'https://i.imgur.com/fZWhiTM.jpeg'
    },
    {
      icon: Trophy,
      title: 'Real-World Showcases',
      desc: 'Youth present at youth hackathons, art galas, community debates, and annual recitals, building genuine poise and pride.',
      photo: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <section className="py-12 bg-slate-50 text-slate-900 border-b border-blue-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0A1E4A] text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Why Choose Polaris Academy</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0A1E4A] tracking-tight font-heading">
            A Guiding Star for Your Child’s <span className="text-[#C5A021]">Formative Years</span>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Named after Polaris—the steadfast North Star that has guided travelers for centuries—our mission is to serve as a reliable, uplifting beacon for young minds discovering their unique path.
          </p>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-blue-100 hover:border-[#C5A021] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100">
                  <img
                    src={feat.photo}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4A]/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute -bottom-3 left-6 w-11 h-11 rounded-2xl bg-[#0A1E4A] border-2 border-[#C5A021] flex items-center justify-center text-[#FFD700] shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 pt-6 space-y-3">
                  <h3 className="text-lg font-black text-[#0A1E4A] group-hover:text-blue-700 transition-colors font-heading">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-blue-900 border-t border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A021]" />
                    <span>Polaris Quality Standard</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

