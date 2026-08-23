import { 
  Program, 
  Resource, 
  EventItem, 
  Instructor, 
  BlogPost, 
  ChildProfile, 
  SiteSettings, 
  ProgramRegistration, 
  VolunteerApplication, 
  DonationRecord 
} from '../types';

export const initialSiteSettings: SiteSettings = {
  organizationName: 'Polaris Academy Hub',
  tagline: 'Learn. Create. Perform. Lead.',
  mission: "To create an accessible educational platform that empowers children ages 3–12 to discover their interests, develop academic and creative mastery, cultivate unshakable confidence, and thrive through engaging hands-on learning experiences.",
  vision: "A world where every young mind is given the guiding star, nurturing guidance, and creative freedom to unlock their full potential regardless of background.",
  phone: '(614) 296-3599',
  secondaryPhone: '(614) 401-6775',
  email: 'Polarisacademyhub@gmail.com',
  address: '80 S Liberty Street, Powell, OH 43065',
  tuesdayHours: 'Tuesday: 4:00 PM – 7:00 PM',
  thursdayHours: 'Thursday: 4:00 PM – 7:00 PM',
  saturdayHours: 'Saturday: 9:00 AM – 11:00 AM',
  operatingHours: 'Tues & Thurs: 4:00 PM – 7:00 PM | Sat: 9:00 AM – 11:00 AM',
  nonprofitStatusNotice: '[NONPROFIT STATUS] 501(c)(3) Public Educational Non-Profit Initiative. EIN: [PENDING VERIFICATION]. All community contributions directly support free and subsidized children programs.',
  announcementBanner: {
    enabled: true,
    text: '🌟 Fall Term 2026 Enrollment Now Open! Free STEM & Arts Discovery Workshops Every Saturday Morning.',
    linkUrl: '#programs'
  }
};

