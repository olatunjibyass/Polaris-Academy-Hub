import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UpcomingEventsSection: React.FC = () => {
  const { events, openModal, setCurrentPage } = useApp();

  return (
    <section className="py-12 bg-white text-slate-900 border-b border-emerald-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#063A25] text-xs font-black uppercase tracking-wider shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C5A021]" />
              <span>Community & Family Workshops</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#063A25] tracking-tight font-heading">
              Upcoming Events & <span className="text-[#C5A021]">Discovery Days</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Join free STEM hackathons, art exhibitions, dance open houses, and parenting workshops. All events are welcoming, family-friendly, and open to the public.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#063A25] hover:text-emerald-700 bg-slate-50 px-4 py-2 rounded-xl border border-emerald-200 shadow-sm transition-colors shrink-0"
          >
            <span>View Full Community Calendar</span>
            <ArrowRight className="w-4 h-4 text-[#C5A021]" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((ev) => {
            const spotsRemaining = Math.max(0, ev.totalSpots - ev.registeredSpots);
            const isFull = spotsRemaining === 0;

            return (
              <div 
                key={ev.id}
                className="bg-white rounded-3xl overflow-hidden border border-emerald-100 hover:border-[#C5A021] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={ev.bannerImage} 
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031D13]/80 via-transparent to-transparent"></div>

                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="bg-[#063A25] text-[#FFD700] text-[11px] font-black px-2.5 py-1 rounded-lg border border-[#C5A021]/40 shadow-sm">
                        {ev.locationType}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-md">
                      {ev.isFree ? 'Free Admission' : 'Subsidized'}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[#FFD700] font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{ev.date}</span>
                      </div>
                      <span className="bg-white/90 text-[#063A25] font-bold px-2 py-0.5 rounded text-[10px]">
                        {ev.ageRange}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-3.5">
                    <h3 className="text-lg font-black text-[#063A25] hover:text-emerald-700 leading-snug font-heading">
                      {ev.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {ev.description}
                    </p>

                    <div className="space-y-1.5 text-[11px] text-slate-700 pt-2 border-t border-slate-100 font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#C5A021]" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-2 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A021] shrink-0" />
                        <span className="truncate text-slate-600">{ev.locationAddress}</span>
                      </div>
                    </div>

                    {/* Spots left indicator */}
                    <div className="flex items-center justify-between text-xs pt-2">
                      <div className="flex items-center gap-1 text-slate-700 font-semibold">
                        <Users className="w-3.5 h-3.5 text-[#063A25]" />
                        <span>{spotsRemaining} spaces open</span>
                      </div>
                      <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-[#C5A021] h-full rounded-full"
                          style={{ width: `${Math.min(100, (ev.registeredSpots / ev.totalSpots) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RSVP Action */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <button
                    id={`rsvp-event-btn-${ev.id}`}
                    onClick={() => openModal('event-rsvp', ev)}
                    disabled={isFull}
                    className={`w-full py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md ${
                      isFull 
                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        : 'bg-[#063A25] hover:bg-[#094D32] text-white border border-[#C5A021]/50'
                    }`}
                  >
                    <span>{isFull ? 'Event at Capacity' : 'RSVP Free Family Spot'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFD700]" />
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

