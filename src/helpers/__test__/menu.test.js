import {
  isNotDeleted,
  // isAvailable,
  // isNotHiddenFromUsers,
  // sortByDisplayOrder,
} from '../menu'

import { mockResource } from './resources'

describe('menu helpers', () => {
  describe('isNotDeleted', () => {
      it('should return true if "IsDeleted" key is false', () => {
          const menuProperty = mockResource.set('IsDeleted', true)
          expect(isNotDeleted(menuProperty)).toBe(false)
      })
  })
})