import { priceFormat } from 'helpers/price'

describe('price', () => {
  describe('priceFormat', () => {
    it('should return FREE_TEXT if price is 0', ()=> {
      expect(priceFormat(0)).toBe('included')
    })
    it('should return FREE_TEXT if price is 0.00', ()=> {
      expect(priceFormat(0.00)).toBe('included')
    })
    it('should return ¢ if price is less than 1.00', ()=> {
      expect(priceFormat(0.50)).toBe('50¢')
    })
    it('should return € if price is greater than 1.00', ()=> {
      expect(priceFormat(1.50)).toBe('€1.50')
    })
  })
})