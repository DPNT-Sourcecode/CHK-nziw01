'use strict';
const calculateA = require('./calculate-a')
const calculateB = require('./calculate-b');
const calculateF = require('./calculate-f');

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (typeof skus !== 'string') {
        return -1
    }
    let count = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F:0,
        G:0,
        H:0,
        I:0,
        J:0,
        K:0,
        L:0,
        M:0,
        N:0,
        O:0,
        P:0,
        Q:0,

    }
    for (let item = 0; item < skus.length; item++) {
        const valid = ['A', 'B', 'C', 'D', 'E', 'F']
        if (!valid.includes(skus.charAt(item))) {
            return -1
        }
        if (skus.charAt(item) === 'A') {
            count.A += 1
        }
        if (skus.charAt(item) === 'B') {
            count.B += 1
        }
        if (skus.charAt(item) === 'C') {
            count.C += 1
        }
        if (skus.charAt(item) === 'D') {
            count.D += 1
        }
        if (skus.charAt(item) === 'E') {
            count.E += 1
        }
        if (skus.charAt(item) === 'F') {
            count.F += 1
        }
    }
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
