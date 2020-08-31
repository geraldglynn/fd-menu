import React from 'react'
import classNames from 'classnames'

import MenuItemOptionSet from './menu-item-option-set'
import { Price } from 'components/ui'

import { AGE_RESTRICTION } from 'configs'
import { isNotDeleted, showPrice } from 'helpers'

import { item, itemPrice, unavailableBlock } from './menu.module.scss'

function MenuItem(props) {

  const {
    name: menuItemName,
    description,
    image,
    price,
    alcohol,
    isAvailable,
    menuItemOptionSets,
  } = props

  const showPriceComponent = showPrice(price, {isMenuItem: true, menuItemOptionSets})
  const priceComponenet = showPriceComponent ? <Price price={price} /> : null

  const imageUrl = image.url || 'http://lorempixel.com/g/500/500/food/'

  const unavailable = !isAvailable || !image.url

  const className = {
    section: classNames('row', item, { [unavailableBlock]: unavailable }),
    image: classNames('col-4'),
    body: classNames('col-8'),
    name: classNames('row'),
    priceSection: classNames('row', 'justify-content-end', itemPrice),
    priceComponent: classNames('col-2'),
    details: classNames('row'),
    description: classNames('col-6'),
    optionSets: classNames('col-6'),
  }

  debugger

  const itemDetailsClass = classNames('col-8')

  return (
    <div className={className.section}>
      <img src={imageUrl} className={className.image} data-testid="menu-item-image"/>
      <div className={className.body}>
        <div className={className.name}>
          <h3>{menuItemName}</h3>
        </div>
        { showPriceComponent ?
        <div className={className.priceSection}>
          <div className={className.priceComponenet}>{priceComponenet}</div>
        </div> : null }
        <div className={className.details}>
          <div className={className.description}>
            <p>{description}</p>
            <p>{`${alcohol ? `Must be +${AGE_RESTRICTION}` : ''}`}</p>
          </div>
          { menuItemOptionSets ?
          <div className={className.optionSets}>
            {
              menuItemOptionSets
                .filter(isNotDeleted)
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
          </div> : null }
        </div>
      </div>


    </div>
  )

}

export default MenuItem