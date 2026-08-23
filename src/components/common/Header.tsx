import React, { useState } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  User, 
  Smile, 
  ShieldCheck, 
  Heart, 
  Phone, 
  Calendar, 
  BookOpen, 
  Layers, 
  Info, 
  Mail,
  ChevronRight,
  Sun,
  CalendarCheck
} from 'lucide-react';
import { useApp, CurrentPageView, UserRole } from '../../context/AppContext';

export const Header: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    userRole, 
    setUserRole, 
    siteSettings,
    openModal,
    activeChild
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  const navItems: { label: string; page: CurrentPageView; icon: React.FC<{ className?: string }> }[] = [
    { label: 'Home', page: 'home', icon: Sun },
    { label: 'Programs', page: 'programs', icon: Layers },
    { label: 'Learning Hub', page: 'learning-hub', icon: Sparkles },
    { label: 'Events', page: 'events', icon: Calendar },
    { label: 'About Us', page: 'about', icon: Info },
    { label: 'Contact', page: 'contact', icon: Mail },
  ];

  const handleNavClick = (page: CurrentPageView) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoleSwitch = (newRole: UserRole, targetPage?: CurrentPageView) => {
    setUserRole(newRole);
    setRoleMenuOpen(false);
    setMobileMenuOpen(false);
    if (targetPage) {
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#063A25]/95 backdrop-blur-md border-b border-[#C5A021]/30 text-white transition-all">
      {/* Top Announcement Bar (Emerald Green with Continuous Rolling Marquee) */}
      {siteSettings.announcementBanner.enabled && (
        <div className="bg-gradient-to-r from-[#032014] via-[#084C31] to-[#032014] text-white py-1.5 text-xs sm:text-sm font-medium shadow-inner overflow-hidden border-b border-[#C5A021]/30 relative group">
          <div className="animate-marquee-roll flex items-center whitespace-nowrap">
            {/* Block 1 */}
            <div className="flex items-center gap-8 px-4 shrink-0">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
                <span>{siteSettings.announcementBanner.text}</span>
              </span>
              <button 
                onClick={() => handleNavClick('programs')}
                className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold inline-flex items-center gap-1 transition-colors border border-white/30"
              >
                Explore Now &rarr;
              </button>
              <span className="text-[#C5A021]">•</span>
              <span className="text-emerald-100 font-semibold">✨ Hands-On STEM & Creative Arts for Ages 3–12</span>
              <span className="text-[#C5A021]">•</span>
              <span className="text-amber-200">🚀 Small Group Mentorship (1:8 Ratio)</span>
              <span className="text-[#C5A021]">•</span>
            </div>

            {/* Block 2 (Duplicate for seamless continuous roll) */}
            <div className="flex items-center gap-8 px-4 shrink-0" aria-hidden="true">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-pulse" />
                <span>{siteSettings.announcementBanner.text}</span>
              </span>
              <button 
                onClick={() => handleNavClick('programs')}
                className="bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold inline-flex items-center gap-1 transition-colors border border-white/30"
              >
                Explore Now &rarr;
              </button>
              <span className="text-[#C5A021]">•</span>
              <span className="text-emerald-100 font-semibold">✨ Hands-On STEM & Creative Arts for Ages 3–12</span>
              <span className="text-[#C5A021]">•</span>
              <span className="text-amber-200">🚀 Small Group Mentorship (1:8 Ratio)</span>
              <span className="text-[#C5A021]">•</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Brand Logo & Title */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus:ring-2 focus:ring-[#C5A021] rounded-2xl p-1 shrink-0"
          >
            {/* Polaris Star Logo Image Container */}
            <div className="w-13 h-13 sm:w-16 sm:h-16 p-1 bg-white rounded-2xl shadow-xl shadow-black/40 ring-2 ring-[#C5A021] group-hover:ring-[#D4AF37] group-hover:scale-105 transition-all flex items-center justify-center shrink-0">
              <img 
                src="https://i.imgur.com/cmcwMit.jpeg" 
                alt="Polaris Academy Hub Logo" 
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-white font-heading leading-tight group-hover:text-amber-300 transition-colors">
                POLARIS
              </span>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#C5A021] leading-tight">
                Academy Hub
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-amber-400 bg-white/10 font-semibold shadow-xs' 
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Hub */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=40157348"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl border border-white/30 transition-all flex items-center gap-1.5"
            >
              <CalendarCheck className="w-4 h-4 text-[#FFD700]" />
              <span>Book Appointment</span>
            </a>
            <button
              onClick={() => handleNavClick('programs')}
              className="bg-gradient-to-r from-[#C5A021] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#FFD700] text-slate-950 text-xs sm:text-sm font-black px-4 py-2 rounded-xl shadow-md transition-all"
            >
              Explore Programs
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#042417] border-b border-[#C5A021]/30 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="space-y-1 py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-400 font-semibold'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-amber-400/80" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=40157348"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#C5A021] text-slate-950 font-bold py-2.5 px-4 rounded-xl text-sm shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => handleRoleSwitch('admin', 'admin')}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>Admin Management Suite</span>
              </button>
              <span className="text-[11px] text-amber-400/80 font-mono">Ages 3–12</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
