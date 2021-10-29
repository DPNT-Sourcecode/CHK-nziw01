const sum = require('./sum');

describe('test sum function', () => {
    it('if param 0 is not valid we will throw an error', () =>{
        const sumResult = sum(-1,34)
        expect()
    })
    it('if param 1 is not valid we will throw an error', () =>{
        const sumResult = sum(5,555)
    })
})