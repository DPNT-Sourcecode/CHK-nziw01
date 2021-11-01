module.exports = function (count) {
    let newCount = {
        Z: count.Z,
        Y: count.Y,
        S: count.S,
        T: count.T,
        X: count.X
    }
    let totalItems = count.Z+count.Y+count.S+count.T+count.X
    let totalDeals = totalItems - (totalItems % 3)
    for (const item in newCount) {
        let count = 0
        while(count < totalDeals) {
            newCount[item] -=1
            count +=1
        }
    }
    let totalDealsPrice = (totalItems - (totalItems % 3)/3)* 45
    let total = 0
    for (const item in newCount) {
        if (newCount[item] !== 0) {
            
        }
    }
}