const checkout = require('./checkout.test')

describe('checkout test', () =>{
    it('test valid inputs', () => {
      const checkoutResult = checkout('EE')
      expect(checkoutResult).toEqual(80)
    })
})