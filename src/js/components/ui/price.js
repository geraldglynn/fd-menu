import React from 'react'
import { priceFormat } from '../../utils'

const Price = (props) => {
  const { price, additionalItem } = props
  
  const css = !price ? 'free' : 'normal'
  // const additionalCharcater = additionalItem && !!price ? '+' : ''
  const additionalCharcater = ''
  const priceString = `${additionalCharcater}${priceFormat(price)}`
    
  return(
    <span className={`price-${css}`}>{priceString}</span>
  )
}

export default Price