export const initialPrograms: Program[] = [
  {
    id: 'academic-support',
    title: 'Academic Support & Learning Enrichment',
    category: 'Academic Support',
    ageRange: 'Ages 3–12',
    ageGroup: ['3-5', '6-8', '9-12'],
    level: 'All Levels',
    shortDescription: 'Comprehensive homework assistance, guided reading fluency, conceptual math mastery, and active study habits.',
    fullDescription: 'Our Academic Support program bridges classroom gaps and fuels curiosity. Certified tutors and educational mentors work in small groups to make foundational reading, mathematics, scientific inquiry, and homework mastery intuitive, stress-free, and enjoyable.',
    curriculumHighlights: [
      'Personalized homework support and concept breakdown',
      'Early phonics, vocabulary building & reading comprehension',
      'Hands-on Singapore-style mental math & problem solving',
      'Executive function & self-directed study skills development'
    ],
    skillsLearned: ['Reading Fluency', 'Mathematical Reasoning', 'Active Listening', 'Organizational Skills'],
    schedule: 'Tues & Thurs 4:00 – 5:30 PM | Sat 9:00 – 10:00 AM',
    scheduleSlots: [
      { id: 'slot-acad-1', day: 'Tuesday', time: '4:00 PM – 5:30 PM', roomOrPlatform: 'Starlight Room A', ageGroup: '6-8', spotsLeft: 6 },
      { id: 'slot-acad-2', day: 'Thursday', time: '4:00 PM – 5:30 PM', roomOrPlatform: 'Starlight Room A', ageGroup: '9-12', spotsLeft: 4 },
      { id: 'slot-acad-3', day: 'Saturday', time: '9:00 AM – 10:00 AM', roomOrPlatform: 'Main Learning Hall', ageGroup: '3-5', spotsLeft: 8 }
    ],
    instructorName: 'Dr. Evelyn Morales, Ed.D.',
    instructorRole: 'Lead Curriculum Director',
    instructorPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    iconName: 'BookOpen',
    bannerImage: 'https://i.imgur.com/VKqsl7H.jpeg',
    cost: 'Free Nonprofit Access',
    featured: true
  },
  {
    id: 'stem-ai-coding',
    title: 'STEM, AI & Junior Coding Explorers',
    category: 'STEM, AI & Coding',
    ageRange: 'Ages 6–12',
    ageGroup: ['6-8', '9-12'],
    level: 'Beginner',
    shortDescription: 'Block-based coding, robotics building, AI fundamentals, physics puzzles, and hands-on technological discovery.',
    fullDescription: 'Empowering young thinkers to become creators of technology rather than just consumers. Students explore algorithmic logic using visual blocks (Scratch/Blockly), program real sensor-driven educational robots, explore generative AI concepts safely, and build simple video games.',
    curriculumHighlights: [
      'Visual algorithmic thinking with interactive block coding',
      'Hands-on micro-robotics and circuit engineering kits',
      'Kid-friendly Artificial Intelligence & machine learning basics',
      'Collaborative game design and creative logic puzzles'
    ],
    skillsLearned: ['Computational Thinking', 'Algorithmic Logic', 'AI Literacy', 'Creative Debugging'],
    schedule: 'Tues & Thurs 5:30 – 7:00 PM | Sat 10:00 – 11:00 AM',
    scheduleSlots: [
      { id: 'slot-stem-1', day: 'Tuesday', time: '5:30 PM – 7:00 PM', roomOrPlatform: 'Robotics & AI Lab', ageGroup: '6-8', spotsLeft: 5 },
      { id: 'slot-stem-2', day: 'Thursday', time: '5:30 PM – 7:00 PM', roomOrPlatform: 'Robotics & AI Lab', ageGroup: '9-12', spotsLeft: 3 },
      { id: 'slot-stem-3', day: 'Saturday', time: '10:00 AM – 11:00 AM', roomOrPlatform: 'STEM Makerspace', ageGroup: '9-12', spotsLeft: 7 }
    ],
    instructorName: 'Marcus Vance, M.S.',
    instructorRole: 'Lead Robotics & Code Mentor',
    instructorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    iconName: 'Cpu',
    bannerImage: 'https://i.imgur.com/XJmmc5B.jpeg',
    cost: 'Free Nonprofit Access',
    featured: true
  },
  {
    id: 'arts-creativity',
    title: 'Arts & Creative Expression Studio',
    category: 'Arts & Creativity',
    ageRange: 'Ages 3–12',
    ageGroup: ['3-5', '6-8', '9-12'],
    level: 'All Levels',
    shortDescription: 'Drawing, watercolor, clay sculpting, sustainable crafts, and digital illustration to spark imagination.',
    fullDescription: 'Nurturing boundless artistic imagination and fine motor skills. Children explore color harmony, mixed media techniques, clay sculpting, and visual storytelling in an uplifting, pressure-free studio where every creation is celebrated.',
    curriculumHighlights: [
      'Expressive acrylics, watercolors, and oil pastels',
      '3D sculpture using clay, wood craft, and recycled materials',
      'Character design, comic book storytelling & illustration',
      'Seasonal community art showcases and gallery exhibits'
    ],
    skillsLearned: ['Spatial Awareness', 'Fine Motor Control', 'Color Theory', 'Creative Problem Solving'],
    schedule: 'Tuesday 4:00 – 5:30 PM | Saturday 9:00 – 10:30 AM',
    scheduleSlots: [
      { id: 'slot-art-1', day: 'Tuesday', time: '4:00 PM – 5:30 PM', roomOrPlatform: 'Art Loft 2B', ageGroup: '3-5', spotsLeft: 4 },
      { id: 'slot-art-2', day: 'Saturday', time: '9:00 AM – 10:30 AM', roomOrPlatform: 'Art Loft 2B', ageGroup: '6-8', spotsLeft: 6 }
    ],
    instructorName: 'Clara Lin, B.F.A.',
    instructorRole: 'Visual Arts Instructor',
    instructorPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    iconName: 'Palette',
    bannerImage: 'https://i.imgur.com/fZWhiTM.jpeg',
    cost: 'Free Nonprofit Access',
    featured: true
  },
  {
    id: 'music-instruments',
    title: 'Music Discovery & Instrument Exploration',
    category: 'Music & Instruments',
    ageRange: 'Ages 3–12',
    ageGroup: ['3-5', '6-8', '9-12'],
    level: 'Beginner',
    shortDescription: 'Keyboard fundamentals, rhythm percussion, solfege ear training, and choral voice exploration.',
    fullDescription: 'Opening the magical world of sound and melody. Children learn note reading, rhythm patterns, keyboard basics, hand drums, and group singing, fostering acoustic sensitivity, auditory memory, and joyful self-expression.',
    curriculumHighlights: [
      'Beginner piano and keyboard ergonomics',
      'Orff percussion instruments & rhythm coordination',
      'Solfege, vocal pitch training & joyful sing-alongs',
      'Exploring orchestral instrument families and musical cultures'
    ],
    skillsLearned: ['Rhythmic Precision', 'Pitch Recognition', 'Auditory Memory', 'Ensemble Listening'],
    schedule: 'Thursday 4:00 – 5:30 PM | Saturday 10:00 – 11:00 AM',
    scheduleSlots: [
      { id: 'slot-mus-1', day: 'Thursday', time: '4:00 PM – 5:30 PM', roomOrPlatform: 'Harmonics Studio', ageGroup: '6-8', spotsLeft: 5 },
      { id: 'slot-mus-2', day: 'Saturday', time: '10:00 AM – 11:00 AM', roomOrPlatform: 'Harmonics Studio', ageGroup: '3-5', spotsLeft: 7 }
    ],
    instructorName: 'Julian Thorne, M.Mus.',
    instructorRole: 'Music & Instrumental Lead',
    instructorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    iconName: 'Music',
    bannerImage: 'https://i.imgur.com/GXE0qA6.jpeg',
    cost: 'Free Nonprofit Access',
    featured: false
  },
  {
    id: 'ballet-dance',
    title: 'Ballet Foundations & Creative Movement',
    category: 'Ballet & Dance',
    ageRange: 'Ages 3–10',
    ageGroup: ['3-5', '6-8'],
    level: 'Beginner',
    shortDescription: 'Ballet poise, posture, creative kinetic movement, flexibility, and stage performance confidence.',
    fullDescription: 'Cultivating grace, body awareness, and physical confidence. Our gentle dance curriculum introduces classic ballet positions, musicality, dynamic spatial balance, and joyous movement storytelling in an inclusive environment.',
    curriculumHighlights: [
      'Core ballet positions (1st through 5th) and gentle barre work',
      'Dynamic spatial balance, posture & flexibility conditioning',
      'Storybook creative movement and character choreography',
      'End-of-term family showcase performance'
    ],
    skillsLearned: ['Body Alignment', 'Flexibility & Grace', 'Kinesthetic Balance', 'Stage Presence'],
    schedule: 'Thursday 5:30 – 7:00 PM | Saturday 9:00 – 10:00 AM',
    scheduleSlots: [
      { id: 'slot-dnc-1', day: 'Thursday', time: '5:30 PM – 7:00 PM', roomOrPlatform: 'Dance Hall Polaris', ageGroup: '6-8', spotsLeft: 4 },
      { id: 'slot-dnc-2', day: 'Saturday', time: '9:00 AM – 10:00 AM', roomOrPlatform: 'Dance Hall Polaris', ageGroup: '3-5', spotsLeft: 6 }
    ],
    instructorName: 'Seraphina Dubois',
    instructorRole: 'Ballet & Movement Director',
    instructorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    iconName: 'Sparkles',
    bannerImage: 'https://i.imgur.com/bP54wb0.jpeg',
    cost: 'Free Nonprofit Access',
    featured: false
  },
  {
    id: 'life-skills-leadership',
    title: 'Life Skills, Public Speaking & Youth Leadership',
    category: 'Life Skills & Leadership',
    ageRange: 'Ages 6–12',
    ageGroup: ['6-8', '9-12'],
    level: 'All Levels',
    shortDescription: 'Team communication, public speaking, emotional resilience, collaborative leadership, and decision making.',
    fullDescription: 'Guiding the confident leaders of tomorrow. Through interactive role-playing, junior debate games, team problem solving, and community project planning, young learners build empathy, poise, self-regulation, and public speaking courage.',
    curriculumHighlights: [
      'Junior Orators public speaking and speech construction',
      'Team negotiation, conflict resolution & active empathy',
      'Goal setting, personal time management & self-reflection',
      'Community service and youth initiative mini-projects'
    ],
    skillsLearned: ['Public Speaking', 'Empathy & Collaboration', 'Goal Setting', 'Decision Making'],
    schedule: 'Tuesday 5:30 – 7:00 PM | Saturday 10:00 – 11:00 AM',
    scheduleSlots: [
      { id: 'slot-lead-1', day: 'Tuesday', time: '5:30 PM – 7:00 PM', roomOrPlatform: 'Civic Leadership Room', ageGroup: '9-12', spotsLeft: 8 },
      { id: 'slot-lead-2', day: 'Saturday', time: '10:00 AM – 11:00 AM', roomOrPlatform: 'Civic Leadership Room', ageGroup: '6-8', spotsLeft: 5 }
    ],
    instructorName: 'Aiden Campbell, J.D.',
    instructorRole: 'Youth Leadership Facilitator',
    instructorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    iconName: 'Compass',
    bannerImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900',
    cost: 'Free Nonprofit Access',
    featured: true
  },
  {
    id: 'young-adult-career-leadership',
    title: 'Career Launchpad & Young Adult Tech Leadership',
    category: 'Life Skills & Leadership',
    ageRange: 'Ages 18–24',
    ageGroup: ['18-24'],
    level: 'All Levels',
    shortDescription: 'Professional career development, resume & interview mastery, applied workplace AI, personal finance, and executive mentorship.',
    fullDescription: 'Designed specifically for emerging young adults (ages 18–24) navigating college, early careers, or tech transitions. This intensive evening and weekend cohort pairs participants with seasoned industry mentors for hands-on career coaching, technical interview simulations, applied workplace AI tools, personal financial independence, and community civic initiatives.',
    curriculumHighlights: [
      'Professional resume refinement, LinkedIn branding & technical interview simulations',
      'Applied Artificial Intelligence & productivity toolkits for modern workplaces',
      'Personal financial literacy: budgeting, credit health, taxes & investment basics',
      'Executive presence, public negotiation, emotional intelligence & mentor networking'
    ],
    skillsLearned: ['Career Navigation', 'Workplace AI Literacy', 'Financial Management', 'Executive Communication'],
    schedule: 'Tuesday & Thursday 7:00 – 8:30 PM | Saturday 11:30 AM – 1:00 PM',
    scheduleSlots: [
      { id: 'slot-ya-1', day: 'Tuesday', time: '7:00 PM – 8:30 PM', roomOrPlatform: 'Executive Hub & Innovation Lab', ageGroup: '18-24', spotsLeft: 10 },
      { id: 'slot-ya-2', day: 'Thursday', time: '7:00 PM – 8:30 PM', roomOrPlatform: 'Executive Hub & Innovation Lab', ageGroup: '18-24', spotsLeft: 8 },
      { id: 'slot-ya-3', day: 'Saturday', time: '11:30 AM – 1:00 PM', roomOrPlatform: 'Innovation Studio & Virtual Lab', ageGroup: '18-24', spotsLeft: 12 }
    ],
    instructorName: 'Darius Sterling, MBA',
    instructorRole: 'Director of Young Adult & Career Mentorship',
    instructorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    iconName: 'Compass',
    bannerImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900',
    cost: 'Free Nonprofit Access',
    featured: true
  }
];

