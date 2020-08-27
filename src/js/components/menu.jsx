import React from 'react'
import { List } from 'immutable'
import MenuSection from './menu-section'
import { isNotDeleted, isAvailable, isNotHiddenFromUsers } from '../../utils'

class Menu extends React.Component {
  render() {    
    const menuSections = this.props.menuSections
      .filter(isNotDeleted)
      .filter(isAvailable)
      .filter(isNotHiddenFromUsers)
      .sortBy(menuSection => menuSection.get('DisplayOrder', 0))
    
    return (
      <div className="menu">
        <h1>Menu</h1>
        { 
          menuSections.map(menuSection => 
            <MenuSection
              key={menuSection.get('MenuSectionId')}
              name={menuSection.get('Name')}
              description={menuSection.get('Description')}
              image={{
                name: menuSection.get('ImageName'),
                url: menuSection.get('ImageUrl'),
                cellAspectRatio: menuSection.get('CellAspectRatio'),
              }}
              menuItems={menuSection.get('MenuItems', List())}
            />
          )
        }
      </div>
    );
  }
}

export default Menu