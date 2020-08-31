import { priceFormat, FREE_TEXT } from 'utils/price'

describe('price', () => {
  describe('priceFormat', () => {
    it('should return FREE_TEXT if price is 0', ()=> {
      expect(priceFormat(0)).toBe(FREE_TEXT)
    })
    it('should return FREE_TEXT if price is 0.00', ()=> {
      expect(priceFormat(0.00)).toBe(FREE_TEXT)
    })
    it('should return ¢ if price is less than 1.00', ()=> {
      expect(priceFormat(0.50)).toBe('50¢')
    })
    it('should return € if price is greater than 1.00', ()=> {
      expect(priceFormat(1.50)).toBe('€1.50')
    })
  })
})