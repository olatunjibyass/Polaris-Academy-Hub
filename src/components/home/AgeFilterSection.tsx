import React, { useState } from 'react';
import { 
  Sparkles, 
  Baby, 
  Smile, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  Layers,
  Star,
  Clock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AgeGroup } from '../../types';

export const AgeFilterSection: React.FC = () => {
  const { programs, openModal, setCurrentPage } = useApp();
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('6-8');

  const ageTiers = [
    {
      group: '3-5' as AgeGroup,
      title: 'Ages 3–5',
      subtitle: 'Early Discovery & Creative Play',
      badge: 'Early Explorers',
      icon: Baby,
      photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400',
      description: 'Gentle sensory exploration, storybook phonics, creative movement, primary color finger-painting, and early rhythm songs.'
    },
    {
      group: '6-8' as AgeGroup,
      title: 'Ages 6–8',
      subtitle: 'Foundational Academic & STEM',
      badge: 'Foundational Creators',
      icon: Smile,
      photo: 'https://i.imgur.com/VKqsl7H.jpeg',
      description: 'Reading fluency, Singapore math problem-solving, beginner Scratch block coding, junior science labs, and piano keyboards.'
    },
    {
      group: '9-12' as AgeGroup,
      title: 'Ages 9–12',
      subtitle: 'Advanced Tech & Leadership',
      badge: 'Junior Leaders',
      icon: Compass,
      photo: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=400',
      description: 'Micro-robotics, AI literacy, Junior Orators public speaking, executive study habits, full acrylic painting, and community impact projects.'
    }
  ];

  // Filter programs matching selected age
  const filteredPrograms = programs.filter(prog => 
    prog.ageGroup.includes(selectedAge) || prog.ageGroup.includes('All Ages')
  );

  return (
    <section className="py-20 bg-white text-slate-900 border-b border-blue-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0A1E4A] border border-blue-200 text-xs font-black uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Age-Tailored Learning Paths</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1E4A] tracking-tight font-heading">
            Personalized for <span className="text-[#C5A021]">Every Stage of Childhood</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Select your child’s age range below to view customized learning tracks, recommended developmental goals, and scheduled classes.
          </p>
        </div>

        {/* 3 Interactive Age Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {ageTiers.map((tier) => {
            const Icon = tier.icon;
            const isSelected = selectedAge === tier.group;

            return (
              <button
                key={tier.group}
                id={`age-tier-btn-${tier.group}`}
                onClick={() => setSelectedAge(tier.group)}
                className={`text-left rounded-3xl border-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-md ${
                  isSelected 
                    ? 'bg-[#0A1E4A] text-white border-[#C5A021] shadow-2xl scale-[1.02] ring-4 ring-[#C5A021]/20' 
                    : 'bg-white text-slate-700 border-blue-100 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="relative h-32 w-full overflow-hidden">
                  <img
                    src={tier.photo}
                    alt={tier.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 ${isSelected ? 'bg-gradient-to-t from-[#0A1E4A] via-[#0A1E4A]/40 to-transparent' : 'bg-gradient-to-t from-white/90 via-white/30 to-transparent'}`}></div>
                  
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-[#C5A021] text-slate-950 px-2.5 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Active Track</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        isSelected ? 'bg-[#C5A021] text-slate-950' : 'bg-blue-50 text-[#0A1E4A] border border-blue-200'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-black uppercase tracking-wider ${
                          isSelected ? 'text-[#FFD700]' : 'text-[#C5A021]'
                        }`}>
                          {tier.badge}
                        </span>
                        <h3 className={`text-2xl font-black tracking-tight font-heading ${isSelected ? 'text-white' : 'text-[#0A1E4A]'}`}>
                          {tier.title}
                        </h3>
                      </div>
                    </div>

                    <p className={`text-xs font-bold mt-2 ${isSelected ? 'text-blue-200' : 'text-blue-900'}`}>
                      {tier.subtitle}
                    </p>

                    <p className={`text-xs leading-relaxed mt-2 ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className={`mt-5 pt-3 border-t text-xs font-black flex items-center justify-between ${
                    isSelected ? 'border-white/20 text-[#FFD700]' : 'border-slate-100 text-[#0A1E4A]'
                  }`}>
                    <span>View {filteredPrograms.length} Tailored Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamically Filtered Programs Showcase */}
        <div className="mt-12 bg-blue-50/70 border border-blue-200/80 rounded-3xl p-6 sm:p-8 shadow-inner">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-blue-200">
            <div>
              <span className="text-xs font-black text-[#C5A021] uppercase tracking-wide">
                Customized Curriculum
              </span>
              <h3 className="text-2xl font-black text-[#0A1E4A] font-heading">
                Recommended Programs for Ages {selectedAge}
              </h3>
            </div>
            <span className="text-xs text-[#0A1E4A] bg-white px-3.5 py-1.5 rounded-xl border border-blue-200 font-bold shadow-xs">
              {filteredPrograms.length} active classes for this age group
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredPrograms.map((prog) => (
              <div 
                key={prog.id}
                className="bg-white rounded-2xl p-5 border border-blue-100 hover:border-[#C5A021] shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-extrabold text-[#C5A021] uppercase tracking-wider">{prog.category}</span>
                    <span className="bg-blue-50 text-[#0A1E4A] px-2.5 py-0.5 rounded font-black border border-blue-200">{prog.ageRange}</span>
                  </div>

                  <h4 className="text-base font-black text-[#0A1E4A]">{prog.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{prog.shortDescription}</p>

                  <div className="text-[11px] text-[#0A1E4A] font-semibold bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A021] shrink-0" />
                    <span>{prog.schedule}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => openModal('registration', { programTitle: prog.title, programId: prog.id })}
                    className="w-full bg-[#0A1E4A] hover:bg-blue-900 text-white font-black py-2.5 rounded-xl text-xs transition-colors border border-[#C5A021]/50 flex items-center justify-center gap-2"
                  >
                    <span>Register Free</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD700]" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

