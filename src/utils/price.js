// const FREE_TEXT = 'no extra charge'
import { currencySymbol } from './'
const FREE_TEXT = ''

export const showPrice = (price, {menuItemOptionSets=''}={}) => {
  
  if(Number.isNaN(price)) return

  const menuItemOptionSetIsMaster = menuItemOptionSets && menuItemOptionSets.some( menuItemOptionSet => menuItemOptionSet.get('IsMasterOptionSet') === true)    
  if(menuItemOptionSetIsMaster) return

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