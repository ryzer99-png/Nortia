// =========================================================
// NORTIA — Diccionario Maestro de Contenidos (Agregador Modular)
// =========================================================
// Todos los textos están organizados en módulos temáticos e independientes:
//
// 1. './global.js'               -> Marca, contacto, WhatsApp, navegación y footer
// 2. './home.js'                 -> Hero, filosofía, resumen de datos, El Camino y CTA
// 3. './coverages/life.js'      -> Personas y familias (Home card + Subpágina dedicada)
// 4. './coverages/home.js'      -> Hogar y patrimonio (Home card + Subpágina dedicada)
// 5. './coverages/business.js'  -> Empresas y pymes (Home card + Subpágina dedicada)
// 6. './coverages/mobility.js'  -> Movilidad y vehículos (Home card + Subpágina dedicada)

import { GLOBAL_DATA } from './global.js';
import { HOME_DATA } from './home.js';
import { PERSONAS_DATA } from './coverages/life.js';
import { HOGAR_DATA } from './coverages/home.js';
import { EMPRESAS_DATA } from './coverages/business.js';
import { MOVILIDAD_DATA } from './coverages/mobility.js';
import { CREDITOS_DATA } from './coverages/credit.js';

export const SITE_CONTENT = {
  // ── 1. Configuración y Datos Globales ──
  brand: GLOBAL_DATA.brand,
  whatsappMessages: GLOBAL_DATA.whatsappMessages,
  nav: GLOBAL_DATA.nav,
  footer: GLOBAL_DATA.footer,

  // ── 2. Página Principal (Home / Index) ──
  hero: HOME_DATA.hero,
  editorial: HOME_DATA.editorial,
  camino: HOME_DATA.camino,
  trustBanner: HOME_DATA.trustBanner,
  finalCta: HOME_DATA.finalCta,

  // ── 3. Sección Coberturas (Flip Cards en Home) ──
  coberturas: {
    chip: HOME_DATA.coberturasHeader.chip,
    title: HOME_DATA.coberturasHeader.title,
    subtitle: HOME_DATA.coberturasHeader.subtitle,
    cards: [
      PERSONAS_DATA,
      HOGAR_DATA,
      EMPRESAS_DATA,
      MOVILIDAD_DATA,
      CREDITOS_DATA
    ]
  },

  // ── 4. Sección Datos Oficiales & Spotlight de Riesgo ──
  datosOficiales: {
    chip: HOME_DATA.datosOficialesHeader.chip,
    title: HOME_DATA.datosOficialesHeader.title,
    subtitle: HOME_DATA.datosOficialesHeader.subtitle,
    quoteBannerTitle: HOME_DATA.datosOficialesHeader.quoteBannerTitle,
    quoteBannerDesc: HOME_DATA.datosOficialesHeader.quoteBannerDesc,
    riskSpotlight: {
      personas: PERSONAS_DATA.riskSpotlight,
      hogar: HOGAR_DATA.riskSpotlight,
      empresas: EMPRESAS_DATA.riskSpotlight,
      movilidad: MOVILIDAD_DATA.riskSpotlight
    }
  },

  // ── 5. Subpáginas Dedicadas (Planes, FAQs y CTAs) ──
  subpages: {
    personas: PERSONAS_DATA.subpage,
    hogar: HOGAR_DATA.subpage,
    empresas: EMPRESAS_DATA.subpage,
    movilidad: MOVILIDAD_DATA.subpage
  }
};
