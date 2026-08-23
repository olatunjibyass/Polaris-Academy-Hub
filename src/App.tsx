import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';

// Homepage Sections
import { Hero } from './components/home/Hero';
import { MissionSection } from './components/home/MissionSection';
import { ProgramsSection } from './components/home/ProgramsSection';
import { UpcomingEventsSection } from './components/home/UpcomingEventsSection';
import { HowWeHelpSection } from './components/home/HowWeHelpSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';

// Page Views
import { ProgramsView } from './components/programs/ProgramsView';
import { LearningHubView } from './components/learning-hub/LearningHubView';
import { EventsView } from './components/events/EventsView';
import { ResourcesView } from './components/resources/ResourcesView';
import { AboutView } from './components/about/AboutView';
import { InstructorsView } from './components/instructors/InstructorsView';
import { BlogNewsView } from './components/blog/BlogNewsView';
import { GetInvolvedView } from './components/get-involved/GetInvolvedView';
import { ContactView } from './components/contact/ContactView';
import { KidsDashboard } from './components/kids/KidsDashboard';
import { ParentDashboard } from './components/parent/ParentDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';

// Modals
import { RegistrationModal } from './components/modals/RegistrationModal';
import { EventRsvpModal } from './components/modals/EventRsvpModal';
import { InteractiveResourceModal } from './components/modals/InteractiveResourceModal';
import { DonationModal } from './components/modals/DonationModal';
import { VolunteerModal } from './components/modals/VolunteerModal';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div 
      className="min-h-screen flex flex-col text-slate-900 font-sans selection:bg-[#063A25] selection:text-[#FFD700] bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 29, 19, 0.90), rgba(6, 58, 37, 0.92)), url('https://i.postimg.cc/RZMd26D4/close-up-smiling-schoolchildren-1098-3826.avif')`
      }}
    >
      
      {/* Global Header */}
      <Header />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div>
            <Hero />
            <MissionSection />
            <ProgramsSection />
            <UpcomingEventsSection />
            <HowWeHelpSection />
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'programs' && <ProgramsView />}
        {currentPage === 'learning-hub' && <LearningHubView />}
        {currentPage === 'events' && <EventsView />}
        {currentPage === 'resources' && <ResourcesView />}
        {currentPage === 'about' && <AboutView />}
        {currentPage === 'instructors' && <InstructorsView />}
        {currentPage === 'blog' && <BlogNewsView />}
        {currentPage === 'get-involved' && <GetInvolvedView />}
        {currentPage === 'contact' && <ContactView />}
        {currentPage === 'kids-zone' && <KidsDashboard />}
        {currentPage === 'parent-portal' && <ParentDashboard />}
        {currentPage === 'admin' && <AdminDashboard />}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modals */}
      <RegistrationModal />
      <EventRsvpModal />
      <InteractiveResourceModal />
      <DonationModal />
      <VolunteerModal />

      {/* Notification Toast Container */}
      <ToastContainer />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
