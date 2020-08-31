import React from 'react'
import { priceFormat } from 'helpers'
import { free } from './price.module.scss'

function Price(props) {
  const { price, additionalItem } = props

  const css = !price ? free : ''
  const additionalCharcater = price && additionalItem ? '+' : ''
  const priceString = `${additionalCharcater}${priceFormat(price)}`

  return(
    <span className={css}>{priceString}</span>
  )
}

export default Price
