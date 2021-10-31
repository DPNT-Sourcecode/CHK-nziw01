module.exports = function (count) {
    if (count.V % 3 === 0) {
        return (count.V / 3)*130
    }
    let remainder3V = count.V - ( count.V % 3 )
    let total = (remainder5a / 5) * 200
    if (count.A % 5 === 4) {
        totalA+=130
        totalA+=50
    }
    if (count.A % 5 ===3 ) {
        totalA+=130
    }
    if (count.A % 5 ===2) {
        totalA+=100
    }
    if (count.A % 5 ===1){
        totalA+=50
    }
    return totalA
}