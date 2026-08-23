import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import confetti from 'canvas-confetti';
import { 
  Program, 
  Resource, 
  EventItem, 
  Instructor, 
  BlogPost, 
  ChildProfile, 
  SiteSettings, 
  ProgramRegistration, 
  EventRegistration, 
  VolunteerApplication, 
  DonationRecord, 
  ContactMessage,
  AgeGroup,
  ProgramCategory,
  ResourceCategory
} from '../types';
import { 
  initialSiteSettings, 
  initialPrograms, 
  initialResources, 
  initialEvents, 
  initialInstructors, 
  initialBlogPosts, 
  initialChildProfiles, 
  initialRegistrations, 
  initialVolunteers, 
  initialDonations 
} from '../data/initialData';

export type UserRole = 'guest' | 'parent' | 'kid' | 'admin';

export type CurrentPageView = 
  | 'home'
  | 'programs'
  | 'learning-hub'
  | 'events'
  | 'resources'
  | 'about'
  | 'instructors'
  | 'blog'
  | 'get-involved'
  | 'contact'
  | 'parent-portal'
  | 'kids-zone'
  | 'admin';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  title?: string;
}

interface AppContextType {
  // Navigation & Role
  currentPage: CurrentPageView;
  setCurrentPage: (page: CurrentPageView) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  selectedAgeFilter: AgeGroup;
  setSelectedAgeFilter: (age: AgeGroup) => void;
  
  // Data lists
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  programs: Program[];
  updateProgram: (program: Program) => void;
  addProgram: (program: Program) => void;
  deleteProgram: (id: string) => void;
  
  resources: Resource[];
  addResource: (resource: Resource) => void;
  updateResource: (resource: Resource) => void;
  deleteResource: (id: string) => void;
  
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  updateEvent: (event: EventItem) => void;
  deleteEvent: (id: string) => void;
  
  instructors: Instructor[];
  addInstructor: (instructor: Instructor) => void;
  updateInstructor: (instructor: Instructor) => void;
  toggleInstructorApproval: (id: string) => void;
  
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  
  // Registrations & Community
  registrations: ProgramRegistration[];
  registerForProgram: (regData: Omit<ProgramRegistration, 'id' | 'registeredAt' | 'status'>) => void;
  eventRegistrations: EventRegistration[];
  registerForEvent: (eventReg: Omit<EventRegistration, 'id' | 'registeredAt'>) => void;
  
  volunteers: VolunteerApplication[];
  submitVolunteerApplication: (app: Omit<VolunteerApplication, 'id' | 'submittedAt' | 'status'>) => void;
  updateVolunteerStatus: (id: string, status: VolunteerApplication['status']) => void;
  
  donations: DonationRecord[];
  submitDonation: (donation: Omit<DonationRecord, 'id' | 'donatedAt'>) => void;
  
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => void;
  
  // Kid Mode & Parent Profiles
  childProfiles: ChildProfile[];
  activeChildId: string;
  setActiveChildId: (id: string) => void;
  activeChild: ChildProfile | undefined;
  addChildProfile: (child: Omit<ChildProfile, 'id' | 'completedResourceIds' | 'enrolledProgramIds' | 'earnedBadges' | 'starsCount' | 'streakDays' | 'completedMinutesThisWeek'>) => void;
  updateChildProfile: (id: string, updates: Partial<ChildProfile>) => void;
  completeResourceForChild: (childId: string, resourceId: string, starsBonus?: number) => void;
  triggerConfettiCelebration: () => void;
  
  // Modals & UI States
  activeModal: 'registration' | 'event-rsvp' | 'resource-player' | 'donate' | 'volunteer' | 'schedule-info' | null;
  activeModalData: any;
  openModal: (modal: 'registration' | 'event-rsvp' | 'resource-player' | 'donate' | 'volunteer' | 'schedule-info', data?: any) => void;
  closeModal: () => void;
  
  // Toast notifications
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning' | 'error', title?: string) => void;
  dismissToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State persistence helpers
  const [currentPage, setCurrentPage] = useState<CurrentPageView>('home');
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [selectedAgeFilter, setSelectedAgeFilter] = useState<AgeGroup>('All Ages');
  
