import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 pointer-events-auto">
      {/* Tooltip text with frosted glass blur */}
      <div
        className={`hidden sm:flex items-center bg-[#FAF7F2]/90 backdrop-blur-md text-[#382923] text-xs font-medium py-2 px-3.5 rounded-full shadow-xl border border-[#E8D8C5] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-3'
        }`}
        aria-hidden="true"
      >
        <span>Agende pelo WhatsApp</span>
      </div>

      {/* Button with 21st.dev diffused green blur bloom */}
      <div className="relative group">
        <div
          className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500 group-hover:scale-110 pointer-events-none"
          aria-hidden="true"
        />

        <a
          href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45)] hover:shadow-[0_16px_32px_-4px_rgba(37,211,102,0.6)] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-112 hover:-translate-y-1 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          aria-label="Abrir conversa no WhatsApp oficial do Studio Fran Gomes"
        >
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" />
        </a>
      </div>
    </div>
  );
};
