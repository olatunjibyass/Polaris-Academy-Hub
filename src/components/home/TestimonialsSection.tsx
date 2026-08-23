import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Parent of 7-year-old Explorer',
      quote: 'Before Polaris Academy Hub, my son was shy about math and felt intimidated by technology. Within three weeks of the block coding and robotics class, he came home beaming, eager to teach me how algorithms work!',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Gregory Hayes',
      role: 'Elementary School Principal & Community Partner',
      quote: 'Polaris provides the exact holistic balance our community needed. Their focus on blending computational STEM with classical ballet, music, and public speaking creates well-rounded, compassionate young leaders.',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Elena Rostova',
      role: 'Parent of 5-year-old Ballet & Art Student',
      quote: 'The instructors truly see each child. The atmosphere is warm, encouraging, and free from high-stakes competition. My daughter looks forward to every Saturday morning at the Hub.',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section className="py-12 bg-slate-50 text-slate-900 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-[#063A25] text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Community Stories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#063A25] tracking-tight font-heading">
            Loved by Parents, <span className="text-[#C5A021]">Inspiring to Kids</span>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Read how Polaris Academy Hub has helped children across our community build confidence, master new skills, and uncover their unique passions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-emerald-100 hover:border-[#C5A021] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C5A021] fill-[#C5A021]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-emerald-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-4 border-t border-slate-100">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A021]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-black text-[#063A25] font-heading">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

