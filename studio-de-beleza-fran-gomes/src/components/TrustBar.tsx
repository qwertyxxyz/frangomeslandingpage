import React from 'react';
import { HeartHandshake, Sparkles, Smile, ShieldCheck } from 'lucide-react';
import { SpotlightBlurCard } from './SpotlightBlurCard';

const DIFFERENTIALS = [
  {
    icon: HeartHandshake,
    title: 'Atendimento atencioso',
    description: 'Dedicação personalizada e acolhimento para ouvir você em cada detalhe.',
  },
  {
    icon: Sparkles,
    title: 'Cuidado em cada detalhe',
    description: 'Atenção minuciosa para valorizar suas características com naturalidade.',
  },
  {
    icon: Smile,
    title: 'Beleza e autoestima',
    description: 'Procedimentos pensados para você se sentir ainda mais segura e radiante.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromisso com a experiência',
    description: 'Um momento de tranquilidade e carinho reservado especialmente para você.',
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section className="relative border-y border-[#E8D8C5]/80 bg-[#FAF7F2]/60 backdrop-blur-md py-8 sm:py-10 overflow-hidden">
      {/* Soft blur light streak */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B69A70]/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <SpotlightBlurCard
                key={index}
                glowColor="rgba(182, 154, 112, 0.18)"
                className="flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-10px_rgba(56,41,35,0.1)] border border-[#E8D8C5]/70 hover:border-[#B69A70]/60"
              >
                <div className="w-11 h-11 rounded-full bg-[#E8D8C5]/50 flex items-center justify-center text-[#96734A] mb-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115 group-hover:bg-[#B69A70] group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(182,154,112,0.4)]">
                  <Icon className="w-5 h-5 stroke-[1.75] transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h2 className="text-base font-semibold text-[#382923] mb-1 font-sans transition-colors duration-300 group-hover:text-[#96734A]">
                  {diff.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#5A453A] leading-relaxed transition-colors duration-300 group-hover:text-[#382923]">
                  {diff.description}
                </p>
              </SpotlightBlurCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
