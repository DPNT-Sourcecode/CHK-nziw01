const checkout = require('./checkout')

describe('checkout test', () =>{
    // // it('test valid inputs', () => {
    // //   const checkoutResult = checkout('EE')
    // //   expect(checkoutResult).toEqual(80)
    // // })
    // // it('test valid inputs', () => {
    // //   const checkoutResult = checkout('A')
    // //   expect(checkoutResult).toEqual(50)
    // // })
    // // it('test valid inputs', () => {
    // //   const checkoutResult = checkout('B')
    // //   expect(checkoutResult).toEqual(30)
    // // })
    // // it('test valid inputs', () => {
    // //   const checkoutResult = checkout('ABCDE')
    // //   expect(checkoutResult).toEqual(155)
    // // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('FFF')
    //   expect(checkoutResult).toEqual(20)
    // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('FFFFFFF')
    //   expect(checkoutResult).toEqual(50)
    // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('AAABBCDUVV')
    //   expect(checkoutResult).toEqual(340)
    // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('a')
    //   expect(checkoutResult).toEqual(-1)
    // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('-')
    //   expect(checkoutResult).toEqual(-1)
    // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('a')
    //   expect(checkoutResult).toEqual(-1)
    // })
    // it('test valid inputs', () => {
    //   const checkoutResult = checkout('VVVV')
    //   expect(checkoutResult).toEqual(180)
    // })
    it('test valid inputs', () => {
      const checkoutResult = checkout('ZXYZXYX')
      expect(checkoutResult).toEqual(107)
    })
})