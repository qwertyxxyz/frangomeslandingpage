import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';
import { BUSINESS, getWhatsAppUrl } from '../config/business';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F5EFE6]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70] block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#382923] tracking-tight mb-4">
            Tire suas dúvidas.
          </h2>
          <p className="text-sm sm:text-base text-[#5A453A]">
            Informações essenciais sobre agendamentos, procedimentos e localização do Studio Fran Gomes.
          </p>
        </div>

        {/* Accordions with fluid hover and height transition */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-[#E8D8C5] shadow-xs hover:shadow-md hover:border-[#B69A70]/60 hover:-translate-y-0.5 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 sm:px-7 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A70]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="text-base sm:text-lg font-serif text-[#382923] transition-colors duration-300 group-hover:text-[#96734A]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B69A70] transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 ${
                      isOpen ? 'rotate-180 text-[#382923]' : 'group-hover:translate-y-0.5'
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`px-6 sm:px-7 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-[#5A453A] leading-relaxed pt-1 border-t border-[#FAF7F2]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-[#E8D8C5] flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md hover:border-[#B69A70]/50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-[#382923] font-sans">
              Ainda tem alguma pergunta específica?
            </h3>
            <p className="text-xs sm:text-sm text-[#735D50] mt-0.5">
              Fale diretamente com a Fran pelo WhatsApp para esclarecer qualquer dúvida.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Olá, Fran! Vi o site e tenho uma dúvida antes de agendar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#382923] hover:bg-[#251A16] hover:scale-105 active:scale-95 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap shrink-0 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#E8D8C5]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
