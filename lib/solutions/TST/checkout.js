const checkout = require('../CHK/checkout')

describe('checkout test', () =>{
    it('test valid inputs', () => {
      const checkoutResult = checkout('EE')
      expect(checkoutResult).toEqual(80)
    })
})