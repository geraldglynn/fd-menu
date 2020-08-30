import { currencySymbol } from 'js/utils'
const FREE_TEXT = 'included'

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

export const priceFormat = (price) => {
  switch(true) {
    case (!price):
      return FREE_TEXT
    case (price < 1):
      return `${Math.ceil(price*100)}${currencySymbol.minor}`
    case (price >= 1 && Number.isInteger(price)):
      return `${currencySymbol.major}${price}`
    default:
      return `${currencySymbol.major}${price.toFixed(2)}`
  }
}