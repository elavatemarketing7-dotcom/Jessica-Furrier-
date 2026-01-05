
import React, { useState } from 'react';
import { IMAGES, EXPERT_DATA } from '../constants';

const QUESTIONS = [
  {
    id: 1,
    question: "Qual sua principal preocupação hoje?",
    options: ["Rugas e Linhas de Expressão", "Volume Labial", "Contorno Facial", "Qualidade da Pele"]
  },
  {
    id: 2,
    question: "Você já realizou procedimentos estéticos?",
    options: ["Nunca realizei", "Sim, há mais de 1 ano", "Sim, recentemente", "Tenho medo de exageros"]
  },
  {
    id: 3,
    question: "O que você busca em um resultado?",
    options: ["Naturalidade absoluta", "Uma mudança notável", "Correção de assimetria", "Rejuvenescimento discreto"]
  },
  {
    id: 4,
    question: "Qual sua faixa etária?",
    options: ["Abaixo de 30 anos", "Entre 30 e 45 anos", "Acima de 45 anos", "Prefiro não dizer"]
  }
];

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [isIntro, setIsIntro] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Background Overlay to show the site behind */}
      <div className="absolute inset-0 bg-premium-dark/40 backdrop-blur-md" onClick={onCancel}></div>
      
      {/* Quiz Container */}
      <div className="relative w-full max-w-md bg-premium-cream rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Compact Quiz Header - Always visible */}
        <div className="relative h-28 bg-premium-dark flex items-center justify-center p-4 shrink-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={IMAGES.authority2} alt="Background" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-2 border-premium-gold p-0.5 shadow-lg bg-white mb-1.5 transform -translate-y-1 overflow-hidden">
               <img src={IMAGES.hero} alt="Dra. Jessica" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-white font-display text-sm font-semibold tracking-wide">
              {EXPERT_DATA.name}
            </h2>
            <p className="text-premium-gold text-[8px] uppercase tracking-widest font-bold">Protocolo de Harmonização</p>
          </div>

          <button 
            onClick={onCancel}
            className="absolute top-4 right-6 text-white/50 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar (Only during questions) */}
        {!isIntro && (
          <div className="w-full h-1 bg-gray-200">
            <div 
              className="h-full bg-premium-gold transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Intro Step */}
        {isIntro ? (
          <div className="p-8 flex flex-col items-center text-center space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="relative group">
              {/* Moldura (Frame) */}
              <div className="absolute -inset-2 border border-premium-gold/30 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform"></div>
              <div className="absolute -inset-2 border border-premium-gold/30 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform delay-75"></div>
              <div className="relative w-40 h-52 bg-white rounded-xl border-4 border-white shadow-xl overflow-hidden">
                <img src={IMAGES.authority2} alt="Dra. Jessica Intro" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-premium-dark leading-tight">
                Olá, eu sou a <br/> <span className="text-premium-gold italic">Dra. Jessica Furrier</span>
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed px-4">
                Preparei uma breve avaliação para entender melhor seus objetivos e indicar o protocolo ideal para você.
              </p>
            </div>

            <button 
              onClick={() => setIsIntro(false)}
              className="w-full py-4 bg-premium-gold text-premium-dark font-bold text-base rounded-2xl shadow-lg transform active:scale-95 transition-all"
            >
              INICIAR MINHA AVALIAÇÃO
            </button>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium italic">Leva menos de 1 minuto</p>
          </div>
        ) : (
          /* Question Body */
          <div className="flex-1 p-6 flex flex-col">
            <div className="mb-6">
              <span className="text-premium-gold font-bold text-xs block mb-1">Passo {currentStep + 1} de {QUESTIONS.length}</span>
              <h3 className="text-xl font-display font-bold text-premium-dark leading-tight">
                {QUESTIONS[currentStep].question}
              </h3>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto max-h-[40vh] pr-1 scrollbar-hide">
              {QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full p-4 text-left bg-white border border-gray-100 rounded-2xl text-premium-dark font-medium transition-all shadow-sm hover:border-premium-gold hover:bg-premium-gold/5 active:scale-[0.98] flex items-center justify-between group"
                >
                  <span className="text-sm">{option}</span>
                  <div className="w-5 h-5 rounded-full border border-gray-200 group-hover:border-premium-gold flex items-center justify-center shrink-0 ml-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-premium-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-[9px] uppercase tracking-widest">Sua beleza é única e merece um plano exclusivo</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
