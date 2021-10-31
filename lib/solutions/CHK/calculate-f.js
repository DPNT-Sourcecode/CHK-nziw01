module.exports = function (count) {
    if (count.F < 3) {
        return count.F *10
    }
    let newCountF = count.F - ((count.F - (count.F % 3))/3)
    console.log(newCountF)
    return newCountF*10
}



