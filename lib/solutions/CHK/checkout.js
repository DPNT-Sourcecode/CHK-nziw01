'use strict';
const getCountObject = require('./get-count-object')
const getSpecialCount = require('./get-special-count-object')

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (typeof skus !== 'string') {
        return -1
    }
let count = getCountObject(skus)
count = getSpecialCount(count)

const items = Object.keys(count)

let total =0
items.forEach(function(item) {
   if (count[item] > 0) {
   let i = item.toLowerCase()
   const calculate = require(`./calculate/calculate-${i}`)
   total+=calculate(count)
}

})
return total
};




