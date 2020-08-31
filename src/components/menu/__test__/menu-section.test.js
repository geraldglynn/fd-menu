import React from 'react';
import { fromJS } from 'immutable'
import { render } from '@testing-library/react';

import MenuSection from '../menu-section'
import { mockMenuSectionBase } from './resources'

const mockMenuSection = mockMenuSectionBase.merge(fromJS({
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
                name={mockMenuSection.get('Name')}
                description={mockMenuSection.get('Description')}
                image={{
                    name: mockMenuSection.get('ImageName'),
                    url: mockMenuSection.get('ImageUrl'),
                    cellAspectRatio: mockMenuSection.get('CellAspectRatio'),
                  }}
                menuItems={fromJS([])}
            />
        )
        domText = dom.getByText
        domTestId = dom.getByTestId
    })

    it('should render name', () => {
        const name = domText(/Section 1/)
        expect(name).toBeInTheDocument()
    })
    it('should render description', () => {
        const description = domText(/Description 1/)
        expect(description).toBeInTheDocument()
    })
    it('should render image', () => {
        const menuSectionHero = domTestId(/menu-section-hero/i)
        expect(menuSectionHero).toHaveStyle(`background-image: url("http://example.com/abc.jpg");`)
        expect(menuSectionHero).toHaveStyle(`height: 240px`)
    })
})