export const initialResources: Resource[] = [
  {
    id: 'res-math-space-patterns',
    title: 'Constellation Math: Galactic Number Sequences',
    category: 'Math',
    ageGroup: '6-8',
    difficulty: 'Beginner',
    format: 'Interactive Lesson',
    description: 'Solve star pattern arithmetic to illuminate constellations across the night sky.',
    estimatedMinutes: 10,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=400',
    tags: ['Numbers', 'Addition', 'Patterns', 'Astronomy'],
    interactiveType: 'quiz',
    quizQuestions: [
      {
        question: 'Star sequence: 3, 6, 9, 12, ... What is the next star brightness number?',
        options: ['13', '14', '15', '16'],
        correctIndex: 2,
        explanation: 'We are adding 3 each time: 12 + 3 = 15! Great star spotting!'
      },
      {
        question: 'Polaris is 10 light-units away. If you travel 4 units today, how many are left?',
        options: ['5', '6', '7', '14'],
        correctIndex: 1,
        explanation: '10 minus 4 equals 6 units remaining to Polaris!'
      },
      {
        question: 'Which geometric shape has 3 sides like a starry triangle?',
        options: ['Square', 'Pentagon', 'Triangle', 'Hexagon'],
        correctIndex: 2,
        explanation: 'A triangle always has 3 vertices and 3 straight sides.'
      }
    ],
    downloadCount: 342,
    completedCount: 512
  },
  {
    id: 'res-coding-rover-mission',
    title: 'Rover Mars Quest: Block Logic Challenge',
    category: 'Coding',
    ageGroup: '6-8',
    difficulty: 'Beginner',
    format: 'Coding Challenge',
    description: 'Arrange command blocks in the right order to navigate the Polaris Explorer rover safely to the energy crystal.',
    estimatedMinutes: 12,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
    tags: ['Sequencing', 'Algorithms', 'Logic', 'Space'],
    interactiveType: 'coding_blocks',
    codingTask: {
      title: 'Navigate the Rover to the Star Crystal',
      instructions: 'Click the action blocks in the sequence that will guide the rover 2 steps forward, turn right, and collect the crystal!',
      initialBlocks: [],
      availableBlocks: ['Move Forward 🚀', 'Turn Right ➡️', 'Move Forward 🚀', 'Turn Left ⬅️', 'Collect Star Crystal ⭐'],
      expectedSequence: ['Move Forward 🚀', 'Move Forward 🚀', 'Turn Right ➡️', 'Collect Star Crystal ⭐'],
      hint: 'Move forward two times, make a 90-degree right turn, then collect the crystal!'
    },
    downloadCount: 620,
    completedCount: 890
  },
  {
    id: 'res-ai-smart-detective',
    title: 'How AI Learns: The Robot Sorter Detective',
    category: 'AI',
    ageGroup: '9-12',
    difficulty: 'Intermediate',
    format: 'Interactive Lesson',
    description: 'Learn how computer vision and machine learning classify images and solve real-world problems responsibly.',
    estimatedMinutes: 15,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400',
    tags: ['Machine Learning', 'Computer Vision', 'Ethics', 'Tech'],
    interactiveType: 'quiz',
    quizQuestions: [
      {
        question: 'How does an AI model learn to recognize a picture of a cat?',
        options: [
          'It is born knowing what cats look like',
          'It analyzes thousands of example cat photos looking for patterns (whiskers, ears)',
          'It reads a magic dictionary',
          'It guesses randomly every time'
        ],
        correctIndex: 1,
        explanation: 'Machine learning trains on large datasets of examples to find patterns!'
      },
      {
        question: 'Why is it crucial that AI training data is diverse and fair?',
        options: [
          'To make the computer run faster',
          'So the AI makes accurate and fair decisions for all people and situations',
          'It does not matter what data is used',
          'So robots can write songs'
        ],
        correctIndex: 1,
        explanation: 'Fair, diverse data ensures AI systems do not produce biased or harmful results.'
      }
    ],
    downloadCount: 480,
    completedCount: 710
  },
  {
    id: 'res-reading-stellar-story',
    title: 'The Little Explorer & The North Star (Printable & Audio)',
    category: 'Reading',
    ageGroup: '3-5',
    difficulty: 'Beginner',
    format: 'Printable Worksheet',
    description: 'An illustrated storybook and vocabulary tracer for early readers and parent read-aloud time.',
    estimatedMinutes: 15,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400',
    tags: ['Phonics', 'Storytelling', 'Sight Words', 'Bedtime'],
    interactiveType: 'worksheet',
    worksheetContent: {
      title: 'The North Star Reading & Tracing Activity',
      instructions: 'Read along with your guardian. Trace the sight words: STAR, LIGHT, SHINE, LEAD.',
      prompts: [
        'Read: "High above the sleepy town, Polaris shines bright without a frown."',
        'Vocabulary Trace: [ S - T - A - R ]',
        'Comprehension Question: What does the star do to help travelers find their way home?',
        'Draw your own shining star constellation in the box provided.'
      ],
      printableSummary: 'Polaris Early Literacy Worksheet — Grade PK-K. Includes 4 sight-word tracing rows and comprehension question.'
    },
    downloadCount: 890,
    completedCount: 430
  },
  {
    id: 'res-stem-kitchen-comet',
    title: 'STEM Lab: Fizzy Baking Soda Comet Reaction',
    category: 'Science',
    ageGroup: '6-8',
    difficulty: 'Beginner',
    format: 'STEM Experiment',
    description: 'Create a safe, bubbling chemical reaction using household kitchen science to model a frozen comet.',
    estimatedMinutes: 20,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400',
    tags: ['Chemistry', 'Hands-on', 'Safe Experiments', 'Astronomy'],
    interactiveType: 'stem_lab',
    stemExperimentSteps: {
      materials: [
        '2 tbsp Baking soda (Sodium bicarbonate)',
        '3 tbsp White vinegar (Dilute acetic acid)',
        'A drop of blue or purple food coloring',
        'Biodegradable glitter or sprinkles (starlight dust)',
        'Shallow tray or plate'
      ],
      steps: [
        'Step 1: Shape the baking soda and glitter into a solid snowball "comet core" on your tray.',
        'Step 2: Add a single drop of blue food dye to the top of your comet.',
        'Step 3: Using a spoon or dropper, gently drip vinegar onto the comet core.',
        'Step 4: Watch the bubbling fizzing release of Carbon Dioxide gas (CO₂) creating a glowing comet tail!'
      ],
      scienceExplanation: 'When an acid (vinegar) meets a base (baking soda), they react instantly to form water, a salt, and bubbling carbon dioxide gas. In real space, comets vaporize gas when heated by the sun!'
    },
    downloadCount: 540,
    completedCount: 680
  },
  {
    id: 'res-music-rhythm-pad',
    title: 'Starlight Beat Master: 4/4 Rhythm Explorer',
    category: 'Music',
    ageGroup: '3-5',
    difficulty: 'Beginner',
    format: 'Music Activity',
    description: 'Tap along to steady beats, syncopated rhythms, and explore high vs. low musical pitches.',
    estimatedMinutes: 8,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400',
    tags: ['Rhythm', 'Percussion', 'Ear Training', 'Tempo'],
    interactiveType: 'rhythm_pad',
    rhythmBeats: {
      name: 'Polaris 4-Beat March',
      tempo: 90,
      patterns: ['Drum Kick (Beat 1)', 'Clap (Beat 2)', 'Drum Kick (Beat 3)', 'Star Shaker (Beat 4)']
    },
    downloadCount: 310,
    completedCount: 490
  },
  {
    id: 'res-art-color-wheel',
    title: 'Color Constellations: Primary & Secondary Mix Studio',
    category: 'Art',
    ageGroup: '6-8',
    difficulty: 'Beginner',
    format: 'Art Project',
    description: 'Discover how Red, Blue, and Yellow blend to create secondary hues through a vibrant galaxy painting exercise.',
    estimatedMinutes: 25,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400',
    tags: ['Color Theory', 'Painting', 'Creativity', 'Fine Art'],
    interactiveType: 'quiz',
    quizQuestions: [
      {
        question: 'Which two primary colors do you blend to make radiant Polaris Gold / Yellow-Green?',
        options: ['Red + Blue', 'Yellow + Blue', 'Red + White', 'Purple + Black'],
        correctIndex: 1,
        explanation: 'Yellow combined with a touch of Blue creates fresh green hues!'
      },
      {
        question: 'What are the three core Primary colors?',
        options: ['Orange, Green, Purple', 'Red, Yellow, Blue', 'Black, White, Gray', 'Pink, Teal, Gold'],
        correctIndex: 1,
        explanation: 'Red, Yellow, and Blue are the fundamental primary colors that mix all others!'
      }
    ],
    downloadCount: 415,
    completedCount: 520
  },
  {
    id: 'res-leadership-junior-speech',
    title: 'Junior Leader: Speaking With Confidence Quest',
    category: 'Leadership',
    ageGroup: '9-12',
    difficulty: 'All Levels',
    format: 'Leadership Quest',
    description: 'Learn the 3 keys to confident speaking: posture, eye contact, and the "Hook-Story-Call" framework.',
    estimatedMinutes: 15,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400',
    tags: ['Public Speaking', 'Courage', 'Teamwork', 'Communication'],
    interactiveType: 'leadership_reflection',
    reflectionPrompt: {
      scenario: 'You are selected to introduce a new student or community project to your class. How do you prepare your words to inspire your peers?',
      reflectionQuestions: [
        '1. The Hook: What exciting question or fact will you say in your first 10 seconds?',
        '2. The Story: Why does this idea matter to you and your community?',
        '3. The Call: What can your listeners do together to help?'
      ],
      actionPledge: 'I pledge to listen actively, speak with kindness, and use my voice to uplift others.'
    },
    downloadCount: 380,
    completedCount: 610
  },
  {
    id: 'res-dance-ballet-posture',
    title: 'Grace & Balance: 5 Core Ballet Arm Positions',
    category: 'Dance',
    ageGroup: '3-5',
    difficulty: 'Beginner',
    format: 'Video Guide',
    description: 'A visual guide to foundational ballet arm positions and posture conditioning for young movers.',
    estimatedMinutes: 10,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=400',
    tags: ['Ballet', 'Movement', 'Posture', 'Grace'],
    interactiveType: 'quiz',
    quizQuestions: [
      {
        question: 'When holding a graceful 1st position with your arms, what shape should your arms imagine holding?',
        options: ['A pointy sharp box', 'A soft, large beach ball', 'A straight wooden stick', 'A tiny pencil'],
        correctIndex: 1,
        explanation: 'Ballet arms curve softly as if embracing a gentle, floating sphere.'
      }
    ],
    downloadCount: 290,
    completedCount: 380
  },
  {
    id: 'res-life-skills-time-capsule',
    title: 'Daily Star Goal Planner & Focus Habit Sheet',
    category: 'Life Skills',
    ageGroup: '9-12',
    difficulty: 'Intermediate',
    format: 'Printable Worksheet',
    description: 'A printable weekly planner for breaking homework and hobbies into manageable 20-minute focus sprints.',
    estimatedMinutes: 15,
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=400',
    tags: ['Organization', 'Habits', 'Focus', 'Self-discipline'],
    interactiveType: 'worksheet',
    worksheetContent: {
      title: 'Weekly 3-Star Goal & Focus Tracker',
      instructions: 'Pick 3 priorities for the week (1 Academic, 1 Creative, 1 Kindness/Helpful act).',
      prompts: [
        'Academic Goal: _________________________________________',
        'Creative/Skill Goal: _____________________________________',
        'Community/Kindness Goal: ________________________________',
        'Daily 20-minute Focus Sprint Checklist (Mon - Sun)'
      ],
      printableSummary: 'Polaris Executive Function & Goal Setting Worksheet for youth ages 9-12.'
    },
    downloadCount: 520,
    completedCount: 390
  },
  {
    id: 'res-career-young-adult-toolkit',
    title: 'Young Adult Career, Tech & AI Navigator',
    category: 'Leadership',
    ageGroup: '18-24',
    difficulty: 'Intermediate',
    format: 'Leadership Quest',
    description: 'A structured checklist and interactive quest covering resume optimization, technical interview strategies, applied workplace AI tools, and networking mastery.',
    estimatedMinutes: 15,
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
    tags: ['Career', 'Leadership', 'Workplace AI', 'Resume', 'Networking', 'Ages 18-24'],
    interactiveType: 'quiz',
    quizQuestions: [
      {
        question: 'When optimizing your professional resume for tech and leadership roles, what should each bullet point highlight first?',
        options: [
          'A generic list of daily tasks',
          'Measurable impact and quantifiable results (e.g. % improved, $ saved, projects launched)',
          'A long paragraph explaining personal hobbies',
          'Only the job title without details'
        ],
        correctIndex: 1,
        explanation: 'Leading with action verbs and quantifiable impact demonstrates your direct value and problem-solving abilities to recruiters.'
      },
      {
        question: 'What is a best practice for using generative AI in your daily professional workflow?',
        options: [
          'Copying unverified code or text straight into production without review',
          'Using AI as a fast first-draft accelerator and brainstorming copilot while rigorously verifying accuracy',
          'Avoiding AI completely in modern tech workplaces',
          'Sharing proprietary company confidential credentials with public bots'
        ],
        correctIndex: 1,
        explanation: 'Modern professionals use AI as an intelligent multiplier while maintaining strict ethical review, accuracy checks, and privacy standards.'
      }
    ],
    downloadCount: 140,
    completedCount: 95
  }
];

