import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';

import MenuSection from 'components/menu/menu-section'

import { mockMenuSection } from 'helpers/__test__/resources'

const mockMenuSection1 = mockMenuSection.merge(fromJS({
    'Name': 'Section 1',
    'Description': 'Description 1',
    'ImageName': 'abc.jpg',
    'ImageUrl': 'http://example.com/abc.jpg',
    'CellAspectRatio': 4,
}))

describe('MenuSection', () => {
    let domText
    let domTestId
    beforeEach( () => {
        const dom = render(
            <MenuSection
                name={mockMenuSection1.get('Name')}
                description={mockMenuSection1.get('Description')}
                image={{
                    name: mockMenuSection1.get('ImageName'),
                    url: mockMenuSection1.get('ImageUrl'),
                    cellAspectRatio: mockMenuSection1.get('CellAspectRatio'),
                  }}
                menuItems={fromJS([])}
            />
        )
        domText = dom.getByText
        domTestId = dom.getByTestId
    })

    it('should render name', () => {
        const name = domText(/Section 1/i)
        expect(name).toBeInTheDocument()
    })
    it('should render description', () => {
        const description = domText(/Description 1/i)
        expect(description).toBeInTheDocument()
    })
    it('should render image', () => {
        const menuSectionHero = domTestId(/menu-section-hero/i)
        expect(menuSectionHero).toHaveStyle(`background-image: url("http://example.com/abc.jpg")`)
        expect(menuSectionHero).toHaveStyle(`height: 240px`)
    })
})