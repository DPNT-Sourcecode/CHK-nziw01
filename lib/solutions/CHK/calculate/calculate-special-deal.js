module.exports = function (count) {
    let newCount = {
        Z: count.Z,
        Y: count.Y,
        S: count.S,
        T: count.T,
        X: count.X
    }
    let total =0
    for (const item in newCount) {
        count = 0
        while (newCount[item] !== 0){
             count+=1
             if(count ===3){
                 total+=45
             }
             newCount[item]-=1
        }
    }

}
