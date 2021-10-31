'use strict';
const calculateA = require('./calculate/calculate-a')
const calculateB = require('./calculate-b');
const calculateF = require('./calculate-f');
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

let total 
items.forEach(function(item) {
   i = item.toLowerCase()
   const calculate = require(`./calculate/calculate-${i}`)
   total+=calculate(count)
})
return total
};



