import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Sparkles, Lock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DonationModal: React.FC = () => {
  const { activeModal, activeModalData, closeModal, submitDonation, siteSettings } = useApp();

  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [amount, setAmount] = useState<number>(activeModalData?.defaultAmount || 50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'One-Time' | 'Monthly'>('One-Time');
  const [allocatedTo, setAllocatedTo] = useState<any>(activeModalData?.defaultAllocation || 'General Educational Fund');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (activeModal !== 'donate') return null;

  const presetAmounts = [25, 50, 100, 150, 250];

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    const num = parseFloat(e.target.value);
    if (!isNaN(num) && num > 0) {
      setAmount(num);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorEmail || amount <= 0) return;

    submitDonation({
      donorName: isAnonymous ? 'Anonymous Supporter' : (donorName || 'Community Supporter'),
      donorEmail,
      amount,
      frequency,
      allocatedTo,
      message,
      isAnonymous
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
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <Heart className="w-8 h-8 fill-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Thank You for Your Generosity!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Your contribution of <strong>${amount} ({frequency})</strong> to the <strong>{allocatedTo}</strong> ensures children in our community have the supplies and mentorship they need to shine.
            </p>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-[11px] text-slate-500 max-w-xs mx-auto">
              A charitable tax receipt has been sent to <strong>{donorEmail}</strong>.
            </div>
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
              <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200 mb-2">
                <Heart className="w-3.5 h-3.5 fill-rose-600" />
                <span>Support Polaris Academy Hub</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                Give Every Child a Chance to Shine
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Your 100% tax-deductible gift funds scholarships, science materials, and arts supplies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Frequency toggle */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFrequency('One-Time')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    frequency === 'One-Time' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('Monthly')}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    frequency === 'Monthly' ? 'bg-[#0B1B3D] text-amber-400 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Monthly Champion ⭐
                </button>
              </div>

              {/* Preset Amounts */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">Select Donation Amount</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handlePresetClick(preset)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        amount === preset && !customAmount
                          ? 'bg-[#0B1B3D] text-amber-400 border-[#0B1B3D] shadow-sm'
                          : 'bg-white border-slate-300 text-slate-800 hover:border-amber-400'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>

                <div className="mt-2">
                  <input
                    type="number"
                    min={5}
                    placeholder="Or enter custom amount ($)"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Allocation Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Direct Your Contribution</label>
                <select
                  value={allocatedTo}
                  onChange={(e) => setAllocatedTo(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="General Educational Fund">General Educational Fund (Where Needed Most)</option>
                  <option value="Child Scholarship Fund">Child Scholarship Fund ($150 full term sponsorship)</option>
                  <option value="STEM & Robotics Lab">STEM, Robotics & Coding Hardware Kits</option>
                  <option value="Arts & Music Materials">Arts, Ballet & Musical Instruments</option>
                </select>
              </div>

              {/* Donor Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Jordan Miller"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    disabled={isAnonymous}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Email for Receipt *</label>
                  <input
                    type="email"
                    required
                    placeholder="donor@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anon-check"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="anon-check" className="text-xs text-slate-600">
                  Keep my name anonymous on community donor listings
                </label>
              </div>

              {/* Security Banner */}
              <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>256-bit encrypted demonstration checkout. No actual credit card charge.</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs shadow-md transition-transform active:scale-95"
                >
                  Donate ${amount} {frequency === 'Monthly' && '/mo'}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
