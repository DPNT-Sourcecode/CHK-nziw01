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
    remainderA = myResult.A % 3
    specialA = myResult.A - remainderA
    totalA = ((specialA/3)*130) + (remainderA*50)

    remainderB = myResult.B %2
    specialB = myResult.B - remainderB
    totalA = ((specialB/2)*45) + (remainderB*30)

    totalC = 


};