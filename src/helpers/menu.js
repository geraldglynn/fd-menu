export const isNotDeleted = item => item.get('IsDeleted') !== true
export const isAvailable = item => item.get('IsAvailable') === true
export const isNotHiddenFromUsers = item => item.get('IsHiddenFromUsers') !== true
export const displayOrder = item => item.get('DisplayOrder', 0)
