const checkout = require('./checkout')

describe('checkout test', () =>{
    it('test valid inputs', () => {
      const checkoutResult = checkout('AAABBCD')
      expect(checkoutResult).toEqual(210)
    })
})