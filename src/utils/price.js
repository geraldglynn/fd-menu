const CURRENCY_MAJOR = '€'
const CURRENCY_MINOR = '¢'
// const FREE_TEXT = 'no extra charge'
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
      return `${Math.ceil(price*100)}${CURRENCY_MINOR}`
    case (price >= 1 && Number.isInteger(price)):
      return `${CURRENCY_MAJOR}${price}`
    default:
      return `${CURRENCY_MAJOR}${price.toFixed(2)}`
  }
}