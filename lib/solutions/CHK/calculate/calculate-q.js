module.exports = function (count) {
    let remainder3q = count.Q - ( count.Q % 3 )
    let totalQ = (remainder3q / 3) * 80
    totalQ += ((count.Q % 3)*30)
    return totalQ
}