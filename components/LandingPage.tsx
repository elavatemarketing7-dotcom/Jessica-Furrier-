
import React, { useState } from 'react';
import { EXPERT_DATA, IMAGES, RESULTS, LIFESTYLE } from '../constants';
import Gallery from './Gallery';
import WhatsAppButton from './WhatsAppButton';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION - REDESIGNED FOR MAX VISIBILITY */}
      <section className="relative min-h-screen flex flex-col bg-premium-dark text-white overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute top-0 right-0 w-full h-full lg:w-2/3 lg:h-full overflow-hidden">
            <img 
              src={IMAGES.hero} 
              alt="Dra. Jessica Furrier" 
              className="w-full h-full object-cover object-top md:object-right-top scale-105" 
            />
            {/* Desktop Gradient Overlay */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-premium-dark via-premium-dark/40 to-transparent"></div>
            {/* Mobile Gradient Overlay */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-premium-dark via-premium-dark/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col justify-end lg:justify-center p-8 lg:p-20 max-w-7xl mx-auto w-full">
          <div className="space-y-6 max-w-2xl lg:bg-transparent lg:p-0 bg-premium-dark/40 backdrop-blur-[2px] p-6 rounded-3xl lg:rounded-none">
            <h2 className="text-premium-gold font-display text-xl md:text-2xl italic tracking-wide">Seu momento de brilhar</h2>
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight">
              Eu sou <span className="text-premium-gold">Jessica Furrier</span>, e sua beleza é meu <span className="italic">compromisso</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed">
              Harmonização Facial de alta performance em Pinhais-PR. Resultados que preservam sua essência e elevam sua autoestima.
            </p>
            <div className="pt-4 flex flex-col items-start gap-4">
              <WhatsAppButton text="AGENDAR CONSULTA NO WHATSAPP" />
              <p className="text-white/60 text-xs italic ml-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Vagas limitadas para este mês
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU (Autoridade) */}
      <section className="py-20 px-8 bg-premium-cream">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-premium-gold/30 rounded-3xl group-hover:top-0 group-hover:left-0 transition-all duration-500"></div>
              <img src={IMAGES.authority3} alt="Jessica" className="relative z-10 rounded-3xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-premium-dark">Minha Missão é a sua <span className="text-premium-gold italic underline underline-offset-8 decoration-1">Confiança</span></h2>
            <div className="space-y-4 text-premium-dark/80 text-lg font-light leading-relaxed">
              <p>
                Não acredito em fórmulas prontas ou rostos padronizados. Meu olhar é treinado para identificar o que te torna única e potencializar isso através de técnicas avançadas.
              </p>
              <p>
                Como especialista em Harmonização Facial, desenvolvi um método que prioriza a saúde da pele e a harmonia estrutural.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Avaliação individualizada",
                  "Produtos Premium",
                  "Foco em Naturalidade",
                  "Acompanhamento Pós"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-premium-gold/10">
                    <svg className="w-5 h-5 text-premium-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS (Galeria) */}
      <section className="py-20 bg-white">
        <div className="text-center px-8 mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Transformações de <span className="text-premium-gold">Impacto</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Resultados reais de pacientes que escolheram a naturalidade como prioridade. Clique para ampliar.</p>
        </div>
        
        <div className="px-4">
          <Gallery images={RESULTS} />
        </div>
        
        <div className="text-center mt-12 px-8">
          <p className="text-gray-400 text-xs italic">Aviso: Os resultados podem variar de pessoa para pessoa. Cada face é única.</p>
        </div>
      </section>

      {/* 4. MAIS PROVAS (Bastidores) */}
      <section className="py-20 bg-premium-dark overflow-hidden">
        <div className="text-center px-8 mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Bastidores & <span className="text-premium-gold">Atendimento</span></h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto font-light">Conheça um pouco do ambiente e do cuidado dedicado a cada paciente.</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-8 pb-8 no-scrollbar scroll-smooth">
          {LIFESTYLE.map((img, idx) => (
            <div key={idx} className="shrink-0 w-72 h-96 rounded-2xl overflow-hidden border border-white/10 group">
              <img src={img} alt={`Bastidores ${idx + 1}`} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. POR QUE CONFIAR EM MIM */}
      <section className="py-20 px-8 bg-premium-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-premium-dark">Diferenciais que fazem a <span className="text-premium-gold">diferença</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Avaliação Honestíssima", 
                desc: "Eu só recomendo o que realmente trará benefício para o seu caso. Menos é mais.",
                icon: "✨"
              },
              { 
                title: "Atendimento 1-on-1", 
                desc: "Nada de clínica lotada. O seu horário é sagrado e focado 100% em você.",
                icon: "👤"
              },
              { 
                title: "Pós-procedimento", 
                desc: "Minha responsabilidade não acaba quando o procedimento termina. Estarei com você.",
                icon: "🛡️"
              },
              { 
                title: "Técnica Refinada", 
                desc: "Constante atualização com o que há de mais moderno no mundo da estética.",
                icon: "🎓"
              },
              { 
                title: "Segurança Médica", 
                desc: "Protocolos rigorosos de biossegurança para sua total tranquilidade.",
                icon: "🏥"
              },
              { 
                title: "Clareza Total", 
                desc: "Explico cada etapa do processo para que você se sinta segura na decisão.",
                icon: "💡"
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-premium-gold/10 rounded-3xl bg-white hover:bg-premium-gold/5 transition-colors shadow-sm group">
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-premium-dark">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA INTERMEDIARIO */}
      <section className="py-24 px-8 bg-premium-gold relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMAGES.authority2} alt="" className="w-full h-full object-cover grayscale brightness-0" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-premium-dark">Você ainda tem alguma dúvida se esse é o seu momento?</h2>
          <p className="text-xl text-premium-dark/80 italic font-medium">A primeira consulta é o passo mais seguro para tirar qualquer receio.</p>
          <div className="flex justify-center pt-4">
             <WhatsAppButton text="CONVERSAR NO WHATSAPP AGORA" />
          </div>
        </div>
      </section>

      {/* 7. COMO FUNCIONA */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
           <h2 className="text-3xl font-display font-bold text-premium-dark uppercase tracking-widest">Sua Jornada</h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {[
            { step: "01", title: "Contato Inicial", desc: "Clique no botão e fale comigo ou com minha equipe pelo WhatsApp para agendamento." },
            { step: "02", title: "Avaliação Exclusiva", desc: "No consultório, faremos uma análise profunda da sua anatomia e desejos." },
            { step: "03", title: "Seu Momento", desc: "Realização do procedimento com todo cuidado, calma e precisão técnica." }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 text-center space-y-4">
              <div className="text-6xl font-display font-bold text-premium-gold/20 mb-[-30px]">{item.step}</div>
              <h3 className="text-xl font-bold text-premium-dark relative z-20">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-premium-gold/10 -z-0"></div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-8 bg-premium-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="w-24 h-1 bg-premium-gold mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-premium-dark leading-tight">
            Pronta para despertar o <span className="italic">melhor</span> que existe em você?
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Não adie a sua autoestima. Clique no botão abaixo e garanta seu horário para uma avaliação personalizada.
          </p>
          <div className="pt-8">
            <WhatsAppButton text="QUERO MINHA AVALIAÇÃO AGORA" />
          </div>
          <p className="text-premium-gold font-bold uppercase tracking-widest text-sm pt-4 italic">Sem compromisso. Apenas cuidado.</p>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-bold text-gray-50 opacity-[0.03] select-none pointer-events-none uppercase whitespace-nowrap">
          {EXPERT_DATA.name}
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-premium-dark text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">
          <div className="text-center">
            <h3 className="signature text-5xl text-premium-gold mb-3">{EXPERT_DATA.name}</h3>
            <p className="text-sm font-light tracking-[0.3em] uppercase opacity-70">{EXPERT_DATA.profession}</p>
          </div>
          
          <div className="flex gap-10">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-premium-gold transition-colors font-medium border-b border-white/10 hover:border-premium-gold pb-1"
            >
              Instagram
            </a>
            <button 
              onClick={() => window.open(EXPERT_DATA.whatsapp, '_blank', 'noopener,noreferrer')}
              className="text-white/60 hover:text-premium-gold transition-colors font-medium border-b border-white/10 hover:border-premium-gold pb-1"
            >
              WhatsApp
            </button>
          </div>
          
          <div className="text-center text-xs text-white/30 space-y-2 border-t border-white/10 pt-10 w-full max-w-sm">
            <p className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {EXPERT_DATA.address}
            </p>
            <p>© {new Date().getFullYear()} • Elevando padrões em Pinhais-PR.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
