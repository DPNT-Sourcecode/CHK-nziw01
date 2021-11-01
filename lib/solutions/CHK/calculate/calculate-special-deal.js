module.exports = function (count) {
    let newCount = {
        Z: count.Z,
        Y: count.Y,
        S: count.S,
        T: count.T,
        X: count.X
    }
    let totalItems = count.Z+count.Y+count.S+count.T+count.X
    let totalDeals = (totalItems - (totalItems % 3))/3
    while ()

}