export const initialEvents: EventItem[] = [
  {
    id: 'event-stem-saturday-2026',
    title: 'Community STEM & Robotics Discovery Day',
    category: 'STEM, AI & Coding',
    date: 'Saturday, September 12, 2026',
    time: '9:00 AM – 12:30 PM',
    locationType: 'In-Person Center',
    locationAddress: 'Polaris Academy Main Hall & STEM Lab, 100 North Star Blvd',
    ageRange: 'Ages 3–12 (Family Friendly)',
    ageGroup: ['3-5', '6-8', '9-12'],
    description: 'A free community celebration packed with hands-on robotics testing, dry-ice science experiments, beginner block coding demos, and stargazing telescope displays.',
    highlights: [
      'Interactive Robot Obstacle Course challenge',
      'AI Art Playground for kids and guardians',
      'Free science kit giveaways for the first 50 families',
      'Q&A session with visiting aerospace engineers'
    ],
    totalSpots: 80,
    registeredSpots: 58,
    isFree: true,
    bannerImage: 'https://i.imgur.com/XJmmc5B.jpeg',
    featured: true
  },
  {
    id: 'event-art-music-gala',
    title: 'Youth Creative Showcase & Autumn Gala',
    category: 'Arts & Creativity',
    date: 'Saturday, October 3, 2026',
    time: '10:00 AM – 1:00 PM',
    locationType: 'In-Person Center',
    locationAddress: 'Polaris Courtyard & Art Gallery',
    ageRange: 'All Ages',
    ageGroup: ['3-5', '6-8', '9-12'],
    description: 'Experience student artwork galleries, live piano and keyboard recitals, ballet choreographies, and interactive family craft stations.',
    highlights: [
      'Over 100 student paintings and clay sculptures on display',
      'Live choral and instrumental student performances',
      'Parent-child collaborative watercolor station',
      'Complimentary refreshments and healthy snacks'
    ],
    totalSpots: 120,
    registeredSpots: 84,
    isFree: true,
    bannerImage: 'https://i.imgur.com/fZWhiTM.jpeg',
    featured: true
  },
  {
    id: 'event-ai-coding-camp',
    title: 'Weekend Junior AI Hackathon & Game Jam',
    category: 'STEM, AI & Coding',
    date: 'Saturday, October 24, 2026',
    time: '9:30 AM – 3:30 PM',
    locationType: 'Hybrid',
    locationAddress: 'Polaris Tech Hub (In-Person + Zoom Stream)',
    ageRange: 'Ages 8–12',
    ageGroup: ['6-8', '9-12'],
    description: 'Teams of young creators build interactive games using Scratch and explore basic AI assistants under the guidance of volunteer software mentors.',
    highlights: [
      'Step-by-step game design tutorial',
      'Team problem-solving and presentation skills',
      'Awards for creativity, teamwork, and storytelling',
      'Lunch and mentor support provided'
    ],
    totalSpots: 40,
    registeredSpots: 32,
    isFree: true,
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 'event-parent-workshop-screen-time',
    title: 'Parent Masterclass: Raising Confident Thinkers in the Digital Age',
    category: 'Community & Family',
    date: 'Thursday, November 5, 2026',
    time: '6:00 PM – 7:30 PM',
    locationType: 'Live Online',
    locationAddress: 'Live Webinar via Polaris Parent Portal',
    ageRange: 'Parents & Guardians',
    ageGroup: ['All Ages'],
    description: 'Child psychologists and veteran educators discuss balancing screen time, fostering intrinsic curiosity, and supporting emotional regulation at home.',
    highlights: [
      'Evidence-based parenting strategies for digital balance',
      'How to turn passive screen time into active creative time',
      'Live open Q&A with child development specialists',
      'Downloadable Family Digital Agreement template'
    ],
    totalSpots: 200,
    registeredSpots: 142,
    isFree: true,
    bannerImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: 'event-ballet-open-house',
    title: 'Movement & Rhythm Open House for Little Stars',
    category: 'Ballet & Dance',
    date: 'Saturday, November 14, 2026',
    time: '9:00 AM – 10:30 AM',
    locationType: 'In-Person Center',
    locationAddress: 'Polaris Dance Studio',
    ageRange: 'Ages 3–6',
    ageGroup: ['3-5'],
    description: 'A gentle, joyful introduction to dance movement, balance beams, scarves, and classical melodies for toddlers and early learners.',
    highlights: [
      'No previous dance experience needed',
      'Parents welcome to join in the movement circle',
      'Free dance slipper sizing consultation'
    ],
    totalSpots: 25,
    registeredSpots: 19,
    isFree: true,
    bannerImage: 'https://i.imgur.com/bP54wb0.jpeg',
    featured: false
  },
  {
    id: 'event-leadership-orators',
    title: 'Junior Orators: Community Change Pitch Showcase',
    category: 'Life Skills & Leadership',
    date: 'Thursday, December 3, 2026',
    time: '5:30 PM – 7:00 PM',
    locationType: 'In-Person Center',
    locationAddress: 'Polaris Civic Hall',
    ageRange: 'Ages 8–12',
    ageGroup: ['9-12'],
    description: 'Our youth leadership cohort presents 3-minute community impact project ideas to local educators and nonprofit supporters.',
    highlights: [
      'Inspiring 3-minute youth keynote presentations',
      'Civic engagement and youth empowerment in action',
      'Reception with light refreshments'
    ],
    totalSpots: 60,
    registeredSpots: 41,
    isFree: true,
    bannerImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    featured: false
  }
];

