
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';

interface QuizResultProps {
  answers: string[];
  onProceed: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ answers, onProceed }) => {
  const handleWhatsAppShare = (direct: boolean = false) => {
    const baseMessage = direct 
      ? "Gostaria de mais informações e agendar uma consulta?!"
      : `Olá Dra. Jessica, finalizei minha avaliação no site! Minhas respostas: ${answers.join(', ')}. Gostaria de agendar minha consulta.`;
    const encoded = encodeURIComponent(baseMessage);
    const url = `https://api.whatsapp.com/send/?phone=554198540524&text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 bg-premium-dark flex flex-col items-center justify-between py-6 px-6 text-center text-white overflow-hidden z-[60]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-premium-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-premium-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-md w-full z-10 flex flex-col h-full justify-between fade-in">
        {/* Header Text - Highly Compact */}
        <div className="space-y-2">
          <div className="inline-block py-0.5 px-3 bg-premium-gold/20 border border-premium-gold/30 rounded-full text-premium-gold text-[10px] font-bold uppercase tracking-widest">
            Avaliação Concluída
          </div>
          <h1 className="text-2xl font-display font-bold leading-tight">
            Perfil Compatível.<br/>
            <span className="text-premium-gold">Você é a Paciente ideal.</span>
          </h1>
          <p className="text-white/80 text-sm font-light leading-snug px-2">
            Com base nas suas respostas, o Método da <span className="font-semibold text-premium-gold">Dra. {EXPERT_DATA.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>
        </div>

        {/* Authority Image - Responsive height to fit screen */}
        <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-premium-gold/10 blur-2xl scale-75"></div>
          <div className="relative rounded-2xl overflow-hidden border border-premium-gold/40 shadow-2xl h-full max-h-[35vh] aspect-[4/5]">
            <img 
              src={IMAGES.authority2} 
              alt="Dra. Jessica Furrier" 
              className="w-full h-full object-cover object-top" 
            />
          </div>
        </div>

        {/* CTA Buttons - Compact & Consistent */}
        <div className="flex flex-col gap-3 w-full shrink-0">
          <button 
            onClick={() => handleWhatsAppShare(false)}
            className="w-full py-4 bg-premium-gold text-premium-dark font-bold text-sm rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>1 - ENVIAR MINHA AVALIAÇÃO À DRA</span>
          </button>
          
          <button 
            onClick={() => handleWhatsAppShare(true)}
            className="w-full py-4 bg-white/10 border border-premium-gold/50 text-premium-gold font-bold text-sm rounded-xl active:scale-95 transition-all"
          >
            2 - CHAMAR NO WHATSAPP SEM COMPROMISSO
          </button>

          <button 
            onClick={onProceed}
            className="w-full py-4 bg-transparent border border-white/20 text-white/70 font-medium text-sm rounded-xl active:scale-95 transition-all"
          >
            3 - NÃO ENVIAR E CONTINUAR NO SITE
          </button>
        </div>

        {/* Footer micro-text */}
        <div className="mt-4">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">Exclusividade Jessica Furrier</p>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
