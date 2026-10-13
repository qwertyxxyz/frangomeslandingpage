/**
 * Centralized business configuration for Studio de Beleza Fran Gomes.
 * All phone numbers, addresses, messages, and links are defined here.
 */

export interface BusinessConfig {
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  headline: string;
  subheadline: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // international digits only: 5531980193190
  address: {
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    formatted: string;
    fullSearchQuery: string;
  };
  googleRating: {
    score: number;
    reviewCount: number;
    maxScore: number;
    label: string;
  };
  urls: {
    googleMaps: string;
    googleReviews: string;
  };
  messages: {
    generalBooking: string;
    serviceInquiry: (serviceName: string) => string;
  };
  // Configurable fields for unconfirmed info
  businessHoursNotice: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
  };
}

export const BUSINESS: BusinessConfig = {
  name: 'Studio de Beleza Fran Gomes',
  shortName: 'Fran Gomes',
  category: 'Salão de beleza e cuidados pessoais',
  tagline: 'BELEZA • CUIDADO • AUTOESTIMA',
  headline: 'Sua beleza merece um cuidado extraordinário.',
  subheadline:
    'Um espaço dedicado à sua beleza, com atendimento atencioso, cuidado em cada detalhe e resultados que valorizam você.',
  phone: '(31) 98019-3190',
  displayPhone: '(31) 98019-3190',
  whatsappNumber: '5531980193190',
  address: {
    street: 'Rua Casuarinas',
    number: '158',
    complement: 'Loja N',
    neighborhood: 'Eldorado',
    city: 'Contagem',
    state: 'Minas Gerais',
    postalCode: '32310-570',
    country: 'Brasil',
    formatted: 'Rua Casuarinas, 158, Loja N, Eldorado, Contagem — MG, CEP 32310-570',
    fullSearchQuery: 'Studio de Beleza Fran Gomes Rua Casuarinas 158 Loja N Eldorado Contagem MG 32310-570',
  },
  googleRating: {
    score: 5.0,
    reviewCount: 186,
    maxScore: 5.0,
    label: '5,0 estrelas no Google (186 avaliações)',
  },
  urls: {
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=Rua+Casuarinas+158+Loja+N+Eldorado+Contagem+MG+32310-570',
    // Configurable Google Reviews URL
    googleReviews:
      'https://www.google.com/maps/search/?api=1&query=Studio+de+Beleza+Fran+Gomes+Contagem+MG',
  },
  messages: {
    generalBooking:
      'Olá, Fran! Conheci o Studio de Beleza Fran Gomes pelo site e gostaria de consultar os horários disponíveis para agendamento.',
    serviceInquiry: (serviceName: string) =>
      `Olá! Conheci o Studio de Beleza Fran Gomes pelo site e gostaria de saber mais sobre o serviço de ${serviceName} e consultar os horários disponíveis.`,
  },
  businessHoursNotice:
    'Horários de atendimento mediante agendamento prévio. Entre em contato pelo WhatsApp para consultar a disponibilidade da semana.',
  socialLinks: {
    // Configurable when official profiles are confirmed
    instagram: undefined,
    facebook: undefined,
  },
};

/**
 * Generates an official WhatsApp link with properly encoded message.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message ?? BUSINESS.messages.generalBooking;
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates a WhatsApp link tailored to a specific service.
 */
export function getServiceWhatsAppUrl(serviceName: string): string {
  return getWhatsAppUrl(BUSINESS.messages.serviceInquiry(serviceName));
}
