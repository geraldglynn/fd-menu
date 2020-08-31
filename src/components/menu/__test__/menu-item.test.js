import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';

import MenuItem from 'components/menu/menu-item'

const mockMenuItem = fromJS({})

const mockMenuItem1 = mockMenuItem.merge(fromJS({
    'Name': 'Item 1',
    'Description': 'Item Description 1',
    'ImageUrl': 'http://example.com/abc.jpg',
    'Price': 5.99,
    'Alcohol': true,
    isAvailable: true,
    menuItemOptionSets: [],
}))

describe('MenuItem', () => {
    let domText
    let domTestId
    beforeEach( () => {
        const dom = render(
            <MenuItem
            key={mockMenuItem1.get('MenuItemId')}
            name={mockMenuItem1.get('Name')}
            image={{
              url: mockMenuItem1.get('ImageUrl'),
            }}
            description={mockMenuItem1.get('Description')}
            price={mockMenuItem1.get('Price')}
            alcohol={mockMenuItem1.get('Alcohol')}
            isAvailable={mockMenuItem1.get('IsAvailable')}
            menuItemOptionSets={mockMenuItem1.get('MenuItemOptionSets')}
            />
        )
        domText = dom.getByText
        domTestId = dom.getByTestId
    })

    it('should render name', () => {
        const name = domText(/Item 1/)
        expect(name).toBeInTheDocument()
    })

    it('should render description', () => {
        const description = domText(/Item Description 1/)
        expect(description).toBeInTheDocument()
    })

    it('should render image', () => {
        const image = domTestId(/menu-item-image/)
        expect(image).toBeInTheDocument()
    })

    it('should render price', () => {
        const price = domText(/€5.99/)
        expect(price).toBeInTheDocument()
    })

    it('should render alcohol age limit', () => {
        const alcoholAgeLimitMessage = domText(/Must be \+18/)
        expect(alcoholAgeLimitMessage).toBeInTheDocument()
    })
})
