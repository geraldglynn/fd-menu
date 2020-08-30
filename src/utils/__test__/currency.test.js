import { currencySymbol } from 'utils/currency'

describe('currency', () => {
  describe('currencySymbol', () => {
    it('should return € as currency major if locale is IE', ()=> {
      expect(currencySymbol('IE').major).toBe('€')
    })
    it('should return ¢ as currency minor if locale is IE', ()=> {
      expect(currencySymbol('IE').minor).toBe('¢')
    })
  })
})