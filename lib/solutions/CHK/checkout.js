'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (typeof skus !== 'string') {
        return -1
    }
    let count = {
        A:0,
        B:0,
        C:0,
        D:0,
        E:0,
    }
    for (let item = 0; item < skus.length; item++) {
        const valid = ['A','B','C','D','E']
        if (!valid.includes(skus.charAt(item))){
            return -1
        }
        if (skus.charAt(item) ==='A') {
            count.A += 1
        }
        if (skus.charAt(item) ==='B') {
            count.B += 1
        }
        if (skus.charAt(item) ==='A') {
            count.A += 1
        }
        if (skus.charAt(item) ==='A') {
            count.A += 1
        }
        if (skus.charAt(item) ==='A') {
            count.A += 1
        }
    }
};


