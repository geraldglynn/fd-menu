import { currencySymbol } from 'utils/currency'

describe('currency', () => {

  describe('currencySymbol', () => {

    describe('EU countries', () => {
      const contries = ['IE', 'ES', 'FR', 'DE']

      contries.forEach( country => {
        it(`should return € as currency major if locale in EU: ${country}`, ()=> {
          expect(currencySymbol(country).major).toBe('€')
        })
        it(`should return ¢ as currency minor if locale is EU: ${country}`, ()=> {
          expect(currencySymbol(country).minor).toBe('¢')
        })
      })
    })

    describe('GB countries', () => {
      const contries = ['GB', 'AI', 'BM', 'IO', 'GI']

      contries.forEach( country => {
        it(`should return € as currency major if locale in GB: ${country}`, ()=> {
          expect(currencySymbol(country).major).toBe('£')
        })
        it(`should return ¢ as currency minor if locale is GB: ${country}`, ()=> {
          expect(currencySymbol(country).minor).toBe('p')
        })
      })
    })

    describe('US countries', () => {
      const contries = ['US']

      contries.forEach( country => {
        it(`should return € as currency major if locale in US: ${country}`, ()=> {
          expect(currencySymbol(country).major).toBe('$')
        })
        it(`should return ¢ as currency minor if locale is US: ${country}`, ()=> {
          expect(currencySymbol(country).minor).toBe('¢')
        })
      })
    })
  })
})