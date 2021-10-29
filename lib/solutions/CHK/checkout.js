'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let myResult = {
        A:0,
        B:0,
        C:0,
        D:0
    }
    for (let item = 0; item < skus.length; item++) {
        if (skus.charAt(item)==='A'){
            myResult.A +=1
        }
        if (skus.charAt(item)==='B'){
            myResult.B +=1
        }
        if (skus.charAt(item)==='C'){
            myResult.C +=1
        }
        if (skus.charAt(item)==='D'){
            myResult.D +=1
        }
    }
    specialA = 

};