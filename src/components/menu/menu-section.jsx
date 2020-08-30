import React from 'react'

import MenuItem from './menu-item'
import { isNotDeleted, sortByDisplayOrder } from 'helpers'


const MENU_WIDTH = 960
const MENU_SECTION_DEFAULT_HEIGHT = 100

function MenuSection(props) {
  const { name, description, image, menuItems} = props
  const availableMenuItems = menuItems.filter(isNotDeleted).sortBy(sortByDisplayOrder)

  const height = image.cellAspectRatio && Number.isInteger(image.cellAspectRatio) ?
    `${MENU_WIDTH/image.cellAspectRatio}px` : `${MENU_SECTION_DEFAULT_HEIGHT}px`

  const style = {
    height,
    backgroundImage: `url(${image.url})`,
  }

  return (
    <div className="menu-section">
      <div className="menu-section-hero container-fluid" style={style}>
        <h2>{name}</h2>
      </div>
      <div className="menu-section-body container">
      { description && (
        <p>{description}</p>
      )}
      <div className="menu-items">
        {
          availableMenuItems.map(menuItem =>
            <MenuItem
              key={menuItem.get('MenuItemId')}
              name={menuItem.get('Name')}
              image={{
                url: menuItem.get('ImageUrl'),
              }}
              description={menuItem.get('Description')}
              spicinessRating={menuItem.get('SpicinessRating')}
              price={menuItem.get('Price')}
              alcohol={menuItem.get('Alcohol')}
              tags={menuItem.get('Tags')}
              isAvailable={menuItem.get('IsAvailable')}
              menuItemOptionSets={menuItem.get('MenuItemOptionSets')}
            />
          )
        }
      </div>
    </div>
    </div>
  )
}

export default MenuSection