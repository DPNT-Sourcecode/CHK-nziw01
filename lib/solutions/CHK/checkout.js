'use strict';
const calculateA = require('./calculate/calculate-a')
const calculateB = require('./calculate-b');
const calculateF = require('./calculate-f');
const getCountObject = require('./get-count-object')

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (typeof skus !== 'string') {
        return -1
    }
    let count = getCountObject(skus)
let totalA = calculateA(count)

let specialE = (count.E - (count.E % 2)) / 2

if (count.B !== 0){
count.B = count.B - specialE
}
let totalB = calculateB(count)

let totalC = count.C*20
let totalD = count.D*15
let totalE = count.E*40

let totalF = calculateF(count)
return totalA+totalB+totalC+totalD+totalE+totalF
};
