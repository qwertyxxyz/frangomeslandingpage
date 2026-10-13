// Centralized asset imports for Vite bundler
import heroBeautyPortrait from './hero_beauty_portrait_1791921258674.jpg';
import serviceHairBotox from './service_hair_botox_1791921260213.jpg';
import serviceEyebrowLash from './service_eyebrow_lash_1791921261602.jpg';
import salonInteriorLuxury from './salon_interior_luxury_1791921261215.jpg';
import aboutFranPortrait from './about_fran_portrait_1791921262555.jpg';
import serviceDepilacao from './service_depilacao_1791921284850.jpg';
import serviceLimpezaPele from './service_limpeza_pele_1791921286330.jpg';
import serviceCabeloStyling from './service_cabelo_styling_1791921285495.jpg';

export const IMAGES = {
  hero: heroBeautyPortrait,
  hairBotox: serviceHairBotox,
  eyebrowLash: serviceEyebrowLash,
  salonInterior: salonInteriorLuxury,
  aboutFran: aboutFranPortrait,
  depilacao: serviceDepilacao,
  limpezaPele: serviceLimpezaPele,
  cabeloStyling: serviceCabeloStyling,
} as const;
