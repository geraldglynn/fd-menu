import { priceFormat } from 'helpers/price'

describe('price', () => {

  describe('priceFormat', () => {

    describe('if price is free', () => {
    it('should return "included" if price is 0', ()=> {
      expect(priceFormat(0)).toBe('included')
    })
    it('should return "included" if price is 0.00', ()=> {
      expect(priceFormat(0.00)).toBe('included')
    })
  })

    describe('if price is above or below 1.00', () => {

      const locales = {
        'IE': {
          major: '€',
          minor: '¢',
        },
        'GB': {
          major: '£',
          minor: 'p',
        },
        'US': {
          major: '$',
          minor: '¢',
        }
      }

      for (const locale in locales) {
          const { major, minor} = locales[locale]

          it('should return ¢ if price is less than 1.00', ()=> {
            expect(priceFormat(0.50,{ locale })).toBe(`50${minor}`)
          })
          it('should return € if price is greater than 1.00 and has decimal price', ()=> {
            expect(priceFormat(1.50, { locale })).toBe(`${major}1.50`)
          })
          it('should return € if price is greater than 1.00 and has integer price', ()=> {
            expect(priceFormat(2, {locale })).toBe(`${major}2`)
          })

      }
    })
  })
})