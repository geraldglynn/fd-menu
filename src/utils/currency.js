import { LOCALE, DEFAULT_CURRENCY_ZONE } from '../configs'

const EU = 'EU'
const GB = 'GB'
const US = 'US'

const EURO = 'euro'
const DOLLAR = 'dollar'
const POUND = 'pound'
const CENT = 'cent'
const PENCE = 'pence'

const COUNTRY_ECONOMIC_ZONE = {
  'IE': EU,
  'ES': EU,
  'FR': EU,
  'DE': EU,
  'GB': GB,
  'AI': GB,
  'BM': GB,
  'IO': GB,  
  'GI': GB,  
  'US': US,
}

const ECONOMIC_ZONE_TO_CURRENCY = {
  [EU]: 'EUR',
  [GB]: 'GBP',
  [US]: 'USD',
}

const symbols = {
  [EURO]: '€',
  [DOLLAR]: '$',
  [POUND]: '£',
  [CENT]: '¢',
  [PENCE]: 'p'
}

const currencyUnits = {
  'EUR': { major: symbols[EURO], minor: symbols[CENT] },
  'USD': { major: symbols[DOLLAR], minor: symbols[CENT] },
  'GBP': { major: symbols[POUND], minor: symbols[PENCE] },
}

const getCurrency = () => {
  const economicZone = COUNTRY_ECONOMIC_ZONE[LOCALE] || DEFAULT_CURRENCY_ZONE
  return ECONOMIC_ZONE_TO_CURRENCY[economicZone]
}

export const currencySymbol = currencyUnits[getCurrency()]


