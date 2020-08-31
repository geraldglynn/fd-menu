import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';

import MenuItem from '../menu-item'
import { mockMenuItemBase } from './resources'

const mockMenuItem = mockMenuItemBase.merge(fromJS({
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
            key={mockMenuItem.get('MenuItemId')}
            name={mockMenuItem.get('Name')}
            image={{
              url: mockMenuItem.get('ImageUrl'),
            }}
            description={mockMenuItem.get('Description')}
            price={mockMenuItem.get('Price')}
            alcohol={mockMenuItem.get('Alcohol')}
            isAvailable={mockMenuItem.get('IsAvailable')}
            menuItemOptionSets={mockMenuItem.get('MenuItemOptionSets')}
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
