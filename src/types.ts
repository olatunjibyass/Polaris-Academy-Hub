export type AgeGroup = '3-5' | '6-8' | '9-12' | 'All Ages';

export type ProgramCategory = 
  | 'Academic Support'
  | 'STEM, AI & Coding'
  | 'Arts & Creativity'
  | 'Music & Instruments'
  | 'Ballet & Dance'
  | 'Life Skills & Leadership';

export type ResourceCategory = 
  | 'Math'
  | 'Reading'
  | 'Science'
  | 'Coding'
  | 'AI'
  | 'Art'
  | 'Music'
  | 'Dance'
  | 'Leadership'
  | 'Life Skills';

export type ResourceFormat = 
  | 'Interactive Lesson'
  | 'Video Guide'
  | 'Printable Worksheet'
  | 'STEM Experiment'
  | 'Coding Challenge'
  | 'Music Activity'
  | 'Art Project'
  | 'Leadership Quest';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface ScheduleSlot {
  id: string;
  day: string;
  time: string;
  roomOrPlatform: string;
  ageGroup: AgeGroup;
  spotsLeft: number;
}

export interface Program {
  id: string;
  title: string;
  category: ProgramCategory;
  ageRange: string;
  ageGroup: AgeGroup[];
  level: DifficultyLevel;
  shortDescription: string;
  fullDescription: string;
  curriculumHighlights: string[];
  skillsLearned: string[];
  schedule: string;
  scheduleSlots: ScheduleSlot[];
  instructorName: string;
  instructorRole: string;
  instructorPhoto: string;
  iconName: string;
  bannerImage: string;
  cost: string; // e.g. "Free (Nonprofit Funded)" or "Community Subsidized"
  featured?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  category: ResourceCategory;
  ageGroup: AgeGroup;
  difficulty: DifficultyLevel;
  format: ResourceFormat;
  description: string;
  estimatedMinutes: number;
  featured?: boolean;
  thumbnail: string;
  tags: string[];
  // Interactive payload
  quizQuestions?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  interactiveType?: 'quiz' | 'coding_blocks' | 'worksheet' | 'rhythm_pad' | 'stem_lab' | 'leadership_reflection';
  codingTask?: {
    title: string;
    instructions: string;
    initialBlocks: string[];
    availableBlocks: string[];
    expectedSequence: string[];
    hint: string;
  };
  worksheetContent?: {
    title: string;
    instructions: string;
    prompts: string[];
    printableSummary: string;
  };
  stemExperimentSteps?: {
    materials: string[];
    steps: string[];
    scienceExplanation: string;
  };
  rhythmBeats?: {
    name: string;
    tempo: number;
    patterns: string[];
  };
  reflectionPrompt?: {
    scenario: string;
    reflectionQuestions: string[];
    actionPledge: string;
  };
  downloadCount: number;
  completedCount: number;
}

export interface EventItem {
  id: string;
  title: string;
  category: ProgramCategory | 'Community & Family';
  date: string;
  time: string;
  locationType: 'In-Person Center' | 'Live Online' | 'Hybrid';
  locationAddress: string;
  ageRange: string;
  ageGroup: AgeGroup[];
  description: string;
  highlights: string[];
  totalSpots: number;
  registeredSpots: number;
  isFree: boolean;
  bannerImage: string;
  featured?: boolean;
}

export type CommunityEvent = EventItem;


export interface Instructor {
  id: string;
  name: string;
  subject: string;
  bio: string;
  photo: string;
  expertise: string[];
  programsTaught: string[];
  education: string;
  approved: boolean;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Parent Tips' | 'STEM & AI' | 'Creativity' | 'Community' | 'Student Spotlight';
  author: string;
  authorRole: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface ChildProfile {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  ageGroup: AgeGroup;
  avatar: string;
  interests: string[];
  completedResourceIds: string[];
  enrolledProgramIds: string[];
  earnedBadges: {
    id: string;
    name: string;
    icon: string;
    unlockedAt: string;
    description: string;
  }[];
  starsCount: number;
  streakDays: number;
  weeklyGoalMinutes: number;
  completedMinutesThisWeek: number;
}

export interface ProgramRegistration {
  id: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  childName: string;
  childAge: number;
  programId: string;
  programTitle: string;
  selectedSchedule: string;
  status: 'Confirmed' | 'Waitlist' | 'Completed';
  emergencyContact: string;
  registeredAt: string;
  notes?: string;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  attendeeName: string;
  attendeeEmail: string;
  numAttendees: number;
  childrenAges: string;
  registeredAt: string;
}

export interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  roleInterest: 'Mentor / Tutor' | 'STEM & Coding Instructor' | 'Arts & Music Assistant' | 'Event Coordinator' | 'General Volunteer';
  availability: string;
  experienceSummary: string;
  status: 'Pending Review' | 'Interview Scheduled' | 'Approved' | 'Archived';
  submittedAt: string;
}

export interface DonationRecord {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  frequency: 'One-Time' | 'Monthly';
  allocatedTo: 'General Educational Fund' | 'STEM & Robotics Lab' | 'Arts & Music Materials' | 'Child Scholarship Fund';
  message?: string;
  isAnonymous: boolean;
  donatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  inquiryType: 'Program Inquiry' | 'Enrollment Question' | 'Partnership' | 'Donation' | 'General';
  status: 'New' | 'Replied' | 'Archived';
  createdAt: string;
}

export interface SiteSettings {
  organizationName: string;
  tagline: string;
  mission: string;
  vision: string;
  phone: string;
  secondaryPhone?: string;
  email: string;
  address: string;
  tuesdayHours: string;
  thursdayHours: string;
  saturdayHours: string;
  operatingHours?: string;
  nonprofitStatusNotice: string;
  announcementBanner: {
    enabled: boolean;
    text: string;
    linkUrl?: string;
  };
}
