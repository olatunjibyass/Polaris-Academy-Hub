import React, { useState } from 'react';
import { Sparkles, Camera, ArrowRight, Heart, Star, CheckCircle2, Eye } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'All' | 'STEM & Robotics' | 'Arts & Painting' | 'Ballet & Dance' | 'Music Studio' | 'Learning & Reading';
  ageGroup: string;
  imageUrl: string;
  caption: string;
  tag: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Robotics & Micro-Controller Testing',
    category: 'STEM & Robotics',
    ageGroup: 'Ages 7–12',
    imageUrl: 'https://i.imgur.com/XJmmc5B.jpeg',
    caption: 'Students assembling sensor-driven obstacle avoidance rovers in our dedicated Makerspace.',
    tag: 'STEM Lab'
  },
  {
    id: 'gal-2',
    title: 'Ballet & Graceful Posture Workshop',
    category: 'Ballet & Dance',
    ageGroup: 'Ages 4–10',
    imageUrl: 'https://i.imgur.com/bP54wb0.jpeg',
    caption: 'Little dancers mastering balance, poise, and expressive storytelling through classical movement.',
    tag: 'Dance Studio'
  },
  {
    id: 'gal-3',
    title: 'Acrylic Canvas & Color Theory Atelier',
    category: 'Arts & Painting',
    ageGroup: 'Ages 5–12',
    imageUrl: 'https://i.imgur.com/fZWhiTM.jpeg',
    caption: 'Exploring vibrant brushstrokes, textural mixed-media, and imaginative galactic scenery.',
    tag: 'Visual Arts'
  },
  {
    id: 'gal-4',
    title: 'Junior Piano & Melodic Rhythms',
    category: 'Music Studio',
    ageGroup: 'Ages 6–12',
    imageUrl: 'https://i.imgur.com/GXE0qA6.jpeg',
    caption: 'Discovering notation, rhythm timing, and keyboard ear training with patient instructor guidance.',
    tag: 'Music Hall'
  },
  {
    id: 'gal-5',
    title: 'Guided Reading Circle & Homework Club',
    category: 'Learning & Reading',
    ageGroup: 'Ages 3–8',
    imageUrl: 'https://i.imgur.com/VKqsl7H.jpeg',
    caption: 'Cozy small-group literacy sessions where early readers build vocabulary and comprehension joy.',
    tag: 'Learning Hub'
  },
  {
    id: 'gal-6',
    title: 'Hands-On Science Chemistry Reactions',
    category: 'STEM & Robotics',
    ageGroup: 'Ages 6–11',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=900',
    caption: 'Safe, colorful density and crystal growth experiments that make scientific theory fun and tactile.',
    tag: 'Discovery Lab'
  },
  {
    id: 'gal-7',
    title: 'Youth Leadership & Team Problem Solving',
    category: 'Learning & Reading',
    ageGroup: 'Ages 8–12',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=900',
    caption: 'Collaborative projects cultivating public speaking, peer empathy, and creative debate.',
    tag: 'Leadership'
  },
  {
    id: 'gal-8',
    title: 'Interactive Math Games & Logic Puzzles',
    category: 'STEM & Robotics',
    ageGroup: 'Ages 4–9',
    imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=900',
    caption: 'Tactile manipulatives and Singapore math challenges transforming abstract numbers into play.',
    tag: 'Math Studio'
  }
];

export const PhotoGallerySection: React.FC = () => {
  const { setCurrentPage, openModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = ['All', 'STEM & Robotics', 'Arts & Painting', 'Ballet & Dance', 'Music Studio', 'Learning & Reading'];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-200 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#C5A021]" />
            <span>Moments in Action • Polaris Academy Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1E4A] tracking-tight font-heading">
            Inside Our Studios & <span className="text-[#C5A021]">Creative Labs</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Take a look at the smiles, breakthroughs, and collaborative projects taking place every week across our hands-on educational spaces.
          </p>

          {/* Category Tabs in Blue, Gold, and White */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#0A1E4A] text-white shadow-md ring-2 ring-[#C5A021]'
                      : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-100 hover:border-blue-200 shadow-xs'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Bento Grid with rich photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-blue-100 shadow-md hover:shadow-xl hover:border-[#C5A021] transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Photo Image with overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0A1E4A]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-[#C5A021]/50 shadow-sm">
                  {photo.tag}
                </div>

                {/* Age Tag */}
                <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                  {photo.ageGroup}
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute inset-0 bg-[#0A1E4A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-[#0A1E4A] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5 text-[#0A1E4A]" />
                  </div>
                </div>
              </div>

              {/* Photo Caption Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-white">
                <div>
                  <h3 className="font-bold text-sm text-[#0A1E4A] group-hover:text-blue-700 transition-colors font-heading leading-tight line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-700 font-semibold">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A021] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0A1E4A] via-[#102E72] to-[#0A1E4A] rounded-3xl p-8 text-white border border-[#C5A021]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-[#C5A021] flex items-center justify-center text-[#C5A021] shrink-0 shadow-lg">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Want to Experience Our Programs in Person?
              </h3>
              <p className="text-sm text-blue-100 max-w-xl mt-1">
                Schedule a free Saturday family visit or reserve a spot in our upcoming hands-on discovery workshops.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => openModal('registration')}
              className="bg-[#C5A021] hover:bg-[#D4AF37] text-slate-950 font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-[#C5A021]/30 transition-transform active:scale-95"
            >
              <span>Enroll Your Child Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage('programs')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm border border-white/30 transition-colors"
            >
              Browse All 12 Programs
            </button>
          </div>
        </div>

        {/* Modal Lightbox for photo viewing */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedPhoto(null)}>
            <div 
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border-2 border-[#C5A021] shadow-2xl animate-in zoom-in-95 duration-200" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 bg-slate-900">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 left-3 bg-[#0A1E4A]/90 text-white text-xs font-bold px-3 py-1 rounded-lg border border-[#C5A021]/50">
                  {selectedPhoto.tag} • {selectedPhoto.ageGroup}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0A1E4A] font-heading">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedPhoto.caption}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free Community Program Access</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedPhoto(null);
                      openModal('registration');
                    }}
                    className="bg-[#0A1E4A] hover:bg-blue-900 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 border border-[#C5A021]/50"
                  >
                    <span>Register for this Program</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A021]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
