
import React, { useState, useEffect } from 'react';
import { IMAGES, EXPERT_DATA } from '../constants';

interface AnalyzingProps {
  onComplete: () => void;
}

const Analyzing: React.FC<AnalyzingProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-premium-dark flex flex-col items-center justify-center p-8 text-white">
      {/* Background Hero Influence */}
      <div className="absolute inset-0 opacity-10 grayscale">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-xs text-center space-y-8">
        {/* Animated Icon */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="absolute inset-0 border-2 border-premium-gold/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-t-2 border-premium-gold rounded-full animate-spin"
            style={{ animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={IMAGES.hero} 
              alt="Dra Jessica" 
              className="w-16 h-16 rounded-full object-cover border-2 border-premium-gold/50 shadow-lg"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-display font-bold text-premium-gold animate-pulse tracking-wide">
            Analisando...
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Estamos processando suas respostas para encontrar o protocolo perfeito para sua face.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-premium-gold shadow-[0_0_15px_rgba(197,160,89,0.8)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-white/30">
            <span>Sincronizando</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        <div className="pt-4 italic text-xs text-white/40">
          "A beleza está nos detalhes..."
        </div>
      </div>
    </div>
  );
};

export default Analyzing;
