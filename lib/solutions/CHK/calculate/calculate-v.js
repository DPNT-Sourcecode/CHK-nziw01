module.exports = function (count) {
    if (count.V % 3 === 0) {
        return (count.V / 3)*130
    }
    let remainder3V = count.V - ( count.V % 3 )
    let totalV = (remainder3V / 3) * 130
    if (count.V % 3 === 2) {
        totalV+=90
    }
    if (count.V % 3 ===1 ) {
        totalV+=50
    }
    return totalV
}