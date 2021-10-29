'use strict';

module.exports = function (x, y) {
    if (x <0 || x>100) {
        throw new Error('param 0 is not valid')
    }
    if (y <0 || y>100) {
        throw new Error('param 1 is not valid')
    }
    return x+y;
};

