module.exports = function (count) {
    let remainder5a = count.A - ( count.A % 5 )
    let totalA = (remainder5a / 5) * 200

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