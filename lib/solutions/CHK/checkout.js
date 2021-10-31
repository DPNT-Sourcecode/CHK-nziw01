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

const items = Object.keys(count).map
let totalA = calculateA(count)

let totalB = calculateB(count)

let totalC = count.C*20
let totalD = count.D*15
let totalE = count.E*40

let totalF = calculateF(count)
return totalA+totalB+totalC+totalD+totalE+totalF
};


