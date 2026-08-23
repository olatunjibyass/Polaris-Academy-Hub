import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, Clock, User, Phone, Mail, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RegistrationModal: React.FC = () => {
  const { activeModal, activeModalData, closeModal, registerForProgram, programs, siteSettings } = useApp();

  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState(7);
  const [selectedProgramId, setSelectedProgramId] = useState(activeModalData?.programId || programs[0]?.id || '');
  const [selectedSchedule, setSelectedSchedule] = useState('Tuesday: 4:00 PM – 5:30 PM');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (activeModal !== 'registration') return null;

  const currentProgram = programs.find(p => p.id === selectedProgramId) || programs[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentEmail || !childName) return;

    registerForProgram({
      parentName,
      parentEmail,
      parentPhone: parentPhone || '(555) 000-0000',
      childName,
      childAge: Number(childAge),
      programId: currentProgram.id,
      programTitle: currentProgram.title,
      selectedSchedule,
      emergencyContact: emergencyContact || parentName,
      notes
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                We have registered <strong>{childName}</strong> for <strong>{currentProgram.title}</strong> ({selectedSchedule}). A confirmation receipt has been dispatched to <strong>{parentEmail}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="font-bold text-slate-800 text-sm">Session Details</div>
              <div className="text-slate-600">📍 Polaris Academy Hub (80 S Liberty Street, Powell, OH 43065)</div>
              <div className="text-slate-600">⏰ {selectedSchedule}</div>
            </div>

            <button
              onClick={closeModal}
              className="bg-[#0B1B3D] text-amber-400 font-bold px-8 py-3 rounded-xl text-xs hover:bg-[#163273] transition-colors"
            >
              Done & Return to Hub
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Title */}
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Program Enrollment Form</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                Register Your Child
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Polaris Academy Hub programs are 100% accessible to community youth. No fees required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Selected Educational Program
                </label>
                <select
                  value={selectedProgramId}
                  onChange={(e) => setSelectedProgramId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                >
                  {programs.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.ageRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Schedule Slot Selector from flyer options */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Choose Preferred Weekly Session Slot
                </label>
                <select
                  value={selectedSchedule}
                  onChange={(e) => setSelectedSchedule(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                >
                  <option value="Tuesday: 4:00 PM – 5:30 PM">Tuesday: 4:00 PM – 5:30 PM (Starlight Room A)</option>
                  <option value="Tuesday: 5:30 PM – 7:00 PM">Tuesday: 5:30 PM – 7:00 PM (Robotics & AI Lab)</option>
                  <option value="Thursday: 4:00 PM – 5:30 PM">Thursday: 4:00 PM – 5:30 PM (Harmonics Studio)</option>
                  <option value="Thursday: 5:30 PM – 7:00 PM">Thursday: 5:30 PM – 7:00 PM (Dance & Movement)</option>
                  <option value="Saturday: 9:00 AM – 10:00 AM">Saturday: 9:00 AM – 10:00 AM (Early Discovery Hall)</option>
                  <option value="Saturday: 10:00 AM – 11:00 AM">Saturday: 10:00 AM – 11:00 AM (Makerspace & Studio)</option>
                </select>
              </div>

              {/* Child Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Child’s First & Last Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Leo Jenkins"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Child’s Age (3–12) *</label>
                  <input
                    type="number"
                    min={3}
                    max={12}
                    required
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Parent Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Guardian Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="guardian@example.com"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Emergency Contact & Phone</label>
                  <input
                    type="text"
                    placeholder="Name & contact number"
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Special Learning Notes / Accommodations */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Interests, Allergies or Learning Accommodations (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what excites your child or any special learning considerations..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Child privacy guarantee: Data is encrypted and used exclusively for class roster coordination.
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0B1B3D] hover:bg-[#163273] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-colors"
                >
                  Confirm Free Enrollment
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};