  // Local storage hydrations
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('polaris_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.address || parsed.address.includes('North Star') || parsed.address.includes('[OFFICIAL ADDRESS]')) {
          parsed.address = '80 S Liberty Street, Powell, OH 43065';
        }
        if (!parsed.phone || parsed.phone.includes('765-2747') || parsed.phone.includes('[OFFICIAL PHONE]')) {
          parsed.phone = '(614) 296-3599';
        }
        if (!parsed.email || parsed.email.includes('hello@polarisacademyhub.org')) {
          parsed.email = 'Polarisacademyhub@gmail.com';
        }
        if (!parsed.secondaryPhone) {
          parsed.secondaryPhone = '(614) 401-6775';
        }
        if (!parsed.operatingHours) {
          parsed.operatingHours = 'Tues & Thurs: 4:00 PM – 7:00 PM | Sat: 9:00 AM – 11:00 AM';
        }
        return { ...initialSiteSettings, ...parsed };
      } catch {
        return initialSiteSettings;
      }
    }
    return initialSiteSettings;
  });

  const [programs, setPrograms] = useState<Program[]>(() => {
    const saved = localStorage.getItem('polaris_programs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((p: Program) => {
          if (p.id === 'stem-ai-coding' && (!p.bannerImage || p.bannerImage.includes('unsplash.com/photo-1581092918056'))) {
            return { ...p, bannerImage: 'https://i.imgur.com/XJmmc5B.jpeg' };
          }
          if (p.id === 'ballet-dance' && (!p.bannerImage || p.bannerImage.includes('unsplash.com/photo-1508700115892') || p.bannerImage.includes('81RWFc9m'))) {
            return { ...p, bannerImage: 'https://i.imgur.com/bP54wb0.jpeg' };
          }
          if (p.id === 'academic-support' && (!p.bannerImage || p.bannerImage.includes('unsplash.com/photo-1503676260728') || p.bannerImage.includes('fWfDmnZm'))) {
            return { ...p, bannerImage: 'https://i.imgur.com/VKqsl7H.jpeg' };
          }
          if (p.id === 'arts-creativity' && (!p.bannerImage || p.bannerImage.includes('unsplash.com/photo-1513364776144') || p.bannerImage.includes('02Z5RgBk'))) {
            return { ...p, bannerImage: 'https://i.imgur.com/fZWhiTM.jpeg' };
          }
          if (p.id === 'music-instruments' && (!p.bannerImage || p.bannerImage.includes('unsplash.com/photo-1511671782779'))) {
            return { ...p, bannerImage: 'https://i.imgur.com/GXE0qA6.jpeg' };
          }
          return p;
        });
      } catch {
        return initialPrograms;
      }
    }
    return initialPrograms;
  });

  const [resources, setResources] = useState<Resource[]>(() => {
    const saved = localStorage.getItem('polaris_resources');
    return saved ? JSON.parse(saved) : initialResources;
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('polaris_events');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((e: EventItem) => {
          if (e.id === 'event-robotics-steam-day' && (!e.bannerImage || e.bannerImage.includes('unsplash.com/photo-1581092918056'))) {
            return { ...e, bannerImage: 'https://i.imgur.com/XJmmc5B.jpeg' };
          }
          if (e.id === 'event-ballet-open-house' && (!e.bannerImage || e.bannerImage.includes('unsplash.com/photo-1508700115892') || e.bannerImage.includes('81RWFc9m'))) {
            return { ...e, bannerImage: 'https://i.imgur.com/bP54wb0.jpeg' };
          }
          if (e.id === 'event-arts-gala' && (!e.bannerImage || e.bannerImage.includes('unsplash.com/photo-1513364776144') || e.bannerImage.includes('02Z5RgBk'))) {
            return { ...e, bannerImage: 'https://i.imgur.com/fZWhiTM.jpeg' };
          }
          return e;
        });
      } catch {
        return initialEvents;
      }
    }
    return initialEvents;
  });

  const [instructors, setInstructors] = useState<Instructor[]>(() => {
    const saved = localStorage.getItem('polaris_instructors');
    return saved ? JSON.parse(saved) : initialInstructors;
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('polaris_blogs');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((b: BlogPost) => {
          if (b.id === 'blog-3' && (!b.image || b.image.includes('unsplash.com/photo-1508700115892') || b.image.includes('81RWFc9m'))) {
            return { ...b, image: 'https://i.imgur.com/bP54wb0.jpeg' };
          }
          return b;
        });
      } catch {
        return initialBlogPosts;
      }
    }
    return initialBlogPosts;
  });

  const [childProfiles, setChildProfiles] = useState<ChildProfile[]>(() => {
    const saved = localStorage.getItem('polaris_children');
    return saved ? JSON.parse(saved) : initialChildProfiles;
  });

  const [activeChildId, setActiveChildId] = useState<string>(() => {
    return initialChildProfiles[0]?.id || '';
  });

  const [registrations, setRegistrations] = useState<ProgramRegistration[]>(() => {
    const saved = localStorage.getItem('polaris_registrations');
    return saved ? JSON.parse(saved) : initialRegistrations;
  });

  const [eventRegistrations, setEventRegistrations] = useState<EventRegistration[]>(() => {
    const saved = localStorage.getItem('polaris_event_regs');
    return saved ? JSON.parse(saved) : [];
  });

  const [volunteers, setVolunteers] = useState<VolunteerApplication[]>(() => {
    const saved = localStorage.getItem('polaris_volunteers');
    return saved ? JSON.parse(saved) : initialVolunteers;
  });

  const [donations, setDonations] = useState<DonationRecord[]>(() => {
    const saved = localStorage.getItem('polaris_donations');
    return saved ? JSON.parse(saved) : initialDonations;
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('polaris_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Modals & Toasts
  const [activeModal, setActiveModal] = useState<AppContextType['activeModal']>(null);
  const [activeModalData, setActiveModalData] = useState<any>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('polaris_settings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem('polaris_programs', JSON.stringify(programs));
  }, [programs]);

  useEffect(() => {
    localStorage.setItem('polaris_resources', JSON.stringify(resources));
  }, [resources]);

  useEffect(() => {
    localStorage.setItem('polaris_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('polaris_instructors', JSON.stringify(instructors));
  }, [instructors]);

  useEffect(() => {
    localStorage.setItem('polaris_children', JSON.stringify(childProfiles));
  }, [childProfiles]);

  useEffect(() => {
    localStorage.setItem('polaris_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('polaris_volunteers', JSON.stringify(volunteers));
  }, [volunteers]);

  useEffect(() => {
    localStorage.setItem('polaris_donations', JSON.stringify(donations));
  }, [donations]);

  const activeChild = childProfiles.find(c => c.id === activeChildId) || childProfiles[0];

  const showToast = (message: string, type: Toast['type'] = 'success', title?: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts(prev => [...prev, { id, type, message, title }]);
    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const triggerConfettiCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#3B82F6', '#8B5CF6', '#10B981', '#F59E0B']
      });
    } catch {
      // safe fallback
    }
  };

  const openModal = (modal: AppContextType['activeModal'], data?: any) => {
    setActiveModal(modal);
    setActiveModalData(data || null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setActiveModalData(null);
  };

  // Site Settings
  const updateSiteSettings = (newSettings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Platform settings updated successfully', 'success', 'Settings Saved');
  };

  // Programs
  const updateProgram = (prog: Program) => {
    setPrograms(prev => prev.map(p => p.id === prog.id ? prog : p));
    showToast(`Updated program: "${prog.title}"`, 'success');
  };

  const addProgram = (prog: Program) => {
    setPrograms(prev => [prog, ...prev]);
    showToast(`Added new program: "${prog.title}"`, 'success');
  };

  const deleteProgram = (id: string) => {
    setPrograms(prev => prev.filter(p => p.id !== id));
    showToast('Program removed', 'info');
  };

  // Resources
  const addResource = (res: Resource) => {
    setResources(prev => [res, ...prev]);
    showToast(`Published resource: "${res.title}"`, 'success');
  };

  const updateResource = (res: Resource) => {
    setResources(prev => prev.map(r => r.id === res.id ? res : r));
    showToast('Resource updated', 'success');
  };

  const deleteResource = (id: string) => {
    setResources(prev => prev.filter(r => r.id !== id));
    showToast('Resource removed', 'info');
  };

  // Events
  const addEvent = (ev: EventItem) => {
    setEvents(prev => [ev, ...prev]);
    showToast(`Created event: "${ev.title}"`, 'success');
  };

  const updateEvent = (ev: EventItem) => {
    setEvents(prev => prev.map(e => e.id === ev.id ? ev : e));
    showToast('Event updated', 'success');
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    showToast('Event removed', 'info');
  };

  // Instructors
  const addInstructor = (inst: Instructor) => {
    setInstructors(prev => [...prev, inst]);
    showToast(`Instructor profile submitted for ${inst.name}`, 'info', 'Profile Received');
  };

  const updateInstructor = (inst: Instructor) => {
    setInstructors(prev => prev.map(i => i.id === inst.id ? inst : i));
    showToast(`Instructor ${inst.name} updated`, 'success');
  };

  const toggleInstructorApproval = (id: string) => {
    setInstructors(prev => prev.map(inst => {
      if (inst.id === id) {
        const approved = !inst.approved;
        showToast(`${inst.name} is now ${approved ? 'Approved & Visible' : 'Pending Approval'}`, approved ? 'success' : 'info');
        return { ...inst, approved };
      }
      return inst;
    }));
  };

  // Blogs
  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
    showToast('Blog article published', 'success');
  };

  // Registrations
  const registerForProgram = (regData: Omit<ProgramRegistration, 'id' | 'registeredAt' | 'status'>) => {
    const newReg: ProgramRegistration = {
      ...regData,
      id: 'reg-' + Date.now().toString().slice(-6),
      registeredAt: new Date().toISOString().split('T')[0],
      status: 'Confirmed'
    };
    setRegistrations(prev => [newReg, ...prev]);
    
    // Update spots count on program
    setPrograms(prev => prev.map(prog => {
      if (prog.id === regData.programId) {
        const updatedSlots = prog.scheduleSlots.map(slot => {
          if (slot.time === regData.selectedSchedule || regData.selectedSchedule.includes(slot.day)) {
            return { ...slot, spotsLeft: Math.max(0, slot.spotsLeft - 1) };
          }
          return slot;
        });
        return { ...prog, scheduleSlots: updatedSlots };
      }
      return prog;
    }));

    triggerConfettiCelebration();
    showToast(`Registration confirmed for ${regData.childName} in ${regData.programTitle}! Confirmation sent to ${regData.parentEmail}.`, 'success', 'Enrollment Confirmed!');
  };

  const registerForEvent = (eventReg: Omit<EventRegistration, 'id' | 'registeredAt'>) => {
    const newReg: EventRegistration = {
      ...eventReg,
      id: 'evreg-' + Date.now().toString().slice(-6),
      registeredAt: new Date().toISOString().split('T')[0]
    };
    setEventRegistrations(prev => [newReg, ...prev]);
    
    setEvents(prev => prev.map(ev => {
      if (ev.id === eventReg.eventId) {
        return { ...ev, registeredSpots: ev.registeredSpots + eventReg.numAttendees };
      }
      return ev;
    }));

    triggerConfettiCelebration();
    showToast(`RSVP confirmed for "${eventReg.eventTitle}"! We look forward to seeing your family.`, 'success', 'RSVP Confirmed!');
  };

  const submitVolunteerApplication = (app: Omit<VolunteerApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newVol: VolunteerApplication = {
      ...app,
      id: 'vol-' + Date.now().toString().slice(-6),
      submittedAt: new Date().toISOString().split('T')[0],
      status: 'Pending Review'
    };
    setVolunteers(prev => [newVol, ...prev]);
    showToast('Thank you for volunteering! Our volunteer coordinator will reach out within 2 business days.', 'success', 'Application Received');
  };

  const updateVolunteerStatus = (id: string, status: VolunteerApplication['status']) => {
    setVolunteers(prev => prev.map(v => v.id === id ? { ...v, status } : v));
    showToast(`Volunteer status updated to ${status}`, 'info');
  };

  const submitDonation = (donation: Omit<DonationRecord, 'id' | 'donatedAt'>) => {
    const newDonation: DonationRecord = {
      ...donation,
      id: 'don-' + Date.now().toString().slice(-6),
      donatedAt: new Date().toISOString().split('T')[0]
    };
    setDonations(prev => [newDonation, ...prev]);
    triggerConfettiCelebration();
    showToast(`Thank you for your generous gift of $${donation.amount} to support Polaris Academy youth!`, 'success', 'Heartfelt Gratitude');
  };

  const submitContactMessage = (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now().toString().slice(-6),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setContactMessages(prev => [newMsg, ...prev]);
    showToast('Your message has been sent to the Polaris Academy Hub team. We will get back to you shortly!', 'success', 'Message Received');
  };

  // Kid & Parent profile actions
  const addChildProfile = (childData: Omit<ChildProfile, 'id' | 'completedResourceIds' | 'enrolledProgramIds' | 'earnedBadges' | 'starsCount' | 'streakDays' | 'completedMinutesThisWeek'>) => {
    const newChild: ChildProfile = {
      ...childData,
      id: 'child-' + Date.now().toString().slice(-6),
      completedResourceIds: [],
      enrolledProgramIds: [],
      earnedBadges: [
        {
          id: 'badge-new-star',
          name: 'Welcome Star',
          icon: '✨',
          unlockedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
          description: 'Joined Polaris Academy Hub!'
        }
      ],
      starsCount: 10,
      streakDays: 1,
      completedMinutesThisWeek: 0
    };
    setChildProfiles(prev => [...prev, newChild]);
    setActiveChildId(newChild.id);
    showToast(`Created profile for ${newChild.firstName}! 10 welcome stars awarded!`, 'success', 'Child Profile Added');
  };

  const updateChildProfile = (id: string, updates: Partial<ChildProfile>) => {
    setChildProfiles(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    showToast('Child profile updated', 'success');
  };

  const completeResourceForChild = (childId: string, resourceId: string, starsBonus: number = 15) => {
    setChildProfiles(prev => prev.map(child => {
      if (child.id === childId) {
        const isNew = !child.completedResourceIds.includes(resourceId);
        const newCompleted = isNew ? [...child.completedResourceIds, resourceId] : child.completedResourceIds;
        const newStars = isNew ? child.starsCount + starsBonus : child.starsCount + 5;
        const newMinutes = child.completedMinutesThisWeek + 15;
        
        let newBadges = [...child.earnedBadges];
        if (newCompleted.length >= 3 && !newBadges.some(b => b.id === 'badge-3-star')) {
          newBadges.push({
            id: 'badge-3-star',
            name: 'Constellation Master',
            icon: '🌠',
            unlockedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            description: 'Completed 3 hands-on learning quests!'
          });
        }

        return {
          ...child,
          completedResourceIds: newCompleted,
          starsCount: newStars,
          completedMinutesThisWeek: newMinutes,
          earnedBadges: newBadges
        };
      }
      return child;
    }));

    // Update resource complete count
    setResources(prev => prev.map(r => r.id === resourceId ? { ...r, completedCount: r.completedCount + 1 } : r));

    triggerConfettiCelebration();
    showToast(`Great job! You earned ${starsBonus} Polaris Stars! ⭐`, 'success', 'Mission Completed!');
  };

  return (
    <AppContext.Provider value={{
      currentPage,
      setCurrentPage,
      userRole,
      setUserRole,
      selectedAgeFilter,
      setSelectedAgeFilter,
      siteSettings,
      updateSiteSettings,
      programs,
      updateProgram,
      addProgram,
      deleteProgram,
      resources,
      addResource,
      updateResource,
      deleteResource,
      events,
      addEvent,
      updateEvent,
      deleteEvent,
      instructors,
      addInstructor,
      updateInstructor,
      toggleInstructorApproval,
      blogPosts,
      addBlogPost,
      registrations,
      registerForProgram,
      eventRegistrations,
      registerForEvent,
      volunteers,
      submitVolunteerApplication,
      updateVolunteerStatus,
      donations,
      submitDonation,
      contactMessages,
      submitContactMessage,
      childProfiles,
      activeChildId,
      setActiveChildId,
      activeChild,
      addChildProfile,
      updateChildProfile,
      completeResourceForChild,
      triggerConfettiCelebration,
      activeModal,
      activeModalData,
      openModal,
      closeModal,
      toasts,
      showToast,
      dismissToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
