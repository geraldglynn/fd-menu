import React from 'react'
import classNames from 'classnames'

import { priceFormat } from 'helpers'
import { free } from './price.module.scss'

function Price(props) {
  const { price, additionalItem } = props

  const priceClass = classNames({ [free]: !price })

  const additionalCharcater = price && additionalItem ? '+' : ''
  const priceString = `${additionalCharcater}${priceFormat(price)}`

  return(
    <span className={priceClass} data-testid='ui-price'>{priceString}</span>
  )
}

export default Price
