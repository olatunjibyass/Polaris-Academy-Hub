import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CommunityEvent } from '../../types';

export const EventsView: React.FC = () => {
  const { events, openModal } = useApp();
  const [filterType, setFilterType] = useState<string>('All');
  const [filterLocation, setFilterLocation] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter(ev => {
    const matchesLoc = filterLocation === 'All' || ev.locationType === filterLocation;
    const matchesSearch = searchQuery === '' ||
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.locationAddress.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLoc && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#0B1B3D] via-[#163273] to-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white border border-amber-400/20 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Community Workshops & Discovery Days</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Upcoming Events & Family Gatherings
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From weekend STEM hackathons to ballet open houses and family science nights, our events bring children, parents, educators, and community members together in joyful collaboration.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events by title or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0">
            <span className="text-[11px] font-bold text-slate-600 px-2">Location:</span>
            {['All', 'In-Person', 'Virtual / Online', 'Hybrid'].map(loc => (
              <button
                key={loc}
                onClick={() => setFilterLocation(loc)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterLocation === loc
                    ? 'bg-[#0B1B3D] text-amber-400 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((ev) => {
            const spotsRemaining = Math.max(0, ev.totalSpots - ev.registeredSpots);
            const isFull = spotsRemaining === 0;

            return (
              <div
                key={ev.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={ev.bannerImage}
                      alt={ev.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="bg-[#0B1B3D]/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/40">
                        {ev.locationType}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                      {ev.isFree ? 'Free Admission' : 'Subsidized'}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-amber-300">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{ev.date}</span>
                      </div>
                      <span className="bg-slate-900/80 px-2 py-0.5 rounded text-[10px]">
                        {ev.ageRange}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3.5">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {ev.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ev.description}
                    </p>

                    <div className="space-y-1.5 text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-mono">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{ev.locationAddress}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{spotsRemaining} spaces remaining</span>
                      </div>
                      <div className="w-24 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-amber-500 h-full rounded-full"
                          style={{ width: `${Math.min(100, (ev.registeredSpots / ev.totalSpots) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => openModal('event-rsvp', ev)}
                    disabled={isFull}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      isFull
                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        : 'bg-[#0B1B3D] hover:bg-[#163273] text-amber-400 shadow-sm'
                    }`}
                  >
                    <span>{isFull ? 'Sold Out / At Capacity' : 'RSVP Free Family Spot'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
