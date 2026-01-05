
import React from 'react';
import { IMAGES, EXPERT_DATA } from '../constants';

interface InitialSelectionProps {
  onStartQuiz: () => void;
  onGoDirect: () => void;
}

const InitialSelection: React.FC<InitialSelectionProps> = ({ onStartQuiz, onGoDirect }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-premium-dark text-white text-center overflow-hidden">
      {/* Background Decor - Increased opacity for better expert visibility */}
      <div className="absolute inset-0 opacity-50">
        <img 
          src={IMAGES.hero} 
          alt="Jessica Furrier" 
          className="w-full h-full object-cover object-top md:object-center filter grayscale-[0.2]" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-premium-dark/40 via-premium-dark/70 to-premium-dark"></div>

      {/* Content */}
      <div className="relative z-10 max-w-md w-full space-y-8 fade-in">
        <div className="space-y-2">
          <p className="text-premium-gold tracking-widest uppercase text-sm font-semibold">Seja bem-vinda</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight drop-shadow-lg">
            Descubra sua melhor versão com <span className="text-premium-gold italic">Jessica Furrier</span>
          </h1>
        </div>

        <div className="space-y-4 pt-6">
          <button 
            onClick={onStartQuiz}
            className="w-full py-5 bg-premium-gold text-premium-dark font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.5)] transform transition hover:scale-105 active:scale-95"
          >
            FAZER AVALIAÇÃO PERSONALIZADA
          </button>
          
          <button 
            onClick={onGoDirect}
            className="w-full py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium text-lg rounded-full transform transition hover:bg-white/20"
          >
            Ir direto para o site
          </button>
        </div>

        <p className="text-white/70 text-xs italic pt-4 drop-shadow-md font-medium">
          A avaliação leva menos de 1 minuto e garante um atendimento exclusivo.
        </p>
      </div>
    </div>
  );
};

export default InitialSelection;
