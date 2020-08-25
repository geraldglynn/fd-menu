import React from 'react'

import MenuItem from './menu-item'
import { isNotDeleted, sortByDisplayOrder } from '../../utils'


const MENU_SECTION_HEIGHT = 200

class MenuSection extends React.Component {
  render() {
    const { name, description, image, menuItems} = this.props
    
    const width = `${MENU_SECTION_HEIGHT}px`
    const height = image.cellAspectRatio && Number.isInteger(image.cellAspectRatio) ? 
      `${MENU_SECTION_HEIGHT/image.cellAspectRatio}px` : `${MENU_SECTION_HEIGHT}`
    
      const availableMenuItems = menuItems.filter(isNotDeleted).sortBy(sortByDisplayOrder)

      debugger

    return (
      <div className="fd-menu-section">
        <h2>Section: {name}</h2>
        { description && (
          <p>{description}</p>
        )}
        <div className="fd-menu-section-image" style={{width, height, overflow: "hidden"}}>
          <img src={image.url} />
        </div>
        <div>
          {
            availableMenuItems.map(menuItem => 
              <MenuItem
                key={menuItem.get('MenuItemId')}
                name={menuItem.get('Name')}
                description={menuItem.get('Description')}
                spicinessRating={menuItem.get('SpicinessRating')}
                price={menuItem.get('Price')}
                alcohol={menuItem.get('Alcohol')}
                tags={menuItem.get('Tags')}
                isAvailable={menuItem.get('IsAvailable')}
                menuItemOptionSets={menuItem.get('MenuItemOptionSets')}
                
                // "PublicId": "62d6a3b8-7975-4f49-b2c3-a1384068b90f",                            
              />
            )
          }
        </div>
      </div>
    );
  }
}

export default MenuSection