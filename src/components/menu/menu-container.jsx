import React, { useState, useEffect } from 'react'
import { List, fromJS } from 'immutable'
import { getMenu } from 'api/menu'
import MenuSection from './menu-section'
import { isNotDeleted, isAvailable, isNotHiddenFromUsers } from 'helpers'

import { container } from './menu.module.scss'

const showSection = () => isNotDeleted && isAvailable && isNotHiddenFromUsers

function Menu(props) {
  const [menu, setMenu] = useState(fromJS({}))

  useEffect(() => {
    getMenu().then(reponse => setMenu(reponse))
  }, [])

  const menuVersionNumber = menu.get('MenuVersionNumber')
  const menuSections = menu.get('MenuSections', fromJS({}))
    .filter(showSection)
    .sortBy(menuSection => menuSection.get('DisplayOrder', 0))

  return (
    <div className={container}>
      <h1>Menu v.{menuVersionNumber}</h1>
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
  )
}

export default Menu