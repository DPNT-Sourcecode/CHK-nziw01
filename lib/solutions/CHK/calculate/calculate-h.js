module.exports = function (count) {
    if (count.H % 10 === 0) {
        return (count.H / 10)*80
    }
    let remainder10H = count.H - ( count.H % 10 )
    let totalH = (remainder10H / 10) * 80
    if (count.H % 10 === 9) {
        totalH+=45
        totalH+=40
    }
    if (count.H % 10 ===8 ) {
        totalH+=45
        totalH+=30
    }
    if (count.H % 10 ===7) {
        totalH+=45
        totalH+=20
    }
    if (count.H % 10 ===6){
        totalH+=45
        totalH+=10
    }
    if (count.H % 10 === 5) {
        totalH+=45
    }
    if (count.H % 10 ===4 ) {
        totalH+=40
    }
    if (count.H % 10 ===3) {
        totalH+=30
    }
    if (count.H % 10 ===2){
        totalH+=20
    }
    if (count.H % 10 ===1){
        totalH+=10
    }
    return totalH
}