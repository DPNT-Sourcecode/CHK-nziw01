const sum = require('./sum');

describe('test sum function', () => {
    it('if param 0 is not valid we will throw an error', () =>{
        try {
        sum(-1,34)}
        catch (e){
        expect(e).toEqual(Error('param 0 is not valid'))
        }
    })
    it('if param 0 is not valid we will throw an error', () =>{
        try {
        sum(1,-34)}
        catch (e){
        expect(e).toEqual(Error('param 1 is not valid'))
        }
    })
    it('with valid inputs sum will return the sum of two integers', () =>{
        const sumResult = sum(1,2)
    })
})