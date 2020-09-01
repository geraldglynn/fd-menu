import React, { useState, useEffect } from 'react'
import { List, fromJS } from 'immutable'
import { useDispatch, useSelector } from 'react-redux'
// import { getMenu } from 'api/menu'
import MenuSection from './menu-section'
import { isNotDeleted, isAvailable, isNotHiddenFromUsers } from 'helpers'

import { container } from './menu.module.scss'

const showSection = () => isNotDeleted && isAvailable && isNotHiddenFromUsers

function Menu(props) {
  // const [menu, setMenu] = useState(fromJS({}))
  const dispatch = useDispatch()
  const menu = useSelector(state => state.get('menuReducer'))

  useEffect(() => {
    dispatch({
      type: 'FETCH_MENU'
    })
  }, [])

  const menuVersionNumber = menu.get('MenuVersionNumber')
  const menuSections = menu.get('MenuSections', fromJS({}))
    .filter(showSection)
    .sortBy(menuSection => menuSection.get('DisplayOrder', 0))

  return (
    <div className={container}>
      <h1>Menu v.{menuVersionNumber}</h1>
      {
        menuSections.entrySeq().map(([, menuSection]) =>
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