export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como posso agendar um horário?',
    answer:
      'Você pode entrar em contato pelo WhatsApp para consultar a disponibilidade e combinar seu atendimento diretamente com a Fran.',
  },
  {
    id: 'faq-2',
    question: 'Onde fica o Studio de Beleza Fran Gomes?',
    answer:
      'O salão fica na Rua Casuarinas, 158, Loja N, no bairro Eldorado, em Contagem, Minas Gerais (CEP 32310-570).',
  },
  {
    id: 'faq-3',
    question: 'Quais serviços estão disponíveis?',
    answer:
      'Entre os serviços divulgados estão cuidados capilares, botox capilar, depilação feminina, design de sobrancelhas, cílios e limpeza de pele. Entre em contato para confirmar os procedimentos disponíveis.',
  },
  {
    id: 'faq-4',
    question: 'Como posso consultar os valores?',
    answer:
      'Entre em contato diretamente pelo WhatsApp para consultar os valores atualizados e detalhes de cada serviço.',
  },
  {
    id: 'faq-5',
    question: 'Como saber os horários disponíveis?',
    answer:
      'Envie uma mensagem pelo WhatsApp para consultar a grade de horários da semana e reservar o melhor momento para o seu atendimento.',
  },
];
