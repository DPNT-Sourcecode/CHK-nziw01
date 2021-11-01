module.exports = function (count) {
    let newCount = [
        {count: count.Z, price:21},
        {count: count.Y, price:20},
        {count: count.S, price:20},
        {count: count.T, price:20},
        {count: count.X, price:17}
    ]
    let totalItems = count.Z+count.Y+count.S+count.T+count.X
    let totalDeals = totalItems - (totalItems % 3)
    for (const item in newCount) {
        let count = 0
        while(count < totalDeals) {
            newCount.count -=1
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


