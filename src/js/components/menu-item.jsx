import React from 'react'

import MenuItemOptionSet from './menu-item-option-set'
import { Price } from './ui'

import { AGE_RESTRICTION } from '../../configs'
import { isNotDeleted, showPrice } from '../utils'

function MenuItem(props) {

  const {
    name: menuItemName,
    description,
    image,
    // spicinessRating,
    price,
    alcohol,
    isAvailable,
    menuItemOptionSets,
  } = props

  const priceString = showPrice(price, {isMenuItem: true, menuItemOptionSets}) ? <Price price={price} /> : ''

  const imageUrl = image.url || 'http://lorempixel.com/g/500/500/food/'

  return (
    <div className={`menu-item ${!isAvailable ? 'currently-unavailable' : ''} row`}>
      <img src={imageUrl} className="col-4"/>
      <div className="menu-item-details col-8">
        <div className="row">
          <h3>{menuItemName}</h3>
        </div>
        <div className="menu-item-price row justify-content-end">
          <div className="col-2">{ priceString }</div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>{description}</p>
            <p>{`${alcohol ? `Must be +${AGE_RESTRICTION}` : ''}`}</p>
          </div>
          {/* spicinessRating */}
          {/* <p>{!tags.isEmpty() ? tags.map(tag => tag)
            : ''}}
          </p> */}
          <div className="option-sets col-6">
            {
              menuItemOptionSets
                .filter(isNotDeleted)
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
      </div>


    </div>
  )

}

export default MenuItem