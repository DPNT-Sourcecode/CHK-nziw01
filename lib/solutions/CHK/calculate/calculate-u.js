module.exports = function (count) {
    if (count.U < 4) {
        return count.U *40
    }
    let newCountU = count.U - ((count.U - (count.U % 4))/4)
    return newCountU*40
}


