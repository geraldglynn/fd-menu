export const isNotDeleted = item => item.get('IsDeleted') !== true
export const isAvailable = item => item.get('IsAvailable') === true
export const isNotHiddenFromUsers = item => item.get('IsHiddenFromUsers') !== true

export const sortByDisplayOrder = menuItem => menuItem.get('DisplayOrder', 0)
