import React, { useState } from 'react';
import { X, Users, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VolunteerApplication } from '../../types';

export const VolunteerModal: React.FC = () => {
  const { activeModal, closeModal, submitVolunteerApplication } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roleInterest, setRoleInterest] = useState<VolunteerApplication['roleInterest']>('STEM & Coding Instructor');
  const [availability, setAvailability] = useState('Tuesday afternoons & Saturday mornings');
  const [experienceSummary, setExperienceSummary] = useState('');
  const [backgroundConsent, setBackgroundConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (activeModal !== 'volunteer') return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !backgroundConsent) return;

    submitVolunteerApplication({
      name,
      email,
      phone,
      roleInterest,
      availability,
      experienceSummary
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
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Application Received!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>! Our volunteer coordinator will review your background and reach out to <strong>{email}</strong> within 2 business days for a brief introductory interview.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#0B1B3D] text-amber-400 font-bold px-8 py-2.5 rounded-xl text-xs hover:bg-[#163273] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200 mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Join Our Mentor Community</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                Volunteer With Polaris
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Share your skills with passionate young explorers ages 3–12.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rebecca Alvarez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rebecca@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Volunteer Role Interest *</label>
                <select
                  value={roleInterest}
                  onChange={(e) => setRoleInterest(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="STEM & Coding Instructor">STEM & Coding Instructor / Assistant</option>
                  <option value="Mentor / Tutor">Homework Tutor & Academic Mentor</option>
                  <option value="Arts & Music Assistant">Arts, Ballet & Music Assistant</option>
                  <option value="Event Coordinator">Community Events & Discovery Day Coordinator</option>
                  <option value="General Volunteer">General Hub Volunteer & Family Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Weekly Availability</label>
                <input
                  type="text"
                  placeholder="e.g. Tuesday 4-7 PM, Saturday mornings"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Brief Background / Why You Want to Help</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your background, experience with children, or relevant skills..."
                  value={experienceSummary}
                  onChange={(e) => setExperienceSummary(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="bg-consent"
                  required
                  checked={backgroundConsent}
                  onChange={(e) => setBackgroundConsent(e.target.checked)}
                  className="mt-0.5 rounded text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="bg-consent" className="text-[11px] text-slate-600 leading-snug">
                  I understand that because Polaris Academy Hub works with children ages 3–12, all volunteers must complete a standard background screening and adhere to the Child Safety Charter. *
                </label>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!backgroundConsent}
                  className="bg-[#0B1B3D] hover:bg-[#163273] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs disabled:opacity-40 transition-colors shadow-sm"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
