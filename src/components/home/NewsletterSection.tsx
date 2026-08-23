import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NewsletterSection: React.FC = () => {
  const { showToast, triggerConfettiCelebration } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid parent/guardian email address', 'error');
      return;
    }

    setSubscribed(true);
    triggerConfettiCelebration();
    showToast('You are now subscribed to the Polaris Family Weekly Dispatch!', 'success', 'Welcome to the Community');
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#050B18] via-[#0A1633] to-[#050B18] text-white relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A021]/10 border border-[#C5A021]/30 text-[#C5A021] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A021]" />
          <span>Polaris Family Dispatch</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
          Get Free Weekly STEM Experiments & Parent Guides
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join over 1,200 local parents receiving our free Saturday home science guides, book recommendations, and early access to workshop registrations.
        </p>

        {subscribed ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 p-4 rounded-2xl max-w-md mx-auto text-emerald-200 text-xs font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for subscribing! Check your inbox for your welcome STEM kit guide.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="guardian.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/90 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#C5A021] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#C5A021] hover:bg-[#D4AF37] text-slate-950 font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95 shadow-md shadow-[#C5A021]/20"
            >
              <span>Subscribe Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="text-[11px] text-slate-400 flex items-center justify-center gap-4 pt-2">
          <span>🔒 100% Spam-free</span>
          <span>•</span>
          <span>Unsubscribe anytime</span>
          <span>•</span>
          <span>Strict child privacy</span>
        </div>
      </div>
    </section>
  );
};
