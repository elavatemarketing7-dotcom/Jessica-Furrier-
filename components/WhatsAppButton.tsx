
import React from 'react';
import { EXPERT_DATA } from '../constants';

interface WhatsAppButtonProps {
  text: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, className = "" }) => {
  const handleClick = () => {
    window.open(EXPERT_DATA.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      className={`inline-flex items-center gap-4 py-5 px-10 bg-premium-gold text-premium-dark font-bold text-lg rounded-full shadow-[0_15px_40px_rgba(197,160,89,0.4)] hover:shadow-[0_20px_50px_rgba(197,160,89,0.5)] transform hover:-translate-y-1 transition-all active:scale-95 group overflow-hidden relative ${className}`}
    >
      <span className="relative z-10">{text}</span>
      <svg 
        className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 group-hover:left-full"></div>
    </button>
  );
};

export default WhatsAppButton;
