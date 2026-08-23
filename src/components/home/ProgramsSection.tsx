import React from 'react';
import { 
  BookOpen, 
  Cpu, 
  Palette, 
  Music, 
  Sparkles, 
  Compass, 
  Calendar, 
  Clock, 
  ArrowRight,
  Star,
  Users
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Program } from '../../types';

export const ProgramsSection: React.FC = () => {
  const { programs, openModal, setCurrentPage, setSelectedAgeFilter } = useApp();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'Cpu': return Cpu;
      case 'Palette': return Palette;
      case 'Music': return Music;
      case 'Sparkles': return Sparkles;
      case 'Compass': return Compass;
      default: return Sparkles;
    }
  };

  return (
    <section id="programs" className="py-12 bg-slate-50 text-slate-900 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#063A25] border border-emerald-200 text-xs font-black uppercase tracking-wider shadow-xs">
              <Star className="w-3.5 h-3.5 fill-[#C5A021] text-[#C5A021]" />
              <span>Core Educational Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#063A25] tracking-tight font-heading">
              Nurturing Intellect, <span className="text-[#C5A021]">Passion & Creativity</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Designed for ages 3–24. All programs emphasize hands-on learning, positive encouragement, and personalized mentorship in an inclusive nonprofit environment.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('programs');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#063A25] hover:text-emerald-700 transition-colors bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm shrink-0"
          >
            <span>View Full 12-Program Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#C5A021]" />
          </button>
        </div>

        {/* 6 Core Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = getIcon(program.iconName);

            return (
              <div 
                key={program.id}
                className="group bg-white rounded-3xl overflow-hidden border border-emerald-100/90 hover:border-[#C5A021] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Banner Image with Overlay Tags */}
                  <div className="relative h-52 overflow-hidden bg-slate-900">
                    <img 
                      src={program.bannerImage} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-transparent to-transparent"></div>

                    {/* Top Age & Level Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-[#063A25]/95 text-[#FFD700] border border-[#C5A021]/50 text-[11px] font-black px-2.5 py-1 rounded-lg shadow-sm">
                        {program.ageRange}
                      </span>
                      <span className="bg-white/95 text-[#063A25] text-[11px] font-bold px-2 py-1 rounded-lg shadow-sm">
                        {program.level}
                      </span>
                    </div>

                    {/* Floating Pillar Icon */}
                    <div className="absolute -bottom-4 right-5 w-12 h-12 rounded-2xl bg-[#063A25] border-2 border-[#C5A021] shadow-lg flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 pt-7 space-y-4">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C5A021]">
                        {program.category}
                      </span>
                      <h3 className="text-xl font-black text-[#063A25] mt-1 leading-snug group-hover:text-emerald-700 transition-colors font-heading">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {program.shortDescription}
                    </p>

                    {/* Curriculum Highlight Bullets */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-[#063A25]">What Children Learn:</div>
                      <ul className="space-y-1">
                        {program.curriculumHighlights.slice(0, 3).map((item, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-[#C5A021] font-bold mt-0.5">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule Snippet */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-700 bg-emerald-50/80 px-3.5 py-2.5 rounded-xl border border-emerald-100">
                      <Clock className="w-3.5 h-3.5 text-[#C5A021] shrink-0" />
                      <span className="font-semibold text-[#063A25]">{program.schedule}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-2 mt-4">
                  <button
                    id={`explore-prog-${program.id}`}
                    onClick={() => {
                      setCurrentPage('programs');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl border border-emerald-200 hover:border-emerald-300 text-[#063A25] text-xs font-bold hover:bg-emerald-50 transition-colors"
                  >
                    Details & Syllabus
                  </button>
                  <button
                    id={`register-prog-${program.id}`}
                    onClick={() => openModal('registration', { programTitle: program.title, programId: program.id })}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#063A25] hover:bg-[#094D32] text-white text-xs font-bold shadow-sm transition-colors border border-[#C5A021]/50"
                  >
                    Register Free
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
