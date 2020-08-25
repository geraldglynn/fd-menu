import React from 'react'

const CURRENCY_MAJOR = '€'
const CURRENCY_MINOR = '¢'

const Price = (props) => {
  const { price } = props
  if(Number.isNaN(price)) return

  const priceFormat = (price) => {
    switch(true) {
      case (price === 0):
        return 'free'
      case (price < 1):
        return `${Math.ceil(price*100)}${CURRENCY_MINOR}`
      case (price >= 1 && Number.isInteger(price)):
        return `${CURRENCY_MAJOR}${price}`
      default:
        return `${CURRENCY_MAJOR}${price.toFixed(2)}`
    }
  }

  const priceString = priceFormat(price)
  console.log({price, priceString})
    
  return(
  <span>{priceString}</span>
  )
}

export default Price
