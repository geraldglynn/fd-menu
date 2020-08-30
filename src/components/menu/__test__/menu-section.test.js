import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';
import MenuSection from 'components/menu/menu-section'

import { mockMenuSection } from 'helpers/__test__/resources'

const mockMenuSection1 = mockMenuSection.merge(fromJS({
    'Name': 'Section 1',
    'Description': 'Description 1',
}))

describe('MenuSection', () => {
    let domText
    beforeEach( () => {
        domText = render(
            <MenuSection
                name={mockMenuSection1.get('Name')}
                description={mockMenuSection1.get('Description')}
                image={{
                    name: mockMenuSection1.get('ImageName'),
                    url: mockMenuSection1.get('ImageUrl'),
                    cellAspectRatio: mockMenuSection1.get('CellAspectRatio'),
                  }}
                menuItems={fromJS([
                    {
                        MenuItemId: '1234',
                        Name: 'Menu Item Name 1',
                        ImageUrl:'https://image.jpg',
                        Description: 'MenuItemDescription1',
                        Price: 1.00,
                        Alcohol: true,
                        IsAvailable: true,
                        MenuItemOptionSets: fromJS([]),
                    }
                ])}
            />
        ).getByText
    })

    it('should render name', () => {
        const name = domText(/Section 1/i)
        expect(name).toBeInTheDocument()
    })
    it('should render description', () => {
        const description = domText(/Description 1/i)
        expect(description).toBeInTheDocument()
    })
    it('should render MeniItem name,', () => {
        const menuItemName = domText(/Menu Item Name 1/i)
        expect(menuItemName).toBeInTheDocument()
    })
})