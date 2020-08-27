import React from 'react'
import MenuItemOptionSet from './menu-item-option-set'
import { Price } from './ui'
import { isNotDeleted, showPrice } from '../utils'

const AGE_RESTRICTION = 18

class MenuItem extends React.Component {

  render() {
    const {
      name: menuItemName,
      description,
      image,
      // spicinessRating,
      price,
      alcohol,
      // tags,
      isAvailable,
      menuItemOptionSets,
    } = this.props



    const priceString = showPrice(price, {menuItemOptionSets}) ? <Price price={price} /> : ''
    // const priceString = <Price price={price} />

    return (
      <div className={`menu-item ${!isAvailable ? 'currently-unavailable' : ''} row`}>
        <img src={image.url} className="menu-item-image col-3"/>
        <div className="menu-item-details col-7 row">
          <h4 className="col">{menuItemName}</h4>
          {/* <p>{description}</p> */}
          {/* spicinessRating */}
          {/* <p>{`${alcohol ? `Must be +${AGE_RESTRICTION}` : ''}`}</p> */}
          {/* <p>{!tags.isEmpty() ? tags.map(tag => tag)
            : ''}}
          </p> */}
          <div className="option-sets col">
            {
              menuItemOptionSets
                .filter(isNotDeleted)
                // .filter(isAvailable)
                .map(menuItemOptionSet =>
                  <MenuItemOptionSet
                    key={menuItemOptionSet.get('MenuItemOptionSetId')}
                    isMasterOptionSet={menuItemOptionSet.get('IsMasterOptionSet')}
                    menuItemName={menuItemName}
                    name={menuItemOptionSet.get('Name')}
                    minSelectCount={menuItemOptionSet.get('MinSelectCount')}
                    maxSelectCount={menuItemOptionSet.get('MaxSelectCount')}
                    menuItemOptionSetItems={menuItemOptionSet.get('MenuItemOptionSetItems')}
                  />
                )
            }
          </div>
        </div>
        <div className="menu-item-price col-2">{ priceString }</div>
      </div>
    )
  }
}

export default MenuItem