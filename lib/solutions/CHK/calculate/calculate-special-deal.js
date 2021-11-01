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
    let counter = 0
    newCount.forEach(function(item) {
        while(counter < totalDeals && item.count!==0) {
            item.count -=1
            counter +=1
        }
    })
    let totalDealsPrice = (totalDeals/3)*45
    let total = 0
    newCount.forEach(function(item){
        if (item.count !==0){
            total+= item.count*item.price
        }
    })
    total+=totalDealsPrice
    return total
}


