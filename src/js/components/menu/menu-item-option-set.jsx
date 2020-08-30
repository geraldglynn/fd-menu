import React from 'react'
import { isNotDeleted, sortByDisplayOrder } from 'js/utils'
import { Price } from 'js/components/ui'

function MenuItemOptionSetItem(props){
  const { name, price, isAvailable, additionalItem } = props

  return (
    <div className={`${!isAvailable ? 'item-unavailble' : ''} row`}>
      <span className="col-8">{ name }</span>
      <span className="col-4"><Price price={price} additionalItem={additionalItem}/></span>
    </div>
  )
}

function MenuItemOptionSet(props) {
  const { menuItemName, name: optionSetName, menuItemOptionSetItems, isMasterOptionSet, minSelectCount } = props
  return(
    <div className="menu-item-option-set">
      <h4>{optionSetName}</h4>
      <div className="">
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