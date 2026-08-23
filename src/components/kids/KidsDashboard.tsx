import React, { useState } from 'react';
import { 
  Sparkles, 
  Star, 
  Trophy, 
  Rocket, 
  Play, 
  Flame, 
  Smile, 
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Code,
  Music,
  FlaskConical
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ChildProfile } from '../../types';

export const KidsDashboard: React.FC = () => {
  const { childProfiles, activeChild, setActiveChild, resources, openModal, triggerConfettiCelebration } = useApp();

  const [avatarList] = useState(['🚀', '🎨', '🔬', '⭐', '🦁', '🐬', '🦄', '🤖']);

  if (!activeChild) {
    return (
      <div className="py-20 text-center text-slate-800">
        <h2 className="text-2xl font-bold">Please select an explorer profile to enter the Kids Zone!</h2>
      </div>
    );
  }

  // Badges calculation
  const badges = [
    { name: 'Algorithm Ace', icon: '🤖', desc: 'Solved 2+ Coding Quests', earned: activeChild.starsCount >= 40 },
    { name: 'Star Master', icon: '⭐', desc: 'Earned 100+ Polaris Stars', earned: activeChild.starsCount >= 100 },
    { name: 'Sound Explorer', icon: '🎵', desc: 'Completed Music Rhythm Labs', earned: activeChild.completedResourceIds.includes('res-music-1') },
    { name: 'Junior Scientist', icon: '🔬', desc: 'Explored Safe Chemistry', earned: activeChild.completedResourceIds.includes('res-chem-1') },
    { name: 'Math Magician', icon: '🔢', desc: 'Cracked Singapore Math Patterns', earned: activeChild.completedResourceIds.includes('res-math-1') },
    { name: 'Starlight Leader', icon: '👑', desc: 'Completed Youth Speech Quest', earned: activeChild.completedResourceIds.includes('res-lead-1') }
  ];

  // Activities suited for this child
  const recommended = resources.filter(r => 
    r.ageGroup === activeChild.ageGroup || r.ageGroup === 'All Ages'
  );

  return (
    <div className="py-10 bg-gradient-to-b from-blue-900 via-indigo-950 to-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Child Profile Banner */}
        <div className="bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-blue-900/90 rounded-3xl p-6 sm:p-10 border-2 border-amber-400/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-amber-400 border-4 border-white shadow-xl flex items-center justify-center text-4xl sm:text-5xl">
                {activeChild.avatar}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-slate-900">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-black uppercase px-2.5 py-0.5 rounded-full border border-amber-400/30">
                <span>Explorer Level {Math.floor(activeChild.starsCount / 30) + 1}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                Welcome back, {activeChild.firstName}!
              </h1>
              <p className="text-xs text-indigo-200">
                Age {activeChild.age} • Track: Ages {activeChild.ageGroup} Early Star
              </p>
            </div>
          </div>

          {/* Explorer Stats Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-slate-900/80 border border-amber-400/50 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center">
                <Star className="w-6 h-6 fill-slate-950" />
              </div>
              <div>
                <div className="text-xl font-black text-amber-300">{activeChild.starsCount}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Polaris Stars</div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-rose-400/50 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="text-xl font-black text-rose-300">5 Days</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Learning Streak</div>
              </div>
            </div>

            {/* Profile Switcher */}
            <div className="bg-slate-900/90 border border-slate-700 p-1.5 rounded-2xl flex gap-1">
              {childProfiles.map(child => (
                <button
                  key={child.id}
                  onClick={() => setActiveChild(child)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeChild.id === child.id
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{child.avatar}</span>
                  <span>{child.firstName}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Unlocked Badges Showcase */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold font-heading text-white">Your Star Badges & Trophies</h2>
            </div>
            <span className="text-xs text-amber-300 font-bold">
              {badges.filter(b => b.earned).length} of {badges.length} Unlocked
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {badges.map((b, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                  b.earned
                    ? 'bg-amber-400/10 border-amber-400/50 text-white shadow-lg shadow-amber-400/10'
                    : 'bg-slate-800/40 border-slate-700/60 opacity-40 text-slate-400'
                }`}
              >
                <div className="text-3xl py-1">{b.icon}</div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold">{b.name}</div>
                  <div className="text-[10px] text-slate-300">{b.desc}</div>
                </div>
                <div className="mt-2 text-[9px] font-black uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                  {b.earned ? '✓ Unlocked' : 'Locked'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Quests & Fun Activities */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Today&apos;s Adventure</span>
              <h2 className="text-2xl font-black font-heading text-white">Choose a Quest to Play & Learn</h2>
            </div>
            <button
              onClick={triggerConfettiCelebration}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Celebrate Streak 🎉</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map(res => {
              const isDone = activeChild.completedResourceIds.includes(res.id);

              return (
                <div
                  key={res.id}
                  className="group bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={res.thumbnail}
                        alt={res.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                      <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-2.5 py-0.5 rounded-md">
                        {res.category}
                      </div>

                      {isDone && (
                        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Done</span>
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3 text-xs font-bold text-amber-300">
                        {res.format}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {res.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between">
                    <span className="text-xs text-amber-400 font-bold">+20 ⭐ Stars</span>
                    <button
                      onClick={() => openModal('resource-player', res)}
                      className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
                    >
                      <Play className="w-3 h-3 fill-slate-950" />
                      <span>{isDone ? 'Replay' : 'Play Quest'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
