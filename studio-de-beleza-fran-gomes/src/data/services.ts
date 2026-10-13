import { IMAGES } from '../assets/images';

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  fullDetails?: string;
  image: string;
  category: 'cabelos' | 'olhar' | 'cuidados';
  alt: string;
  badge?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'cabelos',
    name: 'Cabelos',
    tagline: 'Tratamentos e cuidados capilares',
    description:
      'Cuidados capilares e tratamentos pensados para valorizar a beleza e a aparência dos seus fios.',
    fullDetails:
      'Atendimento dedicado à saúde e ao brilho do seu cabelo, com avaliação das características dos fios para indicar o procedimento ideal.',
    image: IMAGES.cabeloStyling,
    category: 'cabelos',
    alt: 'Tratamento capilar e penteado com brilho e movimento natural no Studio Fran Gomes',
  },
  {
    id: 'botox-capilar',
    name: 'Botox Capilar',
    tagline: 'Alinhamento e disciplina dos fios',
    description:
      'Um cuidado capilar voltado para melhorar a aparência, o alinhamento e a disciplina dos fios, conforme as características do cabelo.',
    fullDetails:
      'Tratamento intensivo que reduz o frizz, promove maciez profunda e devolve a maleabilidade aos fios com acabamento sedoso.',
    image: IMAGES.hairBotox,
    category: 'cabelos',
    alt: 'Resultado de botox capilar com cabelo alinhado, sedoso e brilhante',
  },
  {
    id: 'sobrancelhas',
    name: 'Design de Sobrancelhas',
    tagline: 'Harmonia e desenho natural',
    description:
      'Cuidados que valorizam o desenho natural das sobrancelhas e a harmonia do olhar.',
    fullDetails:
      'Mapeamento facial delicado para realçar a curvatura natural e os traços únicos do seu rosto com equilíbrio e elegância.',
    image: IMAGES.eyebrowLash,
    category: 'olhar',
    alt: 'Design de sobrancelhas impecável realçando a harmonia natural do olhar',
  },
  {
    id: 'cilios',
    name: 'Serviços para Cílios',
    tagline: 'Destaque e delicadeza no olhar',
    description:
      'Cuidados de beleza para destacar o olhar com delicadeza.',
    fullDetails:
      'Procedimentos especiais para valorizar a curvatura, o alongamento e o realce dos seus cílios com acabamento leve e sofisticado.',
    image: IMAGES.hero,
    category: 'olhar',
    alt: 'Cílios destacados com curvatura suave e beleza natural',
  },
  {
    id: 'depilacao-feminina',
    name: 'Depilação Feminina',
    tagline: 'Cuidado pessoal com acolhimento',
    description:
      'Atendimento voltado aos cuidados pessoais, com atenção e acolhimento.',
    fullDetails:
      'Ambiente privativo e confortável, priorizando a suavidade da pele, higiene rigorosa e a sua total comodidade.',
    image: IMAGES.depilacao,
    category: 'cuidados',
    alt: 'Ambiente aconchegante para depilação feminina com produtos suaves',
  },
  {
    id: 'limpeza-de-pele',
    name: 'Limpeza de Pele',
    tagline: 'Renovação e hidratação facial',
    description:
      'Uma experiência de cuidado facial voltada à limpeza e aos cuidados com a pele.',
    fullDetails:
      'Procedimento focado na remoção de impurezas, desobstrução dos poros e revitalização da cútis, deixando a pele luminosa e macia.',
    image: IMAGES.limpezaPele,
    category: 'cuidados',
    alt: 'Sessão de limpeza e cuidado facial proporcionando cútis revitalizada',
  },
];
