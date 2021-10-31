module.exports = function (count) {
    let remainder5p = count.P - ( count.P % 5 )
    let totalP = (remainder5p / 5) * 200
    totalP += ((count.P % 5)*50)
    return totalP
}