export const initialInstructors: Instructor[] = [
  {
    id: 'inst-1',
    name: 'Dr. Evelyn Morales, Ed.D.',
    subject: 'Academic Support & Literacy Specialist',
    bio: 'With over 16 years in developmental education and curriculum design, Dr. Morales specializes in multisensory reading fluency and early mathematics comprehension.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    expertise: ['Structured Literacy', 'Singapore Math', 'Executive Functioning', 'Early Childhood Pedagogy'],
    programsTaught: ['Academic Support & Learning Enrichment'],
    education: 'Ed.D. in Child Development, Stanford University',
    approved: true,
    featured: true
  },
  {
    id: 'inst-2',
    name: 'Marcus Vance, M.S.',
    subject: 'STEM, Robotics & AI Mentor',
    bio: 'A former software robotics engineer dedicated to youth tech literacy. Marcus makes complex algorithmic and AI concepts intuitive, ethical, and fun through hands-on making.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    expertise: ['Block Coding', 'MicroPython', 'VEX Robotics', 'AI Literacy & Machine Learning'],
    programsTaught: ['STEM, AI & Junior Coding Explorers'],
    education: 'M.S. in Computer Science, Georgia Tech',
    approved: true,
    featured: true
  },
  {
    id: 'inst-3',
    name: 'Clara Lin, B.F.A.',
    subject: 'Visual Arts & Creative Expression',
    bio: 'Exhibiting artist and passionate educator with a decade of experience guiding young children in painting, clay sculpture, and storytelling through color and form.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    expertise: ['Acrylics & Watercolor', 'Clay Sculpting', 'Visual Storytelling', 'Art History for Kids'],
    programsTaught: ['Arts & Creative Expression Studio'],
    education: 'B.F.A. in Fine Arts, Rhode Island School of Design',
    approved: true,
    featured: true
  },
  {
    id: 'inst-4',
    name: 'Julian Thorne, M.Mus.',
    subject: 'Music & Instrumental Education',
    bio: 'Concert pianist and youth choir director dedicated to demystifying music notation and instilling a lifelong love for rhythm and acoustic harmony.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    expertise: ['Piano Pedagogy', 'Orff Method', 'Vocal Coaching', 'Ear Training'],
    programsTaught: ['Music Discovery & Instrument Exploration'],
    education: 'M.Mus. in Music Education, Juilliard School',
    approved: true,
    featured: false
  },
  {
    id: 'inst-5',
    name: 'Seraphina Dubois',
    subject: 'Ballet & Creative Movement',
    bio: 'Former principal dancer with classical training across Europe and North America. Seraphina combines classical precision with joyful, nurturing pedagogy.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    expertise: ['Classical Ballet Foundations', 'Kinesthetic Balance', 'Choreography', 'Creative Movement'],
    programsTaught: ['Ballet Foundations & Creative Movement'],
    education: 'Certified Royal Academy of Dance (RAD) Instructor',
    approved: true,
    featured: false
  },
  {
    id: 'inst-6',
    name: 'Aiden Campbell, J.D.',
    subject: 'Life Skills & Youth Leadership',
    bio: 'Civic advocate and youth mentor passionate about empowering young people to find their voice, lead collaborative teams, and resolve conflicts with empathy.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    expertise: ['Public Speaking', 'Peer Mediation', 'Civic Engagement', 'Youth Goal Setting'],
    programsTaught: ['Life Skills, Public Speaking & Youth Leadership'],
    education: 'J.D. & B.A. in Communications, Georgetown University',
    approved: true,
    featured: true
  },
  {
    id: 'inst-7-pending',
    name: 'Maya Patel, M.Ed.',
    subject: 'Early Childhood Science Specialist',
    bio: 'Curriculum specialist designing experiential nature and astronomy discovery modules for ages 3–6.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300',
    expertise: ['Hands-on Science', 'Inquiry-Based Learning', 'Nature Discovery'],
    programsTaught: ['STEM Explorers (Ages 3-5)'],
    education: 'M.Ed. Early Childhood Education, Boston University',
    approved: false, // Admin approval system demo
    featured: false
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Joyful Ways to Make Math Conceptual & Stress-Free at Home',
    category: 'Parent Tips',
    author: 'Dr. Evelyn Morales, Ed.D.',
    authorRole: 'Curriculum Director',
    publishDate: 'August 14, 2026',
    readTime: '4 min read',
    excerpt: 'Transform abstract numbers into tangible everyday adventures using cooking measurements, starry constellations, and visual patterns.',
    content: `Many children develop math anxiety when numbers are treated strictly as memorization drills rather than visual, conceptual discoveries.

At Polaris Academy Hub, we advocate for tactile, inquiry-based math:
1. **Bake and Measure Together**: Fraction concepts like halves, quarters, and thirds come alive when measuring flour or slicing pizzas.
2. **Spot Geometry in Everyday Architecture**: Count angles in window panes, bridge triangles, and tile patterns.
3. **Turn Bedtime Stories into Math Quests**: Ask curiosity-led questions like "If there are 3 stars on this page and 4 on the next, how many lights guide the bear?"
4. **Celebrate the Strategy, Not Just the Speed**: Praise your child’s reasoning and creative problem-solving over raw calculation time.

When children see that mathematics is the secret language of patterns in nature, confidence blossoms naturally.`,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600',
    tags: ['Math', 'Parenting', 'Early Learning', 'Confidence']
  },
  {
    id: 'blog-2',
    title: 'Why AI Literacy for Elementary Children Matters (And How to Teach It Safely)',
    category: 'STEM & AI',
    author: 'Marcus Vance, M.S.',
    authorRole: 'Robotics Lead',
    publishDate: 'August 08, 2026',
    readTime: '6 min read',
    excerpt: 'Helping young learners understand what Artificial Intelligence is, how it processes patterns, and how to use digital tools with critical thinking.',
    content: `Artificial Intelligence is no longer science fiction—it is the technological reality our children are growing up in.

Rather than shielding children from technology or letting them consume it passively, our goal is active digital empowerment:
* **The "Pattern Detective" Analogy**: We teach kids that AI is not a conscious brain, but a fast pattern-matching detective trained on historical examples.
* **Critique & Truth-Checking**: Children learn that computers can make mistakes (hallucinations) and why human oversight and ethical judgment are irreplaceable.
* **Creation Over Consumption**: Using block coding and sound classifiers, kids train mini-models to recognize their own voice or drawings.

By demystifying AI early, we replace fear with curiosity and prepare children to be responsible, ethical digital innovators.`,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
    tags: ['AI Literacy', 'Coding', 'Safety', 'Future Skills']
  },
  {
    id: 'blog-3',
    title: 'The Unsung Power of Ballet & Creative Movement in Brain Development',
    category: 'Creativity',
    author: 'Seraphina Dubois',
    authorRole: 'Dance Lead',
    publishDate: 'July 28, 2026',
    readTime: '5 min read',
    excerpt: 'How kinetic movement, cross-body coordination, and musicality strengthen neural pathways, spatial memory, and emotional poise.',
    content: `Dance is whole-brain learning in motion. When a child learns to balance on one foot while synchronizing their arms to a waltz rhythm, multiple neurological centers fire simultaneously.

Key developmental benefits:
* **Bilateral Integration**: Crossing the body’s midline enhances communication between the left and right brain hemispheres, supporting both reading fluency and motor agility.
* **Emotional Expression Without Words**: Movement provides a safe, liberating outlet for processing big emotions and building body positivity.
* **Stage Poise & Self-Assurance**: Standing tall with shoulders relaxed cultivates presence that carries over to school presentations and everyday social interactions.`,
    image: 'https://i.imgur.com/bP54wb0.jpeg',
    tags: ['Dance', 'Brain Health', 'Movement', 'Early Childhood']
  }
];

