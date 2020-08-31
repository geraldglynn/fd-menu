import React from 'react'
import classNames from 'classnames'

import { isNotDeleted, sortByDisplayOrder } from 'helpers'
import { Price } from 'components/ui'

import { optionSetItem, unavailableInline } from './menu.module.scss'

function MenuItemOptionSetItem(props){
  const { name: optionSetItemName, price, isAvailable, additionalItem } = props

  const className = {
    item: classNames('row', optionSetItem, { [unavailableInline]:!isAvailable }),
    name: classNames('col-8'),
    price: classNames('col-4')
  }

  return (
    <div className={className.item}>
      <span className={className.name}>{ optionSetItemName }</span>
      <span className={className.price}><Price price={price} additionalItem={additionalItem}/></span>
    </div>
  )
}

function MenuItemOptionSet(props) {
  const { menuItemName, name: optionSetName, menuItemOptionSetItems, isMasterOptionSet, minSelectCount } = props

  const className = {
    section: classNames('menu-item-option-set'),
    items: classNames('menu-item-option-set-items'),
  }

  return(
    <div className={className.section}>
      <h4>{optionSetName}</h4>
      <div className={className.items}>
        {
          menuItemOptionSetItems
          .filter(isNotDeleted)
          .sortBy(sortByDisplayOrder)
          .map(menuItemOptionSetItem => {
            // console.log(menuItemOptionSetItem.get('NextMenuItemOptionSetId'))
            return <MenuItemOptionSetItem
              key={menuItemOptionSetItem.get('MenuItemOptionSetItemId')}
              menuItemName={menuItemName}
              name={menuItemOptionSetItem.get('Name')}
              price={menuItemOptionSetItem.get('Price')}
              isAvailable={menuItemOptionSetItem.get('IsAvailable')}
              isMasterOptionSet={isMasterOptionSet}
              additionalItem={!minSelectCount}
              nextMenuItemOptionSetId={menuItemOptionSetItem.get('nextMenuItemOptionSetId')}
            />
          })}
      </div>
    </div>
  )
}

export default MenuItemOptionSet