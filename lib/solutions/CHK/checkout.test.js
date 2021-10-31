const checkout = require('./checkout')

describe('checkout test', () =>{
    it('test valid inputs', () => {
      const checkoutResult = checkout('EE')
      expect(checkoutResult).toEqual(80)
    })
    it('test valid inputs', () => {
      const checkoutResult = checkout('A')
      expect(checkoutResult).toEqual(50)
    })
    it('test valid inputs', () => {
      const checkoutResult = checkout('B')
      expect(checkoutResult).toEqual(30)
    })
    it('test valid inputs', () => {
      const checkoutResult = checkout('ABCDE')
      expect(checkoutResult).toEqual(155)
    })
    it('test valid inputs', () => {
      const checkoutResult = checkout('FFF')
      expect(checkoutResult).toEqual(20)
    })
})