export const initialChildProfiles: ChildProfile[] = [
  {
    id: 'child-demo-1',
    firstName: 'Leo',
    lastName: 'Explorer',
    age: 7,
    ageGroup: '6-8',
    avatar: '🚀',
    interests: ['Robotics', 'Space Science', 'Drawing', 'Piano'],
    completedResourceIds: ['res-math-space-patterns', 'res-coding-rover-mission'],
    enrolledProgramIds: ['stem-ai-coding', 'arts-creativity'],
    earnedBadges: [
      {
        id: 'badge-star-starter',
        name: 'Polaris Pathfinder',
        icon: '⭐',
        unlockedAt: 'August 10, 2026',
        description: 'Completed your first 2 interactive learning challenges!'
      },
      {
        id: 'badge-code-spark',
        name: 'Junior Algorist',
        icon: '🤖',
        unlockedAt: 'August 14, 2026',
        description: 'Successfully programmed the Mars Rover logic quest!'
      }
    ],
    starsCount: 38,
    streakDays: 4,
    weeklyGoalMinutes: 60,
    completedMinutesThisWeek: 45
  },
  {
    id: 'child-demo-2',
    firstName: 'Maya',
    lastName: 'Explorer',
    age: 4,
    ageGroup: '3-5',
    avatar: '🌟',
    interests: ['Ballet', 'Music', 'Picture Books', 'Painting'],
    completedResourceIds: ['res-reading-stellar-story'],
    enrolledProgramIds: ['ballet-dance', 'arts-creativity'],
    earnedBadges: [
      {
        id: 'badge-rhythm-star',
        name: 'Melody Maker',
        icon: '🎶',
        unlockedAt: 'August 12, 2026',
        description: 'Discovered primary colors and tapped along to the 4-beat rhythm!'
      }
    ],
    starsCount: 22,
    streakDays: 2,
    weeklyGoalMinutes: 40,
    completedMinutesThisWeek: 30
  }
];

