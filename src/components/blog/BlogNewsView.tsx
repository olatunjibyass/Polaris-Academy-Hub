import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Sparkles, 
  ArrowRight, 
  Tag,
  Share2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BlogPost } from '../../types';

export const BlogNewsView: React.FC = () => {
  const { blogPosts } = useApp();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Early Childhood', 'STEM & Coding', 'Arts & Movement', 'Parenting & Leadership'];

  const filteredPosts = blogPosts.filter(p => {
    return selectedTag === 'All' || p.category === selectedTag;
  });

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner */}
        <div className="bg-[#0B1B3D] rounded-3xl p-8 sm:p-12 text-white border border-amber-400/20 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Polaris Academy Journal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
              Educational Insights, News & Stories
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Research-backed parenting tips, early STEM pedagogics, creative movement benefits, and student project highlights published weekly by our educational team.
            </p>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTag === tag
                  ? 'bg-[#0B1B3D] text-amber-400 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1B3D]/90 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-400/30">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 hover:text-blue-900 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="pt-2 text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>By {post.author}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#0B1B3D] text-slate-800 hover:text-amber-400 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Full Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 relative my-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-amber-600 uppercase">
                  {selectedPost.category} • {selectedPost.readTime}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-3 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span>By <strong>{selectedPost.author}</strong></span>
                <span>•</span>
                <span>Published on {selectedPost.publishedAt}</span>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
                {selectedPost.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 text-xs">
                <span className="text-slate-500 font-sans">
                  Published by Polaris Academy Hub Educational Research Desk
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2 rounded-xl text-xs hover:bg-[#163273]"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
