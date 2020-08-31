import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';

import Price from '../price'
import { free } from '../price.module.scss'


const mockPrices = {
  free: {
    price: 0.00,
  },
  decimal: {
    price: 5.99,
  },
  integer: {
    price: 2.00,
  },
  additionalInteger: {
    price: 1.00,
    additionalItem: true
  },
}

const renderDom = (mockPrice) => render(
  <Price
    price={mockPrice.price}
    additionalItem={mockPrice.additionalItem}
  />
)

describe('Price', () => {
    let domText
    let domTestId

    describe('integer additionalInteger', () => {
    beforeEach( () => {
      const dom = renderDom(mockPrices.additionalInteger)
      domText = dom.getByText
      domTestId = dom.getByTestId
    })

      it('should render correct value', () => {
        const price = domText(/€1/)
        expect(price).toBeInTheDocument()
      })

      it('should have "free" classname', () => {
        const price = domTestId('ui-price')
        // expect(price).toBeInTheDocument()
        expect(price).not.toHaveClass(free)
    })
  })
})
