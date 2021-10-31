module.exports = function (count) {
    let remainder2b = count.B - ( count.B % 2 )
    let totalB = (remainder2b / 2) * 45
    totalB += ((count.B % 2)*30)
    return totalB
}
