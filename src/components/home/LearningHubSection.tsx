import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Play, 
  Printer, 
  Code, 
  FlaskConical, 
  BookOpen, 
  Music, 
  Compass, 
  ArrowRight, 
  Star
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ResourceCategory, AgeGroup, Resource } from '../../types';

export const LearningHubSection: React.FC = () => {
  const { resources, openModal, setCurrentPage } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeAge, setActiveAge] = useState<AgeGroup | 'All'>('All');
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

  const filteredResources = resources.filter(res => {
    const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
    const matchesAge = activeAge === 'All' || res.ageGroup === activeAge || res.ageGroup === 'All Ages';
    const matchesSearch = searchQuery === '' || 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesAge && matchesSearch;
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
    <section id="learning-hub" className="py-20 bg-slate-50 text-slate-900 border-b border-blue-100 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#0A1E4A] text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>Free Community Learning Core</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1E4A] tracking-tight font-heading">
              Polaris <span className="text-[#C5A021]">Learning Hub</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Explore 100% free interactive lessons, coding puzzles, safe home science experiments, printable worksheets, and leadership reflections created by certified educators.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('learning-hub');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-black text-[#0A1E4A] hover:text-blue-700 bg-white px-5 py-2.5 rounded-xl border border-blue-200 shadow-sm transition-colors shrink-0"
          >
            <span>Open Full Interactive Hub</span>
            <ArrowRight className="w-4 h-4 text-[#C5A021]" />
          </button>
        </div>

        {/* Search & Category Filter Strip */}
        <div className="bg-white border border-blue-100 p-4 sm:p-5 rounded-3xl space-y-4 shadow-md">
          
          {/* Search Bar & Age Selector */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, math patterns, Scratch coding, science labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A021] transition-colors"
              />
            </div>

            {/* Age Quick Filter */}
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 p-1 rounded-xl shrink-0 overflow-x-auto">
              <span className="text-[11px] text-slate-500 px-2 font-bold">Age:</span>
              {(['All', '3-5', '6-8', '9-12'] as const).map(age => (
                <button
                  key={age}
                  onClick={() => setActiveAge(age)}
                  className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                    activeAge === age
                      ? 'bg-[#0A1E4A] text-[#FFD700] shadow-sm'
                      : 'text-slate-600 hover:text-[#0A1E4A]'
                  }`}
                >
                  {age === 'All' ? 'All Ages' : `Ages ${age}`}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0A1E4A] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#0A1E4A] border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredResources.slice(0, 6).map((res) => {
            const FormatIcon = getFormatIcon(res.format);

            return (
              <div
                key={res.id}
                className="group bg-white rounded-3xl overflow-hidden border border-blue-100 hover:border-[#C5A021] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail with overlay tags */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={res.thumbnail}
                      alt={res.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E4A]/80 via-transparent to-transparent"></div>

                    {/* Top tags */}
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="bg-[#0A1E4A] text-[#FFD700] text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-sm border border-[#C5A021]/40">
                        {res.category}
                      </span>
                      <span className="bg-white/95 text-[#0A1E4A] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                        Ages {res.ageGroup}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/95 text-[#0A1E4A] text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      {res.estimatedMinutes} min
                    </div>

                    {/* Format Badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#0A1E4A]/90 backdrop-blur-xs border border-[#C5A021]/50 px-2.5 py-1 rounded-lg text-[#FFD700] text-xs font-black">
                      <FormatIcon className="w-3.5 h-3.5 text-[#FFD700]" />
                      <span>{res.format}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-black text-[#0A1E4A] group-hover:text-blue-700 transition-colors leading-snug font-heading">
                      {res.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {res.description}
                    </p>

                    {/* Tag bubbles */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {res.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] text-blue-900 font-semibold bg-blue-50 px-2 py-0.5 rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0 border-t border-slate-100 mt-3 flex items-center justify-between">
                  <div className="text-[11px] text-[#0A1E4A] font-bold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#C5A021] fill-[#C5A021]" />
                    <span>{res.completedCount} Stars Earned</span>
                  </div>

                  <button
                    id={`start-res-btn-${res.id}`}
                    onClick={() => openModal('resource-player', res)}
                    className="bg-[#0A1E4A] hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition-all border border-[#C5A021]/40"
                  >
                    <span>Start Activity</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD700]" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-blue-200 mt-6 shadow-sm">
            <p className="text-sm text-slate-600 font-medium">No resources found matching your search. Try resetting filters.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveAge('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-blue-700 font-bold underline"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

