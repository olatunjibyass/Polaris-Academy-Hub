import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Mail, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const InstructorsView: React.FC = () => {
  const { instructors, openModal } = useApp();

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white border border-amber-400/20 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Certified Mentors & Educators</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Meet Our Inspiring Instructors
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every educator at Polaris Academy Hub brings both professional mastery in their field and a deep, patient passion for nurturing young children. All staff are thoroughly background-screened and certified in positive child development.
            </p>
          </div>
        </div>

        {/* Safety Guarantee Strip */}
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-950 text-xs">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>100% Background-Checked • CPR & First Aid Certified • Certified Youth Mentors</span>
          </div>
          <button
            onClick={() => openModal('volunteer')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs shrink-0 transition-colors"
          >
            Apply to Teach or Mentor
          </button>
        </div>

        {/* Instructors Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((ins) => (
            <div
              key={ins.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={ins.photo}
                    alt={ins.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-sm">
                    {ins.specialty}
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[11px] text-amber-300 font-bold block">{ins.yearsExperience}+ Years Experience</span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{ins.name}</h3>
                  <div className="text-xs font-semibold text-blue-700">{ins.role}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{ins.bio}</p>

                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase text-slate-400">Credentials & Background:</div>
                    <div className="text-[11px] text-slate-700 font-medium">🎓 {ins.education}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Active Hub Instructor</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