export const initialRegistrations: ProgramRegistration[] = [
  {
    id: 'reg-001',
    parentName: 'Sarah Jenkins',
    parentEmail: 'sarah.j@example.com',
    parentPhone: '(555) 342-9811',
    childName: 'Leo Jenkins',
    childAge: 7,
    programId: 'stem-ai-coding',
    programTitle: 'STEM, AI & Junior Coding Explorers',
    selectedSchedule: 'Tuesday 5:30 PM – 7:00 PM',
    status: 'Confirmed',
    emergencyContact: 'Mark Jenkins (555) 342-9812',
    registeredAt: '2026-08-10',
    notes: 'Very excited about LEGO robotics and block coding!'
  },
  {
    id: 'reg-002',
    parentName: 'David Chen',
    parentEmail: 'dchen@example.com',
    parentPhone: '(555) 891-2300',
    childName: 'Emma Chen',
    childAge: 9,
    programId: 'life-skills-leadership',
    programTitle: 'Life Skills, Public Speaking & Youth Leadership',
    selectedSchedule: 'Tuesday 5:30 PM – 7:00 PM',
    status: 'Confirmed',
    emergencyContact: 'Lin Chen (555) 891-2301',
    registeredAt: '2026-08-12'
  }
];

export const initialVolunteers: VolunteerApplication[] = [
  {
    id: 'vol-101',
    name: 'Rebecca Alvarez',
    email: 'ralvarez@example.com',
    phone: '(555) 674-1290',
    roleInterest: 'STEM & Coding Instructor',
    availability: 'Tuesday afternoons & Saturday mornings',
    experienceSummary: 'Senior Computer Science undergraduate with 2 years of after-school volunteer coding mentorship experience.',
    status: 'Interview Scheduled',
    submittedAt: '2026-08-11'
  },
  {
    id: 'vol-102',
    name: 'James O’Connor',
    email: 'joconnor@example.com',
    phone: '(555) 438-9022',
    roleInterest: 'Mentor / Tutor',
    availability: 'Thursday 4:00 PM – 7:00 PM',
    experienceSummary: 'Retired high school mathematics educator eager to support elementary children with fundamental numeracy.',
    status: 'Approved',
    submittedAt: '2026-08-05'
  }
];

export const initialDonations: DonationRecord[] = [
  {
    id: 'don-501',
    donorName: 'Elena & Thomas Vance',
    donorEmail: 'vance.family@example.com',
    amount: 150,
    frequency: 'Monthly',
    allocatedTo: 'Child Scholarship Fund',
    message: 'Thank you for giving our community children a safe, inspiring place to shine!',
    isAnonymous: false,
    donatedAt: '2026-08-01'
  },
  {
    id: 'don-502',
    donorName: 'Anonymous Community Supporter',
    donorEmail: 'supporter@example.com',
    amount: 500,
    frequency: 'One-Time',
    allocatedTo: 'STEM & Robotics Lab',
    message: 'For the purchase of new robotics sensors and microcontroller kits.',
    isAnonymous: true,
    donatedAt: '2026-08-09'
  }
];
