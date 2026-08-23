import React from 'react';
import { CheckCircle2, Info, AlertTriangle, XCircle, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4">
      {toasts.map(toast => {
        let bgColor = 'bg-[#0B1B3D] text-white border-amber-400/40';
        let Icon = CheckCircle2;
        let iconColor = 'text-amber-400';

        if (toast.type === 'success') {
          bgColor = 'bg-slate-900 text-white border-emerald-500/50';
          Icon = CheckCircle2;
          iconColor = 'text-emerald-400';
        } else if (toast.type === 'info') {
          bgColor = 'bg-slate-900 text-white border-blue-500/50';
          Icon = Info;
          iconColor = 'text-blue-400';
        } else if (toast.type === 'warning') {
          bgColor = 'bg-slate-900 text-white border-amber-500/50';
          Icon = AlertTriangle;
          iconColor = 'text-amber-400';
        } else if (toast.type === 'error') {
          bgColor = 'bg-slate-900 text-white border-rose-500/50';
          Icon = XCircle;
          iconColor = 'text-rose-400';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md ${bgColor} animate-in slide-in-from-bottom-3 duration-200`}
          >
            <Icon className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
            <div className="flex-1 text-xs">
              {toast.title && (
                <div className="font-bold text-white mb-0.5 text-sm">
                  {toast.title}
                </div>
              )}
              <div className="text-slate-200 leading-snug">
                {toast.message}
              </div>
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-white p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
