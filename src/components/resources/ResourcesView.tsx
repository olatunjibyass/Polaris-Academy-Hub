import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Search, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Star
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Resource } from '../../types';

export const ResourcesView: React.FC = () => {
  const { resources, openModal } = useApp();
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const printableAndGuides = resources.filter(r => 
    r.format === 'Printable Worksheet' || 
    r.format === 'STEM Experiment' || 
    r.format === 'Leadership Quest' || 
    r.format === 'Interactive Lesson'
  );

  const filtered = printableAndGuides.filter(res => {
    const matchFmt = selectedFormat === 'All' || res.format === selectedFormat;
    const matchQuery = searchQuery === '' ||
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFmt && matchQuery;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0B1B3D] via-[#163273] to-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white border border-amber-400/20 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Parent & Educator Resource Library</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Curated Worksheets & Lesson Toolkits
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Download and print free certified worksheets, STEM kitchen experiment protocols, public speaking speech builders, and reading comprehension passages for home or classroom learning.
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search worksheets, math drills, kitchen science, speech outlines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0 overflow-x-auto">
            {['All', 'Printable Worksheet', 'STEM Experiment', 'Leadership Quest'].map(fmt => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedFormat === fmt
                    ? 'bg-[#0B1B3D] text-amber-400 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(res => (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md">
                    {res.category}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">
                    Ages {res.ageGroup}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {res.description}
                </p>

                <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-mono">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{res.estimatedMinutes} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{res.completedCount} downloads</span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => openModal('resource-player', res)}
                  className="w-full bg-[#0B1B3D] hover:bg-[#163273] text-amber-400 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Open & Print Activity</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
