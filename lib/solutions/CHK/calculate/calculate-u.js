module.exports = function (count) {
    if (count.U < 4) {
        return count.U *10
    }
    let newCountF = count.F - ((count.F - (count.F % 3))/3)
    return newCountF*10
}

