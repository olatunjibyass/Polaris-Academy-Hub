import React from 'react';
import { 
  BookOpen, 
  Cpu, 
  Code, 
  Palette, 
  Music, 
  Sparkles, 
  Compass, 
  Award, 
  Heart,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MissionSection: React.FC = () => {
  const { setCurrentPage, siteSettings } = useApp();

  const pillars = [
    {
      title: 'Academic Mastery',
      desc: 'Foundational reading comprehension, conceptual Singapore-style math, and small group homework support.',
      icon: BookOpen,
      badge: 'Academic',
      photo: 'https://i.imgur.com/VKqsl7H.jpeg'
    },
    {
      title: 'STEM & Robotics',
      desc: 'Hands-on scientific inquiry, physics experiments, and sensory rover construction.',
      icon: Cpu,
      badge: 'STEM',
      photo: 'https://i.imgur.com/XJmmc5B.jpeg'
    },
    {
      title: 'Coding & AI Basics',
      desc: 'Block-based algorithmic logic, game development, and safe kid-friendly artificial intelligence concepts.',
      icon: Code,
      badge: 'Coding',
      photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Arts & Creativity',
      desc: 'Canvas acrylics, clay sculpting, character sketching, and boundless creative expression.',
      icon: Palette,
      badge: 'Fine Arts',
      photo: 'https://i.imgur.com/fZWhiTM.jpeg'
    },
    {
      title: 'Music & Instruments',
      desc: 'Keyboard fundamentals, rhythm percussion, ear training, and joyful vocal harmonies.',
      icon: Music,
      badge: 'Music',
      photo: 'https://i.imgur.com/GXE0qA6.jpeg'
    },
    {
      title: 'Ballet & Movement',
      desc: 'Classic ballet positions, kinesthetic poise, flexibility, and expressive choreography.',
      icon: Sparkles,
      badge: 'Movement',
      photo: 'https://i.imgur.com/bP54wb0.jpeg'
    },
    {
      title: 'Life Skills & Teamwork',
      desc: 'Emotional resilience, active listening, time management, and collaborative problem solving.',
      icon: Compass,
      badge: 'Life Skills',
      photo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Confidence & Leadership',
      desc: 'Junior Orators public speaking, community design, and self-belief workshops.',
      icon: Award,
      badge: 'Leadership',
      photo: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section className="py-12 bg-white text-slate-900 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header in Green, Gold, and White */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#063A25] text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Our 8-Pillar Educational Framework</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#063A25] tracking-tight font-heading">
            Helping Every Child Discover <span className="text-[#C5A021]">What They’re Capable Of</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            At Polaris Academy Hub, we believe cost, background, or circumstance should never limit a child&apos;s curiosity. We cultivate the complete learner through an integrated 8-pillar curriculum designed to spark lifelong passion and resilience.
          </p>
        </div>

        {/* 8 Pillar Grid with Crisp White Cards, Photos & Gold Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                onClick={() => {
                  setCurrentPage('programs');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-emerald-100 hover:border-[#C5A021] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Pillar Photo Thumbnail */}
                <div className="relative h-36 overflow-hidden bg-slate-100">
                  <img
                    src={pillar.photo}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-[#031D13]/20 to-transparent"></div>
                  
                  {/* Floating Pillar Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-[#063A25]/90 backdrop-blur-md text-[#FFD700] text-[10px] font-black px-2 py-0.5 rounded-md border border-[#C5A021]/50">
                    {pillar.badge}
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute bottom-2.5 left-3 w-9 h-9 rounded-xl bg-white text-[#063A25] flex items-center justify-center shadow-md font-bold">
                    <Icon className="w-5 h-5 text-[#063A25]" />
                  </div>
                </div>

                {/* Pillar Text Info */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#063A25] group-hover:text-emerald-700 transition-colors font-heading">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#063A25] group-hover:text-[#C5A021] transition-colors">
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C5A021]" />
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

