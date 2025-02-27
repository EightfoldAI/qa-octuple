'use client';

import type { Locale } from '@eightfold.ai/octuple/lib/locale';
import {
  arSA,
  bgBG,
  csCZ,
  daDK,
  deDE,
  elGR,
  enGB,
  enUS,
  esES,
  esDO,
  esMX,
  fiFI,
  frBE,
  frCA,
  frFR,
  heIL,
  hiIN,
  hrHR,
  htHT,
  huHU,
  itIT,
  jaJP,
  koKR,
  msMY,
  nbNO,
  nlBE,
  nlNL,
  plPL,
  ptBR,
  ptPT,
  roRO,
  ruRU,
  skSK,
  srRS,
  svSE,
  teIN,
  thTH,
  trTR,
  ukUA,
  viVN,
  zhCN,
  zhTW,
} from '@eightfold.ai/octuple/lib/locale';
import { canUseDom } from './canUseDom';

const getDOMLanguage = (): string => {
  return (
    (canUseDom() && window?.i18nLang) ||
    (canUseDom() && navigator?.language) ||
    'en'
  );
};

export const getConfigProviderLocale = (): Locale => {
  const domLangToOctupleLocale = {
    ar: arSA,
    bg: bgBG,
    cs: csCZ,
    da: daDK,
    de: deDE,
    el: elGR,
    'en-GB': enGB,
    'en-US': enUS,
    'es-DO': esDO,
    'es-ES': esES,
    'es-MX': esMX,
    fi: fiFI,
    fr: frFR,
    'fr-BE': frBE,
    'fr-CA': frCA,
    he: heIL,
    hi: hiIN,
    hr: hrHR,
    ht: htHT,
    hu: huHU,
    it: itIT,
    ja: jaJP,
    ko: koKR,
    ms: msMY,
    nb: nbNO,
    nl: nlNL,
    'nl-BE': nlBE,
    pl: plPL,
    pt: ptPT,
    'pt-BR': ptBR,
    'pt-PT': ptPT,
    ro: roRO,
    ru: ruRU,
    sk: skSK,
    sr: srRS,
    sv: svSE,
    te: teIN,
    th: thTH,
    tr: trTR,
    uk: ukUA,
    vi: viVN,
    'zh-CN': zhCN,
    'zh-TW': zhTW,
  };
  const lang = getDOMLanguage();
  return lang in domLangToOctupleLocale
    ? domLangToOctupleLocale[lang as keyof typeof domLangToOctupleLocale]
    : enUS;
};
