module.exports = function (count) {
    let remainder2k = count.K - ( count.K % 2 )
    let totalK = (remainder2k / 2) * 120
    totalK += ((count.K % 2)*70)
    return totalK
}