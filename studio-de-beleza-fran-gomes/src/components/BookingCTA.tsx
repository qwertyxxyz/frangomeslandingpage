import React from 'react';
import { MessageCircle, MapPin, Sparkles, Calendar } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';

export const BookingCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#241A16] text-[#FAF7F2] relative overflow-hidden">
      {/* 21st.dev / cult.ui Moving Aurora Blur Mesh */}
      <div
        className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-gradient-to-tr from-[#B69A70]/30 via-[#D8B8AC]/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-float-blur-1"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-40px] left-10 w-[380px] h-[380px] bg-gradient-to-br from-[#E8D8C5]/20 via-[#B69A70]/15 to-transparent rounded-full blur-[100px] pointer-events-none animate-float-blur-2"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B69A70] px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-[#B69A70]" />
          <span>Agendamento & Atendimento</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#FAF7F2] tracking-tight mb-6 text-balance">
          Seu próximo momento de autocuidado{' '}
          <span className="italic font-normal text-[#E8D8C5]">começa aqui.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#E8D8C5]/85 max-w-2xl mx-auto leading-relaxed mb-10">
          Escolha o cuidado que combina com você e entre em contato para consultar os horários
          disponíveis. Atendimento atencioso e personalizado no bairro Eldorado, Contagem.
        </p>

        {/* Action Buttons with 21st.dev Diffused Blur Bloom */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 max-w-md mx-auto">
          {/* Primary Button with warm diffused glow */}
          <div className="relative group/glowcta inline-flex w-full sm:w-auto">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#E8D8C5] via-[#B69A70] to-[#FAF7F2] opacity-40 group-hover/glowcta:opacity-90 blur-xl transition-all duration-500 group-hover/glowcta:scale-105 pointer-events-none"
              aria-hidden="true"
            />
            <a
              href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#241A16] bg-[#E8D8C5] hover:bg-white hover:-translate-y-1 hover:scale-105 active:scale-95 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl hover:shadow-2xl overflow-hidden"
            >
              {/* Shimmer sweep */}
              <div
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover/glowcta:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none"
                aria-hidden="true"
              />
              <MessageCircle className="w-4 h-4 text-[#241A16] transition-transform duration-300 group-hover/glowcta:scale-110" />
              <span>Agendar pelo WhatsApp</span>
            </a>
          </div>

          {/* Secondary Button with frosted glass border */}
          <a
            href="#contato"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] hover:text-[#E8D8C5] bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#E8D8C5]/50 hover:-translate-y-1 hover:scale-105 active:scale-95 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md"
          >
            <MapPin className="w-4 h-4 text-[#B69A70] transition-transform duration-300 group-hover:scale-110" />
            <span>Ver localização</span>
          </a>
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E8D8C5]/70">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#B69A70]" />
            <span>Horários flexíveis sob consulta</span>
          </div>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Resposta rápida no WhatsApp: (31) 98019-3190</span>
        </div>
      </div>
    </section>
  );
};
