module.exports = function (count) {
    if (count.H % 10 === 0) {
        return (count.H / 10)*80
    }
    let remainder10H = count.H - ( count.H % 10 )
    let totalH = (remainder10H / 10) * 200
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