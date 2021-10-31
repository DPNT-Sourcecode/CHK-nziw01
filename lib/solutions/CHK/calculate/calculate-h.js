module.exports = function (count) {
    if (count.H % 10 === 0) {
        return (count.H / 10)*80
    }
    let remainder10H = count.H - ( count.H % 10 )
    let totalH = (remainder10H / 10) * 80
    if (count.H % 10 === 4) {
        totalH+=130
        totalH+=50
    }
    if (count.H % 10 ===3 ) {
        totalH+=130
    }
    if (count.H % 10 ===2) {
        totalH+=100
    }
    if (count.H % 10 ===1){
        totalH+=50
    }
    return totalH
}