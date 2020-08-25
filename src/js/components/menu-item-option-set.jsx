import React from 'react'
import { isNotDeleted, sortByDisplayOrder } from '../../utils'

class MenuItemOptionSetItem extends React.Component {
  render() {
    const { name, price } = this.props
    return(
      <div>
        <div> {name} </div>
        <div> {price} </div>
      </div>
    )
  }
}

class MenuItemOptionSet extends React.Component {
  render() {
    const { menuItemOptionSetItems } = this.props
    return(
      <div>
        { menuItemOptionSetItems
          .filter(isNotDeleted)
          .sortBy(sortByDisplayOrder)
          .map(menuItemOptionSetItem => (
            <MenuItemOptionSetItem 
              key={menuItemOptionSetItem.get('MenuItemOptionSetItemId')}
              name={menuItemOptionSetItem.get('Name')}
              price={menuItemOptionSetItem.get('Price')}
              IsAvailable={menuItemOptionSetItem.get('IsAvailable')}              
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
      </div>
    )
  }
}

export default MenuItemOptionSet