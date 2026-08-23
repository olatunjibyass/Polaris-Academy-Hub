import React from 'react';
import { 
  Heart, 
  Users, 
  Building2, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Gift
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GetInvolvedView: React.FC = () => {
  const { openModal } = useApp();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white border border-amber-400/20 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-amber-300" />
              <span>Nonprofit Community Empowerment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Get Involved with Polaris Academy Hub
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We rely on generous patrons, corporate sponsors, passionate volunteers, and community schools to bring barrier-free, high-quality education to children across our region.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Community Participation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Donate */}
          <div className="bg-white rounded-3xl p-8 border-2 border-rose-100 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-6 h-6 fill-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Make a Tax-Deductible Donation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your financial support directly purchases robotics kits, art canvases, musical instruments, and covers classroom operational costs. All contributions receive a registered 501(c)(3) tax receipt.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>$25:</strong> Provides 1 set of beginner watercolor supplies & sketchbooks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>$50:</strong> Funds 1 robotics microcontroller kit for young coders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>$150:</strong> Full scholarship for 1 child for an entire semester
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModal('donate')}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Donate Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 2. Volunteer & Teach */}
          <div className="bg-white rounded-3xl p-8 border-2 border-blue-100 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-heading">
                Volunteer or Mentor
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you are a software engineer, artist, high school honor student, or retired educator, your mentorship can ignite a child&apos;s lifelong curiosity.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>STEM & Coding Mentors:</strong> Guide Scratch, Python, and Lego robotics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>Arts & Music Assistants:</strong> Help with piano keys, dance steps, painting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <strong>Discovery Day Crew:</strong> Assist family check-in and stage coordination
                </li>
              </ul>
            </div>

            <button
              onClick={() => openModal('volunteer')}
              className="w-full bg-[#0B1B3D] hover:bg-[#163273] text-amber-400 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>Apply to Volunteer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Institutional Partnerships Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Institutional & Corporate Partnerships</h3>
              <p className="text-xs text-slate-500">Collaborate with Polaris Academy Hub on community enrichment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">School Districts & Libraries</strong>
              <p>We co-host afterschool enrichment workshops, loan STEM maker kits, and provide complimentary field trip sessions.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">Corporate Social Responsibility</strong>
              <p>Match employee donations, sponsor an entire lab classroom, or organize corporate volunteer teaching days.</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">Community Foundations</strong>
              <p>Partner with us on targeted educational equity grants ensuring children in underserved zip codes receive full access.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
