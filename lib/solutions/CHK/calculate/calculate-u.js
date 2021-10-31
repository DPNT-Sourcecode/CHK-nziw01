module.exports = function (count) {
    if (count.U < 4) {
        return count.U *40
    }
    let newCountF = count.U - ((count.F - (count.F % 4))/4)
    return newCountF*40
}

