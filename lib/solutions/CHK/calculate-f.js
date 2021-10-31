module.exports = function (count) {
    if (count.F < 3) {
        return count.F *10
    }
    let newCountF = count.F - ((count.F - (count.F % 3))/3)
    return newCountF*10
}




