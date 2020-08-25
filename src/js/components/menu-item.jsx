import React from 'react'
import MenuItemOptionSet from './menu-item-option-set'
import { Price } from './ui'
import { isNotDeleted, isAvailable, showPrice } from '../../utils'

const AGE_RESTRICTION = 18

class MenuItem extends React.Component {

  render() {
    const { 
      name, 
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
      <div className={`fd-menu-item ${!isAvailable ? 'currently-unavailable' : ''}`}>
        <img src={image.url} />
        <h4>{name}</h4>        
        <p>{description}</p>
        {/* spicinessRating */}
        { priceString ? <p>{priceString}</p> : null }
        <p>{`${alcohol ? `Must be +${AGE_RESTRICTION}` : ''}`}</p>
        {/* <p>{!tags.isEmpty() ? tags.map(tag => tag)
          : ''}}
        </p> */}
        { 
          menuItemOptionSets
          .filter(isNotDeleted)
          // .filter(isAvailable)
          .map(menuItemOptionSet => 
            <MenuItemOptionSet
              key={menuItemOptionSet.get('MenuItemOptionSetId')}
              isMasterOptionSet={menuItemOptionSet.get('IsMasterOptionSet')}
              name={menuItemOptionSet.get('Name')}
              minSelectCount={menuItemOptionSet.get('MinSelectCount')}
              maxSelectCount={menuItemOptionSet.get('MaxSelectCount')}
              menuItemOptionSetItems={menuItemOptionSet.get('MenuItemOptionSetItems')}
            />
          )
        }
      </div>
    )
  }
}

export default MenuItem