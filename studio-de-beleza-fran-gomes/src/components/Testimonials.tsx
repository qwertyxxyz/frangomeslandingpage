import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { BUSINESS } from '../config/business';
import { SpotlightBlurCard } from './SpotlightBlurCard';

export const Testimonials: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-[#F5EFE6] relative overflow-hidden">
      {/* 21st.dev Ambient Blur Orbs */}
      <div
        className="absolute top-10 right-10 w-96 h-96 bg-[#E8D8C5]/50 rounded-full blur-[110px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-[#B69A70]/15 rounded-full blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70] block mb-3">
              Depoimentos de Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#382923] tracking-tight mb-4">
              A confiança de quem já viveu a experiência.
            </h2>
            <p className="text-sm sm:text-base text-[#5A453A]">
              Conheça algumas opiniões compartilhadas por clientes que confiam nos cuidados do Studio Fran Gomes.
            </p>
          </div>

          {/* Google Score Capsule Card with frosted glass blur */}
          <div className="group flex items-center gap-4 bg-white/70 hover:bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#E8D8C5] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="w-12 h-12 rounded-xl bg-[#E8D8C5]/40 group-hover:bg-[#E8D8C5] flex items-center justify-center font-serif text-2xl font-bold text-[#382923] transition-colors duration-300 shadow-xs">
              5.0
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#B69A70] mb-1 transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#5A453A]">
                Nota máxima no Google · <strong className="text-[#382923]">186 avaliações</strong>
              </p>
            </div>
          </div>
        </div>

        {/* 3 Testimonials with 21st.dev Spotlight Blur Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <SpotlightBlurCard
              key={item.id}
              glowColor="rgba(182, 154, 112, 0.2)"
              className="bg-white/80 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-[#E8D8C5]/80 shadow-[0_4px_24px_-12px_rgba(56,41,35,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(56,41,35,0.16)] hover:border-[#B69A70]/60 hover:-translate-y-2 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B69A70]/40 group-hover:text-[#B69A70] transition-all duration-300 group-hover:scale-115 mb-4" />

                <div className="flex items-center gap-1 text-[#B69A70] mb-4 transition-transform duration-300 group-hover:scale-105" aria-label={`Avaliação de 5 estrelas`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#5A453A] leading-relaxed italic mb-6 group-hover:text-[#382923] transition-colors duration-300">
                  “{item.content}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF7F2] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#382923] font-serif transition-colors duration-300 group-hover:text-[#96734A]">
                    {item.author}
                  </h3>
                  {item.serviceMentioned && (
                    <span className="text-xs text-[#8C7667]">
                      {item.serviceMentioned}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-[#B69A70] font-medium tracking-wide uppercase">
                  Google Review
                </span>
              </div>
            </SpotlightBlurCard>
          ))}
        </div>

        {/* CTA to Google Reviews with diffused blur glow on hover */}
        <div className="mt-12 text-center">
          <div className="inline-flex relative group/glowreviews">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#B69A70]/30 to-[#D8B8AC]/40 opacity-0 group-hover/glowreviews:opacity-100 blur-lg transition-opacity duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <a
              href={BUSINESS.urls.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#382923] hover:text-white bg-white hover:bg-[#382923] border border-[#E8D8C5] hover:border-[#382923] hover:-translate-y-1 hover:scale-105 active:scale-95 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-lg"
            >
              <span>Conhecer mais avaliações</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A70] group-hover/glowreviews:text-[#E8D8C5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/glowreviews:translate-x-0.5 group-hover/glowreviews:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
