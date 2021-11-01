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

let total 
items.forEach(function(item) {
   console.log(count[item], item)
   if (count[item] > )
   let i = item.toLowerCase()
   const calculate = require(`./calculate/calculate-${i}`)
   //console.log(calculate(count), i)
   total+=calculate(count)
})
return total
};




