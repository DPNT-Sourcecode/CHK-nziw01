module.exports = function (count) {
    let remainder5p = count.P - ( count.P % 2 )
    let totalP = (remainder5p / 2) * 45
    totalP += ((count.P % 2)*30)
    return totalB
}