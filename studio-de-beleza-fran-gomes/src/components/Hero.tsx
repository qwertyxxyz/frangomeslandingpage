import React from 'react';
import { Star, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';
import { ImageWithFallback } from './ImageWithFallback';
import { IMAGES } from '../assets/images';

export const Hero: React.FC = () => {
  // 21st.dev / cult.ui word-by-word blur-in reveal
  const headlineWords = [
    { text: 'Sua', highlight: false },
    { text: 'beleza', highlight: false },
    { text: 'merece', highlight: false },
    { text: 'um', highlight: false },
    { text: 'cuidado', highlight: true },
    { text: 'extraordinário.', highlight: true },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* 21st.dev / cult.ui Ambient Floating Aurora Blur Mesh */}
      <div
        className="absolute top-10 right-1/4 w-[480px] h-[480px] bg-gradient-to-tr from-[#E8D8C5]/60 via-[#B69A70]/30 to-[#D8B8AC]/40 rounded-full blur-[110px] pointer-events-none -z-10 animate-float-blur-1"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-[-50px] w-[420px] h-[420px] bg-gradient-to-br from-[#D8B8AC]/40 via-[#E8D8C5]/30 to-[#FAF7F2] rounded-full blur-[100px] pointer-events-none -z-10 animate-float-blur-2"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker with blur-in entrance */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(8px)', y: -8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70] px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#E8D8C5]/80 shadow-[0_2px_12px_-4px_rgba(182,154,112,0.15)] hover:shadow-[0_4px_16px_-4px_rgba(182,154,112,0.3)] transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B69A70]" />
              <span>{BUSINESS.tagline}</span>
            </motion.div>

            {/* Headline with 21st.dev word-by-word blur-reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] font-serif tracking-tight text-[#382923] text-balance mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block mr-2.5 ${
                    word.highlight
                      ? 'italic font-normal text-[#96734A]'
                      : 'font-normal'
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </h1>

            {/* Supporting Prose with subtle blur reveal */}
            <motion.p
              initial={{ opacity: 0, filter: 'blur(6px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#5A453A] leading-relaxed max-w-xl mb-8"
            >
              {BUSINESS.subheadline}
            </motion.p>

            {/* Actions with cult.ui Diffuse Blur Glow on Hover */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(6px)', y: 12 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* Primary button with diffused blur bloom */}
              <div className="relative group/glow inline-flex">
                <div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#B69A70] via-[#D8B8AC] to-[#E8D8C5] opacity-0 group-hover/glow:opacity-80 blur-lg transition-all duration-500 group-hover/glow:scale-105 pointer-events-none"
                  aria-hidden="true"
                />
                <a
                  href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-white bg-[#382923] hover:bg-[#241A16] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
                >
                  {/* Shimmer light sweep on hover */}
                  <div
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none"
                    aria-hidden="true"
                  />
                  <Calendar className="w-4 h-4 text-[#E8D8C5] transition-transform duration-300 group-hover:scale-110" />
                  <span>Agendar meu horário</span>
                  <ArrowRight className="w-4 h-4 text-[#E8D8C5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                </a>
              </div>

              {/* Secondary button with frosted backdrop-blur */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-wider text-[#382923] bg-[#E8D8C5]/40 hover:bg-[#E8D8C5] backdrop-blur-md border border-[#D8B8AC]/60 hover:border-[#B69A70] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] shadow-xs hover:shadow-md"
              >
                <span>Conhecer os serviços</span>
              </a>
            </motion.div>

            {/* Google Rating Social Proof Strip */}
            <motion.a
              href="#avaliacoes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="pt-6 border-t border-[#E8D8C5]/80 w-full flex items-center gap-4 group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1"
            >
              <div
                className="flex items-center gap-1 text-[#B69A70] transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-115"
                    style={{ transitionDelay: `${i * 35}ms` }}
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-[#5A453A]">
                <strong className="font-semibold text-[#382923] group-hover:text-[#96734A] transition-colors">
                  5,0 estrelas
                </strong>{' '}
                no Google{' '}
                <span className="text-[#8C7667]" aria-hidden="true">
                  ·
                </span>{' '}
                <span className="text-[#5A453A] font-medium group-hover:underline">
                  186 avaliações verificadas
                </span>
              </div>
            </motion.a>
          </div>

          {/* Right Column: High-Impact Editorial Imagery with Diffuse Glow Border */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.96 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* 21st.dev Diffuse Outer Blur Glow Aura */}
              <div
                className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-tr from-[#B69A70]/30 via-[#D8B8AC]/20 to-[#E8D8C5]/40 opacity-40 group-hover:opacity-90 blur-2xl transition-all duration-700 pointer-events-none"
                aria-hidden="true"
              />

              {/* Decorative back subtle accent outline */}
              <div
                className="absolute -inset-3 rounded-[2rem] border border-[#B69A70]/30 -rotate-1 pointer-events-none hidden sm:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-2 group-hover:scale-[1.02]"
                aria-hidden="true"
              />

              {/* Main Photo Card with fluid hover lift & scale */}
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_-20px_rgba(56,41,35,0.25)] border border-[#E8D8C5] bg-[#EFE9DF] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-[0_25px_60px_-15px_rgba(56,41,35,0.35)]">
                <ImageWithFallback
                  src={IMAGES.hero}
                  alt="Beleza feminina com cabelos brilhantes e saudáveis no Studio Fran Gomes"
                  className="w-full h-[430px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#241A16]/60 via-[#241A16]/20 to-transparent pointer-events-none" />

                {/* Quiet caption tag with frosted backdrop-blur */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white/95 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                  <div className="text-xs font-light tracking-wide backdrop-blur-md bg-black/30 px-3.5 py-1.5 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-black/50">
                    Studio de Beleza Fran Gomes
                  </div>
                  <div className="text-xs font-medium text-[#E8D8C5] backdrop-blur-md bg-black/30 px-3.5 py-1.5 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-black/50">
                    Eldorado, Contagem
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
