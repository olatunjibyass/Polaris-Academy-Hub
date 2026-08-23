import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Palette, 
  Music, 
  Sparkles, 
  Compass, 
  Search, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  Users, 
  ArrowRight,
  Filter,
  Star
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgramCategory, AgeGroup, Program } from '../../types';

export const ProgramsView: React.FC = () => {
  const { programs, openModal, selectedAgeFilter, setSelectedAgeFilter, siteSettings } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<Program | null>(null);

  const categories: (ProgramCategory | 'All')[] = [
    'All',
    'Academic Support',
    'STEM, AI & Coding',
    'Arts & Creativity',
    'Music & Instruments',
    'Ballet & Dance',
    'Life Skills & Leadership'
  ];

  const filteredPrograms = programs.filter(prog => {
    const matchesCategory = selectedCategory === 'All' || prog.category === selectedCategory;
    const matchesAge = selectedAgeFilter === 'All Ages' || prog.ageGroup.includes(selectedAgeFilter) || prog.ageGroup.includes('All Ages');
    const matchesSearch = searchQuery === '' || 
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.skillsLearned.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesAge && matchesSearch;
  });

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
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Banner */}
        <div className="bg-[#063A25] rounded-3xl p-8 sm:p-12 text-white border border-[#C5A021]/30 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#031D13] border border-[#C5A021]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>Ages 3–12 Curriculum Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Educational Programs & Hub Classes
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Explore our 6 core pillars spanning foundational academics, coding & AI, fine arts, music, dance, and youth leadership. Small group formats ensure every child is seen, supported, and challenged.
            </p>
          </div>

          <div className="absolute right-6 bottom-6 hidden lg:block opacity-10 text-[#FFD700] pointer-events-none">
            <Sparkles className="w-64 h-64" />
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search programs, coding, ballet, math, public speaking..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Age Filter */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0">
              <span className="text-[11px] font-bold text-slate-600 px-2">Filter Age:</span>
              {(['All Ages', '3-5', '6-8', '9-12'] as const).map(age => (
                <button
                  key={age}
                  onClick={() => setSelectedAgeFilter(age)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedAgeFilter === age
                      ? 'bg-[#0B1B3D] text-amber-400 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {age === 'All Ages' ? 'All' : `Ages ${age}`}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const Icon = getIcon(program.iconName);

            return (
              <div 
                key={program.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={program.bannerImage} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="bg-[#0B1B3D]/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/30">
                        {program.ageRange}
                      </span>
                      <span className="bg-white/90 text-slate-900 text-[11px] font-semibold px-2 py-1 rounded-lg">
                        {program.level}
                      </span>
                    </div>

                    <div className="absolute -bottom-4 right-5 w-12 h-12 rounded-2xl bg-amber-400 border-2 border-white shadow-lg flex items-center justify-center text-slate-950">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-6 pt-7 space-y-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                        {program.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1 leading-snug">
                        {program.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {program.shortDescription}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold text-slate-700">Curriculum Highlights:</div>
                      <ul className="space-y-1">
                        {program.curriculumHighlights.map((item, i) => (
                          <li key={i} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs">
                      <div className="font-bold text-slate-700 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Weekly Schedule Slots:</span>
                      </div>
                      <div className="font-mono text-[11px] text-slate-600">
                        {program.schedule}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-2 mt-4">
                  <button
                    onClick={() => setSelectedProgramDetail(program)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors"
                  >
                    View Syllabus
                  </button>
                  <button
                    onClick={() => openModal('registration', { programTitle: program.title, programId: program.id })}
                    className="flex-1 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#163273] text-amber-400 text-xs font-bold transition-colors shadow-sm"
                  >
                    Register Child
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Program Syllabus Modal */}
        {selectedProgramDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase">
                    {selectedProgramDetail.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-heading">
                    {selectedProgramDetail.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProgramDetail(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{selectedProgramDetail.fullDescription}</p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-xs">Core Skills Acquired:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProgramDetail.skillsLearned.map((s, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-800">
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-bold text-slate-900 text-xs">Weekly Session Breakdown:</div>
                  <div className="space-y-1.5">
                    {selectedProgramDetail.scheduleSlots.map(slot => (
                      <div key={slot.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                        <div>
                          <strong className="text-slate-900">{slot.day}: {slot.time}</strong>
                          <div className="text-[11px] text-slate-500">{slot.roomOrPlatform} (Ages {slot.ageGroup})</div>
                        </div>
                        <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                          {slot.spotsLeft} spaces open
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-2xl border border-amber-200">
                  <img
                    src={selectedProgramDetail.instructorPhoto}
                    alt={selectedProgramDetail.instructorName}
                    className="w-10 h-10 rounded-full object-cover border border-amber-300"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{selectedProgramDetail.instructorName}</div>
                    <div className="text-[11px] text-slate-600">{selectedProgramDetail.instructorRole}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProgramDetail(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const prog = selectedProgramDetail;
                    setSelectedProgramDetail(null);
                    openModal('registration', { programTitle: prog.title, programId: prog.id });
                  }}
                  className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#163273]"
                >
                  Register for this Program
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
