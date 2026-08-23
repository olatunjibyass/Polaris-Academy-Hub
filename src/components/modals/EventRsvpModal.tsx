import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EventRsvpModal: React.FC = () => {
  const { activeModal, activeModalData, closeModal, registerForEvent } = useApp();

  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [numAttendees, setNumAttendees] = useState(2);
  const [childrenAges, setChildrenAges] = useState('6, 8');
  const [submitted, setSubmitted] = useState(false);

  if (activeModal !== 'event-rsvp' || !activeModalData) return null;

  const event = activeModalData;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) return;

    registerForEvent({
      eventId: event.id,
      eventTitle: event.title,
      attendeeName,
      attendeeEmail,
      numAttendees: Number(numAttendees),
      childrenAges
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
        
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              RSVP Confirmed!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              We have reserved <strong>{numAttendees} spot(s)</strong> for <strong>{event.title}</strong> on <strong>{event.date}</strong>. A confirmation email has been sent to <strong>{attendeeEmail}</strong>.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#163273] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free Event RSVP</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {event.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-2 font-mono">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>{event.date} ({event.time})</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{event.locationAddress}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Parent / Attendee Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Santos"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="maria@example.com"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Total Attendees</label>
                  <input
                    type="number"
                    min={1}
                    max={8}
                    required
                    value={numAttendees}
                    onChange={(e) => setNumAttendees(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Children Ages</label>
                  <input
                    type="text"
                    placeholder="e.g. 5, 8"
                    value={childrenAges}
                    onChange={(e) => setChildrenAges(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0B1B3D] text-amber-400 font-bold px-5 py-2 rounded-xl text-xs hover:bg-[#163273] transition-colors"
                >
                  Confirm Free RSVP
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
