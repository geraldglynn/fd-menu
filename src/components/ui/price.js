import React from 'react'
import { priceFormat } from 'js/utils'

function Price(props) {
  const { price, additionalItem } = props

  const css = !price ? 'free' : 'normal'
  const additionalCharcater = price && additionalItem ? '+' : ''
  const priceString = `${additionalCharcater}${priceFormat(price)}`

  return(
    <span className={`price-${css}`}>{priceString}</span>
  )
}

export default Price
