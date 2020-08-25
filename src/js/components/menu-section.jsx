import React from 'react'

import MenuItem from './menu-item'
import { isNotDeleted, sortByDisplayOrder } from '../../utils'


const MENU_WIDTH = 500
const MENU_SECTION_DEFAULT_HEIGHT = 100

class MenuSection extends React.Component {
  render() {
    const { name, description, image, menuItems} = this.props
    const availableMenuItems = menuItems.filter(isNotDeleted).sortBy(sortByDisplayOrder)
        
    const height = image.cellAspectRatio && Number.isInteger(image.cellAspectRatio) ? 
      `${MENU_WIDTH/image.cellAspectRatio}px` : `${MENU_SECTION_DEFAULT_HEIGHT}px`
    
    const style = {
      height,
      backgroundImage: `url(${image.url})`,
    }

    return (
      <div className="fd-menu-section">
        <div className="fd-hero" style={style}>
          <h2>{name}</h2>
        </div>
        
        { description && (
          <p>{description}</p>
        )}        
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