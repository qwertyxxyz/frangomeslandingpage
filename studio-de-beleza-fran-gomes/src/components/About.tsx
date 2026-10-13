import React from 'react';
import { Sparkles, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';
import { ImageWithFallback } from './ImageWithFallback';
import { IMAGES } from '../assets/images';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 bg-[#F5EFE6] relative overflow-hidden">
      {/* Decorative subtle curved background element */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8D8C5]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait with fluid hover */}
          <div className="lg:col-span-5 relative group">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative line frame */}
              <div
                className="absolute -inset-3 rounded-[2rem] border border-[#B69A70]/30 rotate-1 pointer-events-none hidden sm:block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-2 group-hover:scale-[1.02]"
                aria-hidden="true"
              />

              <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_16px_40px_-16px_rgba(56,41,35,0.2)] bg-[#EFE9DF] border border-[#E8D8C5] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_-16px_rgba(56,41,35,0.3)]">
                <ImageWithFallback
                  src={IMAGES.aboutFran}
                  alt="Profissional do Studio de Beleza Fran Gomes em atendimento acolhedor"
                  className="w-full h-[440px] sm:h-[500px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#241A16]/80 via-[#241A16]/40 to-transparent text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                  <span className="text-xs uppercase tracking-widest text-[#E8D8C5] block mb-1">
                    Studio de Beleza
                  </span>
                  <p className="font-serif text-xl sm:text-2xl text-white">
                    Fran Gomes
                  </p>
                  <p className="text-xs text-[#E8D8C5]/90 mt-1">
                    Eldorado · Contagem, MG
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70]">
              <Sparkles className="w-3.5 h-3.5 transition-transform duration-500 hover:rotate-12" />
              <span>Sobre o Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#382923] tracking-tight mb-8 text-balance">
              Beleza com cuidado, atenção e personalidade.
            </h2>

            <div className="space-y-6 text-[#5A453A] leading-relaxed text-base sm:text-lg mb-8">
              <p>
                No <strong className="font-semibold text-[#382923]">Studio de Beleza Fran Gomes</strong>,
                cada atendimento é uma oportunidade de cuidar de você com atenção e carinho. A proposta é
                oferecer uma experiência acolhedora, valorizando sua beleza e respeitando suas
                preferências em cada detalhe.
              </p>
              <blockquote className="border-l-2 border-[#B69A70] pl-5 py-1 text-[#382923] font-serif text-xl sm:text-2xl italic transition-all duration-300 hover:border-[#382923] hover:pl-6">
                “Mais do que um momento de beleza, um tempo dedicado a você.”
              </blockquote>
              <p className="text-sm sm:text-base text-[#735D50]">
                Aqui, os procedimentos são pensados para realçar o que você já tem de mais bonito, em um
                espaço tranquilo e preparado para o seu bem-estar no coração do bairro Eldorado em Contagem.
              </p>
            </div>

            {/* Values highlight with fluid hover cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full pt-4 border-t border-[#E8D8C5] mb-8">
              <div className="group/val flex items-start gap-3 p-3 rounded-2xl border border-transparent hover:border-[#E8D8C5] hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="w-9 h-9 rounded-full bg-[#E8D8C5]/60 flex items-center justify-center text-[#96734A] shrink-0 mt-0.5 transition-all duration-300 group-hover/val:scale-110 group-hover/val:bg-[#B69A70] group-hover/val:text-white">
                  <Heart className="w-4 h-4 transition-transform duration-300 group-hover/val:scale-105" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#382923] font-sans transition-colors duration-300 group-hover/val:text-[#96734A]">
                    Acolhimento Real
                  </h3>
                  <p className="text-xs text-[#735D50] mt-0.5">
                    Ambiente calmo onde você é ouvida e tratada com carinho.
                  </p>
                </div>
              </div>

              <div className="group/val flex items-start gap-3 p-3 rounded-2xl border border-transparent hover:border-[#E8D8C5] hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="w-9 h-9 rounded-full bg-[#E8D8C5]/60 flex items-center justify-center text-[#96734A] shrink-0 mt-0.5 transition-all duration-300 group-hover/val:scale-110 group-hover/val:bg-[#B69A70] group-hover/val:text-white">
                  <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover/val:scale-105" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#382923] font-sans transition-colors duration-300 group-hover/val:text-[#96734A]">
                    Cuidado com os Fios
                  </h3>
                  <p className="text-xs text-[#735D50] mt-0.5">
                    Técnicas dedicadas à saúde e harmonia natural.
                  </p>
                </div>
              </div>
            </div>

            {/* Action with fluid hover */}
            <a
              href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#382923] hover:bg-[#251A16] hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.97] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-[#E8D8C5]" />
              <span>Conversar com a Fran pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
