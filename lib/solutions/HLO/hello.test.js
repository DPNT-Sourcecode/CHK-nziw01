const hello = require('./hello');

describe('test hello function', () => {
    it('on input we expect to return hello input', () => {
        const helloResult = hello('ethan')
        expect(helloResult).toEqual("Hello, World!")
    })
})