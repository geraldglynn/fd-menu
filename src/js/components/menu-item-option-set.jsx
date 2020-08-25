import React from 'react'
import { isNotDeleted, sortByDisplayOrder } from '../../utils'
import { Price } from './ui'

class MenuItemOptionSetItem extends React.Component {
  render() {
    const { name, price, isAvailable } = this.props
    return(
        <li className={`${!isAvailable ? 'item-unavailble' : ''}`}>{name} <Price price={price} /></li>              
    )
  }
}



class MenuItemOptionSet extends React.Component {
  render() {
    const { menuItemOptionSetItems } = this.props
    return(
      <ul className="menu-item-option-set">
        { menuItemOptionSetItems
          .filter(isNotDeleted)
          .sortBy(sortByDisplayOrder)
          .map(menuItemOptionSetItem => (
            <MenuItemOptionSetItem 
              key={menuItemOptionSetItem.get('MenuItemOptionSetItemId')}
              name={menuItemOptionSetItem.get('Name')}
              price={menuItemOptionSetItem.get('Price')}
              isAvailable={menuItemOptionSetItem.get('IsAvailable')}
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
    )
  }
}

export default MenuItemOptionSet