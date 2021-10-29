'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (typeof skus !== 'string') {
        return -1
    }
    let myResult = {
        A:0,
        B:0,
        C:0,
        D:0,
        E:0
    }
    for (let item = 0; item < skus.length; item++) {
        const valid = ['A', 'B', 'C', 'D','E']
        if (!valid.includes(skus.charAt(item))) {
            return -1
        }
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
    let remainderA = myResult.A % 3
    let specialA = myResult.A - remainderA
    let totalA = ((specialA/3)*130) + (remainderA*50)

    let specialE = (myResult.E - myResult.E % 2) / 2

    let remainderB = myResult.B %2
    let specialB = myResult.B - remainderB
    let totalB = ((specialB/2)*45) + (remainderB*30)

    let totalC = myResult.C*20
    let totalD = myResult.D*15

    return totalA+totalB+totalC+totalD
};
