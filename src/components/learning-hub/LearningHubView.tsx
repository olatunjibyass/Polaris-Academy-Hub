import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Play, 
  Code, 
  Printer, 
  FlaskConical, 
  Music, 
  Compass, 
  Star, 
  ArrowRight,
  Filter,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ResourceCategory, AgeGroup, Resource } from '../../types';

export const LearningHubView: React.FC = () => {
  const { resources, openModal, activeChild } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAge, setSelectedAge] = useState<AgeGroup | 'All'>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: (ResourceCategory | 'All')[] = [
    'All',
    'Math',
    'Reading',
    'Science',
    'Coding',
    'AI',
    'Art',
    'Music',
    'Dance',
    'Leadership',
    'Life Skills'
  ];

  const formats = [
    'All',
    'Interactive Lesson',
    'Coding Challenge',
    'STEM Experiment',
    'Printable Worksheet',
    'Music Activity',
    'Leadership Quest'
  ];

  const filtered = resources.filter(res => {
    const matchCat = selectedCategory === 'All' || res.category === selectedCategory;
    const matchAge = selectedAge === 'All' || res.ageGroup === selectedAge || res.ageGroup === 'All Ages';
    const matchFmt = selectedFormat === 'All' || res.format === selectedFormat;
    const matchQuery = searchQuery === '' ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchAge && matchFmt && matchQuery;
  });

  const getFormatIcon = (format: Resource['format']) => {
    switch (format) {
      case 'Interactive Lesson': return Play;
      case 'Coding Challenge': return Code;
      case 'STEM Experiment': return FlaskConical;
      case 'Printable Worksheet': return Printer;
      case 'Music Activity': return Music;
      case 'Leadership Quest': return Compass;
      default: return Sparkles;
    }
  };

  return (
    <div className="py-12 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-[#063A25] rounded-3xl p-8 sm:p-12 border border-[#C5A021]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#031D13] border border-[#C5A021]/40 text-[#FFD700] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>Free Community Educational Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Polaris Interactive Learning Hub
            </h1>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Explore 100% free, certified learning modules across Math, Science, Coding, Art, Music, Dance and Leadership. Complete interactive challenges to collect Polaris Stars and unlock milestone badges!
            </p>

            {activeChild && (
              <div className="inline-flex items-center gap-3 bg-[#031D13]/80 px-4 py-2 rounded-2xl border border-[#C5A021]/40 text-xs text-[#FFD700]">
                <span className="text-xl">{activeChild.avatar}</span>
                <span>Active Explorer: <strong>{activeChild.firstName}</strong> (⭐ {activeChild.starsCount} Stars)</span>
              </div>
            )}
          </div>
        </div>

        {/* Filter Strip */}
        <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl space-y-4 backdrop-blur-md">
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, math patterns, Scratch coding, safe science labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Age Filter */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 p-1 rounded-xl shrink-0 overflow-x-auto">
              <span className="text-[11px] text-slate-400 px-2 font-medium">Age:</span>
              {(['All', '3-5', '6-8', '9-12', '18-24'] as const).map(age => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedAge === age
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {age === 'All' ? 'All' : `Ages ${age}`}
                </button>
              ))}
            </div>

            {/* Format Filter */}
            <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 p-1 rounded-xl shrink-0">
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="bg-transparent text-xs text-slate-200 px-2 py-1 focus:outline-none"
              >
                {formats.map(f => (
                  <option key={f} value={f} className="bg-slate-900 text-white">
                    Format: {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Categories Pill Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-900/90 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((res) => {
            const FormatIcon = getFormatIcon(res.format);
            const isCompleted = activeChild?.completedResourceIds.includes(res.id);

            return (
              <div
                key={res.id}
                className="group bg-slate-800/70 hover:bg-slate-800 rounded-3xl overflow-hidden border border-slate-700/80 hover:border-amber-400/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={res.thumbnail}
                      alt={res.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-sm">
                        {res.category}
                      </span>
                      <span className="bg-slate-900/90 text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-700">
                        Ages {res.ageGroup}
                      </span>
                    </div>

                    {isCompleted && (
                      <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#0B1B3D]/90 border border-amber-400/30 px-2.5 py-1 rounded-lg text-amber-300 text-xs font-semibold">
                      <FormatIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>{res.format}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {res.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {res.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {res.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-700/60 flex items-center justify-between mt-2">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{res.completedCount} Stars Given</span>
                  </div>

                  <button
                    onClick={() => openModal('resource-player', res)}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
                  >
                    <span>{isCompleted ? 'Replay Activity' : 'Launch Activity'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-800/40 rounded-3xl border border-slate-700">
            <p className="text-sm text-slate-400">No resources found matching the active criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedAge('All');
                setSelectedFormat('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
