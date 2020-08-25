import React from 'react'
import MenuItemOptionSet from './menu-item-option-set'
import { isNotDeleted, isAvailable } from '../../utils'

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
      menuItemOptionSets
    } = this.props

    // const style = 
    
    return (
      <div className={`fd-menu-item ${!isAvailable ? 'currently-unavailable' : ''}`}>
        <img src={image.url} />
        <h4>{ name }</h4>        
        <p>{description}</p>
        {/* spicinessRating */}
        <p>{ price }</p>
        <p>{`${alcohol ? 'Alcohol' : ''}`}</p>
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