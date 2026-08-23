import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Plus, 
  Star, 
  Calendar, 
  Award, 
  Lock, 
  Clock, 
  FileText, 
  Printer, 
  Sparkles,
  CheckCircle2,
  Trash2,
  Settings,
  Mail
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AgeGroup, ChildProfile } from '../../types';

export const ParentDashboard: React.FC = () => {
  const { 
    childProfiles, 
    activeChild, 
    setActiveChild, 
    addChildProfile, 
    registrations, 
    resources, 
    openModal, 
    showToast,
    triggerConfettiCelebration
  } = useApp();

  const [isAddingChild, setIsAddingChild] = useState(false);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newAge, setNewAge] = useState<number>(7);
  const [newAvatar, setNewAvatar] = useState('⭐');
  const [newInterests, setNewInterests] = useState('STEM & Robotics, Drawing');

  // Certificate Modal State
  const [showCertModal, setShowCertModal] = useState(false);

  const avatars = ['🚀', '🎨', '🔬', '⭐', '🦁', '🦄', '🐬', '🤖', '👑', '🎸'];

  const handleCreateChild = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFirstName) return;

    let group: AgeGroup = '6-8';
    if (newAge <= 5) group = '3-5';
    else if (newAge >= 9) group = '9-12';

    addChildProfile({
      firstName: newFirstName,
      lastName: newLastName || 'Explorer',
      age: Number(newAge),
      ageGroup: group,
      avatar: newAvatar,
      interests: newInterests.split(',').map(s => s.trim()),
      enrolledProgramIds: []
    });

    setIsAddingChild(false);
    setNewFirstName('');
    setNewLastName('');
    triggerConfettiCelebration();
  };

  const currentChild = activeChild || childProfiles[0];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-[#0B1B3D] rounded-3xl p-8 sm:p-10 text-white border border-amber-400/20 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Private Guardian Management Suite</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
              Guardian Portal & Learning Milestones
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Manage your child explorer profiles, review weekly attendance, track completed interactive challenges, and download graduation certificates.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsAddingChild(true)}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Add Child Profile</span>
            </button>
            <button
              onClick={() => openModal('registration')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Enroll in Class</span>
            </button>
          </div>
        </div>

        {/* Add Child Form Drawer */}
        {isAddingChild && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-400 shadow-xl animate-in fade-in space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Create New Child Explorer Profile
              </h3>
              <button
                onClick={() => setIsAddingChild(false)}
                className="text-xs text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕ Cancel
              </button>
            </div>

            <form onSubmit={handleCreateChild} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Jenkins"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Age (3–12) *</label>
                  <input
                    type="number"
                    min={3}
                    max={12}
                    required
                    value={newAge}
                    onChange={(e) => setNewAge(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Choose Explorer Avatar</label>
                <div className="flex gap-2 flex-wrap">
                  {avatars.map(av => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setNewAvatar(av)}
                      className={`w-10 h-10 rounded-xl text-xl border transition-all flex items-center justify-center ${
                        newAvatar === av ? 'border-amber-500 bg-amber-50 scale-110 shadow-xs' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Primary Interests (comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g. STEM, Ballet, Scratch Coding, Piano"
                  value={newInterests}
                  onChange={(e) => setNewInterests(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingChild(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2 rounded-xl text-xs hover:bg-[#163273]"
                >
                  Save Child Profile
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Children Profile Switcher Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {childProfiles.map(child => (
            <button
              key={child.id}
              onClick={() => setActiveChild(child)}
              className={`p-4 rounded-3xl border-2 text-left min-w-[200px] transition-all flex items-center gap-3.5 ${
                currentChild?.id === child.id
                  ? 'bg-white border-amber-400 shadow-lg scale-102'
                  : 'bg-slate-100/80 border-slate-200 text-slate-600 hover:bg-white'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-2xl flex items-center justify-center">
                {child.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{child.firstName}</div>
                <div className="text-[11px] text-slate-500">Age {child.age} • Track {child.ageGroup}</div>
                <div className="text-[10px] font-bold text-amber-600">⭐ {child.starsCount} Stars Earned</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Child Overview & Reports */}
        {currentChild && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Learning Progress & Completed Quests */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {currentChild.firstName}&apos;s Learning Progress
                    </h3>
                    <p className="text-xs text-slate-500">Developmental milestone tracking</p>
                  </div>
                  <button
                    onClick={() => setShowCertModal(true)}
                    className="bg-amber-100 text-amber-900 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 hover:bg-amber-200"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    <span>Print Certificate</span>
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-amber-600">{currentChild.starsCount}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Polaris Stars</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-blue-600">{currentChild.completedResourceIds.length}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Quests Completed</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-2xl font-black text-emerald-600">100%</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase">Attendance Rate</div>
                  </div>
                </div>

                {/* Completed Activities List */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-800">Completed Modules & Mentor Feedback:</div>
                  <div className="space-y-2">
                    {currentChild.completedResourceIds.map(resId => {
                      const res = resources.find(r => r.id === resId);
                      if (!res) return null;
                      return (
                        <div key={resId} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                          <div className="space-y-0.5">
                            <div className="font-bold text-slate-900">{res.title}</div>
                            <div className="text-[11px] text-slate-500">{res.category} • {res.format}</div>
                          </div>
                          <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Mastered</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Class Enrollments & Guardian Controls */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Active Enrolled Classes */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  Active Enrolled Classes (This Term)
                </h3>

                <div className="space-y-3">
                  {registrations
                    .filter(r => r.childName.toLowerCase().includes(currentChild.firstName.toLowerCase()))
                    .map(reg => (
                      <div key={reg.id} className="bg-blue-50/70 p-4 rounded-2xl border border-blue-200 space-y-2 text-xs">
                        <div className="flex items-center justify-between font-bold text-slate-900">
                          <span>{reg.programTitle}</span>
                          <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded">
                            {reg.status}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-700" />
                          <span>{reg.selectedSchedule}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          Registered: {reg.createdAt}
                        </div>
                      </div>
                    ))}
                </div>

                <button
                  onClick={() => openModal('registration', { childName: currentChild.firstName, childAge: currentChild.age })}
                  className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-colors"
                >
                  + Enroll in Additional Class
                </button>
              </div>

              {/* Privacy & Safety Settings */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Privacy & Communication Settings</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span>Weekly email progress reports</span>
                  <input type="checkbox" defaultChecked className="rounded text-amber-500" />
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span>SMS session reminder alerts</span>
                  <input type="checkbox" defaultChecked className="rounded text-amber-500" />
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Public student directory listing</span>
                  <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded">
                    Disabled (Privacy Protected)
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Achievement Certificate Modal */}
        {showCertModal && currentChild && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 sm:p-12 shadow-2xl border-4 border-amber-400 relative space-y-6 text-center">
              <button
                onClick={() => setShowCertModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-bold text-sm"
              >
                ✕
              </button>

              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                  Polaris Academy Hub • Certificate of Achievement
                </span>
                <h2 className="text-3xl font-black font-heading text-slate-900">
                  Star Explorer Honor Award
                </h2>
              </div>

              <p className="text-sm text-slate-600 font-serif italic max-w-md mx-auto">
                This certifies that <strong>{currentChild.firstName} {currentChild.lastName}</strong> has demonstrated outstanding curiosity, creativity, and leadership across hands-on learning quests.
              </p>

              <div className="flex items-center justify-center gap-6 py-3 font-mono text-xs text-slate-500 border-y border-dashed border-slate-200">
                <span>⭐ {currentChild.starsCount} Stars Collected</span>
                <span>•</span>
                <span>📅 Date: August 2026</span>
                <span>•</span>
                <span>✍️ Verified Educator Seal</span>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Formal Certificate</span>
                </button>
                <button
                  onClick={() => setShowCertModal(false)}
                  className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
