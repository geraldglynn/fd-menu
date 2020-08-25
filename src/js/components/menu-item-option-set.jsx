import React from 'react'
import { isNotDeleted, sortByDisplayOrder } from '../../utils'
import { Price } from './ui'

class MenuItemOptionSetItem extends React.Component {
  render() {
    const { name, price, isAvailable, isMasterOptionSet } = this.props
    // const isAddtionalItem = !isMasterOptionSet
    return(
        <li className={`${!isAvailable ? 'item-unavailble' : ''}`}>
          {name} <Price price={price} additionalItem={!isMasterOptionSet}/>
        </li>
    )
  }
}

class MenuItemOptionSet extends React.Component {
  render() {
    const { name, menuItemOptionSetItems } = this.props
    return(
      <div className="menu-item-option-set">
        <h5>{name}</h5>
        <ul>
          { menuItemOptionSetItems
            .filter(isNotDeleted)
            .sortBy(sortByDisplayOrder)
            .map(menuItemOptionSetItem => (
              <MenuItemOptionSetItem 
                key={menuItemOptionSetItem.get('MenuItemOptionSetItemId')}
                name={menuItemOptionSetItem.get('Name')}
                price={menuItemOptionSetItem.get('Price')}
                isAvailable={menuItemOptionSetItem.get('IsAvailable')}
                isMasterOptionSet={menuItemOptionSetItem.get('IsMasterOptionSet')}
                // "TaxRateId": null,
                // "TaxRate": null,
                // "TaxValue": 0,                                          
                // "Tags": [],
                // "NextMenuItemOptionSetId": null,              
                // "ImageName": null,
                // "ImageUrl": null,
                // "CellAspectRatio": 0,
                // "CellLayoutType": 0,
                // "OptionSetItemMetadata": []
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default MenuItemOptionSet