import { LOCALE } from 'configs'
import { currencySymbol } from 'utils'
export const FREE_TEXT = 'included'

export const showPrice = (price, {menuItemOptionSets=''}={}) => {

  if(Number.isNaN(price)) return

  if( !menuItemOptionSets || menuItemOptionSets.isEmpty() ) return true

  const menuItemHasOptionSetIsMaster = menuItemOptionSets.some( menuItemOptionSet => menuItemOptionSet.get('IsMasterOptionSet') === true )
  if(menuItemHasOptionSetIsMaster) return

  if(price) return true

  const menuItemFirstOptionSetIsMinSelectCount = menuItemOptionSets.get(0).get('MinSelectCount')
  if( menuItemFirstOptionSetIsMinSelectCount && menuItemFirstOptionSetIsMinSelectCount > 0) return

  return true
}

const currencyMinor = currencySymbol(LOCALE).minor
const currencyMajor = currencySymbol(LOCALE).major

export const priceFormat = (price) => {
  switch(true) {
    case (!price):
      return FREE_TEXT
    case (price < 1):
      return `${Math.ceil(price*100)}${currencyMinor}`
    case (price >= 1 && Number.isInteger(price)):
      return `${currencyMajor}${price}`
    default:
      return `${currencyMajor}${price.toFixed(2)}`
  }
}