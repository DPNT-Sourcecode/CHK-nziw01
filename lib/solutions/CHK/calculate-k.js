module.exports = function (count) {
    let remainder2k = count.K - ( count.K % 2 )
    let totalK = (remainder2k / 2) * 150
    totalK += ((count.K % 2)*80)
    return totalK
}