import {
  isNotDeleted,
  isAvailable,
  isNotHiddenFromUsers,
  displayOrder,
} from '../menu'

import { mockProperty } from './resources'

describe('menu helpers', () => {
  describe('isNotDeleted', () => {
    it('should return true if "IsDeleted" key is false', () => {
      const menuProperty = mockProperty.set('IsDeleted', false)
      expect(isNotDeleted(menuProperty)).toBe(true)
    })
  })
  describe('isAvailable', () => {
    it('should return true if "IsAvailable" key is true', () => {
      const menuProperty = mockProperty.set('IsAvailable', true)
      expect(isAvailable(menuProperty)).toBe(true)
    })
  })
  describe('isNotHiddenFromUsers', () => {
    it('should return true if "HiddenFromUsers" key is false', () => {
      const menuPropertyFalse = mockProperty.set('HiddenFromUsers', false)
      expect(isNotHiddenFromUsers(menuPropertyFalse)).toBe(true)

      const menuPropertyDeleted = mockProperty.delete('HiddenFromUsers')
      expect(isNotHiddenFromUsers(menuPropertyDeleted)).toBe(true)
    })
  })
  describe('displayOrder', () => {
    it('should return value of "DisplayOrder" property', () => {
      const menuProperty = mockProperty.set('DisplayOrder', 2)
      expect(displayOrder(menuProperty)).toBe(2)
    })
  })
})