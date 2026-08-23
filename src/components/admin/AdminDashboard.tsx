import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Heart, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Search, 
  Download, 
  Trash2, 
  Eye,
  DollarSign,
  UserCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgramRegistration, VolunteerApplication, DonationRecord } from '../../types';

export const AdminDashboard: React.FC = () => {
  const { 
    registrations, 
    updateRegistrationStatus, 
    volunteerApplications, 
    updateVolunteerStatus, 
    donations, 
    programs, 
    events, 
    resources,
    showToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'registrations' | 'volunteers' | 'donations' | 'events'>('registrations');
  const [searchQuery, setSearchQuery] = useState('');

  // Total metrics
  const totalDonations = donations.reduce((sum, d) => sum + d.amount, 0);
  const totalEnrollments = registrations.length;
  const totalVolunteers = volunteerApplications.length;

  return (
    <div className="py-12 bg-slate-100 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 border border-slate-700 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase px-2.5 py-0.5 rounded-full border border-amber-400/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Nonprofit Administration Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Polaris Academy Hub Management Suite
            </h1>
            <p className="text-xs text-slate-300">
              Live monitoring of program enrollments, community volunteer approvals, and donor contributions.
            </p>
          </div>

          <div className="text-xs text-right bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-700">
            <span className="text-slate-400 block font-mono">System Mode:</span>
            <span className="text-emerald-400 font-bold">● Active Demonstration Live</span>
          </div>
        </div>

        {/* 4 Metric KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Program Enrollments</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">{totalEnrollments}</div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <span>↑ 100% capacity filled</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Community Donations</span>
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5 fill-rose-600" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">${totalDonations.toLocaleString()}</div>
            <div className="text-[11px] text-rose-700 font-semibold">
              <span>{donations.length} total supporters</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Volunteer Candidates</span>
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">{totalVolunteers}</div>
            <div className="text-[11px] text-purple-700 font-semibold">
              <span>Mentors & Lab Aides</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">Hub Resources</span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">{resources.length}</div>
            <div className="text-[11px] text-amber-700 font-semibold">
              <span>Interactive Quests & Labs</span>
            </div>
          </div>

        </div>

        {/* Tab Navigation */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-xs flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('registrations')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'registrations'
                ? 'bg-[#0B1B3D] text-amber-400 shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Program Enrollments ({registrations.length})
          </button>
          <button
            onClick={() => setActiveTab('volunteers')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'volunteers'
                ? 'bg-[#0B1B3D] text-amber-400 shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Volunteer Applications ({volunteerApplications.length})
          </button>
          <button
            onClick={() => setActiveTab('donations')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'donations'
                ? 'bg-[#0B1B3D] text-amber-400 shadow-xs'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            Donations Ledger (${totalDonations})
          </button>
        </div>

        {/* 1. REGISTRATIONS TABLE */}
        {activeTab === 'registrations' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between gap-4">
              <h3 className="text-base font-bold text-slate-900">
                Child Class Enrollments & Rosters
              </h3>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search child or parent name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Child Name & Age</th>
                    <th className="p-4">Program & Schedule</th>
                    <th className="p-4">Parent / Contact</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {registrations
                    .filter(r => 
                      searchQuery === '' || 
                      r.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      r.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      r.programTitle.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(reg => (
                      <tr key={reg.id} className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">
                          {reg.childName} <span className="text-slate-500 font-normal">(Age {reg.childAge})</span>
                        </td>
                        <td className="p-4">
                          <div className="font-semibold text-blue-900">{reg.programTitle}</div>
                          <div className="text-[11px] text-slate-500 font-mono">{reg.selectedSchedule}</div>
                        </td>
                        <td className="p-4">
                          <div>{reg.parentName}</div>
                          <div className="text-[11px] text-slate-500">{reg.parentEmail} • {reg.parentPhone}</div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            reg.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' :
                            reg.status === 'Waitlisted' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'
                          }`}>
                            {reg.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-1">
                          <button
                            onClick={() => {
                              updateRegistrationStatus(reg.id, 'Confirmed');
                              showToast(`Confirmed enrollment for ${reg.childName}`, 'success');
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-1 rounded-lg text-[10px]"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => {
                              updateRegistrationStatus(reg.id, 'Waitlisted');
                              showToast(`Waitlisted enrollment for ${reg.childName}`, 'info');
                            }}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-2.5 py-1 rounded-lg text-[10px]"
                          >
                            Waitlist
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 2. VOLUNTEERS APPLICATIONS */}
        {activeTab === 'volunteers' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                Volunteer Mentorship & Teaching Applications
              </h3>
            </div>

            <div className="divide-y divide-slate-100">
              {volunteerApplications.map(vol => (
                <div key={vol.id} className="p-5 hover:bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{vol.name}</span>
                      <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded text-[10px]">
                        {vol.roleInterest}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        vol.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {vol.status}
                      </span>
                    </div>
                    <div className="text-slate-600">
                      📧 {vol.email} • 📞 {vol.phone} • ⏰ Availability: {vol.availability}
                    </div>
                    <p className="text-slate-700 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      &ldquo;{vol.experienceSummary}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        updateVolunteerStatus(vol.id, 'Approved');
                        showToast(`Approved volunteer ${vol.name}`, 'success');
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs"
                    >
                      Approve & Onboard
                    </button>
                    <button
                      onClick={() => {
                        updateVolunteerStatus(vol.id, 'Contacted');
                        showToast(`Marked ${vol.name} as contacted`, 'info');
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-3 py-2 rounded-xl text-xs"
                    >
                      Mark Contacted
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. DONATIONS LEDGER */}
        {activeTab === 'donations' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-base font-bold text-slate-900">
                Community Contributions Ledger
              </h3>
              <div className="text-xs font-bold text-slate-600">
                Total Fund: <span className="text-emerald-600 font-black">${totalDonations}</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Donor Name</th>
                    <th className="p-4">Amount & Frequency</th>
                    <th className="p-4">Fund Allocation</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {donations.map(don => (
                    <tr key={don.id} className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">
                        {don.donorName}
                        <div className="text-[11px] text-slate-500 font-normal">{don.donorEmail}</div>
                      </td>
                      <td className="p-4 font-bold text-emerald-700">
                        ${don.amount} <span className="text-slate-500 font-normal">({don.frequency})</span>
                      </td>
                      <td className="p-4 text-slate-700">
                        {don.allocatedTo}
                      </td>
                      <td className="p-4 text-slate-500 font-mono">
                        {don.createdAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
