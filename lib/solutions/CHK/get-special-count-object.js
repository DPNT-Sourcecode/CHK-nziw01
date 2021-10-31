module.exports = function (count) {
    let specialE = (count.E - (count.E % 2)) / 2
    let specialN = (count.N - (count.N % 3)) / 3
    let specialR = (count.R - (count.R % 3)) / 3
    
    if (count.Q !== 0) {
        count.Q = count.Q-specialR
    }
    
    if (count.M !== 0) {
        count.M = count.M-specialN
    }
    
    if (count.B !== 0){
    count.B = count.B - specialE
    }
    return count
}