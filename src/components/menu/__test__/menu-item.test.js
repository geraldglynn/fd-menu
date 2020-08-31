import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';

import MenuItem from 'components/menu/menu-item'

const mockMenuItem = fromJS({})

const mockMenuItem1 = mockMenuItem.merge(fromJS({
    'MenuItemId': '1234',
    'Name': 'Item 1',
    'Description': 'Item Description 1',
    'ImageName': 'abc.jpg',
    'ImageUrl': 'http://example.com/abc.jpg',
    'CellAspectRatio': 4,
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
        const name = domText(/Item 1/i)
        expect(name).toBeInTheDocument()
    })
    it('should render description', () => {
        const description = domText(/Item Description 1/i)
        expect(description).toBeInTheDocument()
    })
    // it('should render image', () => {
    //     const menuSectionHero = domTestId(/menu-section-hero/i)
    //     expect(menuSectionHero).toHaveStyle(`background-image: url("http://example.com/abc.jpg")`)
    //     expect(menuSectionHero).toHaveStyle(`height: 240px`)
    // })
    it('should render price', () => {
        const price = domText(/€5.99/i)
        expect(price).toBeInTheDocument()
    })
    it('should render alcohol age limit', () => {
        const alcoholAgeLimitMessage = domText(/Must be \+18/i)
        expect(alcoholAgeLimitMessage).toBeInTheDocument()
    })
})

// menuItems={fromJS([
//   {
//       MenuItemId: '1234',
//       Name: 'Menu Item Name 1',
//       ImageUrl:'https://image.jpg',
//       Description: 'MenuItemDescription1',
//       Price: 1.00,
//       Alcohol: true,
//       IsAvailable: true,
//       MenuItemOptionSets: fromJS([]),
//   }
// ])}