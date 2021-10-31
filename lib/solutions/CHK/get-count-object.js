module.exports = function (skus) {
    let count = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F:0,
        G:0,
        H:0,
        I:0,
        J:0,
        K:0,
        L:0,
        M:0,
        N:0,
        O:0,
        P:0,
        Q:0,
        R:0,
        S:0,
        T:0,
        U:0,
        V:0,
        W:0,
        X:0,
        Y:0,
        Z:0
    }
    for (let item = 0; item < skus.length; item++) {
        const valid = Object.keys(count)
        if (!valid.includes(skus.charAt(item))) {
            return -1
        }
        if (skus.charAt(item) === 'A') {
            count.A += 1
        }
        if (skus.charAt(item) === 'B') {
            count.B += 1
        }
        if (skus.charAt(item) === 'C') {
            count.C += 1
        }
        if (skus.charAt(item) === 'D') {
            count.D += 1
        }
        if (skus.charAt(item) === 'E') {
            count.E += 1
        }
        if (skus.charAt(item) === 'F') {
            count.F += 1
        }
        if (skus.charAt(item) === 'G') {
            count.A += 1
        }
        if (skus.charAt(item) === 'H') {
            count.B += 1
        }
        if (skus.charAt(item) === 'I') {
            count.C += 1
        }
        if (skus.charAt(item) === 'J') {
            count.D += 1
        }
        if (skus.charAt(item) === 'K') {
            count.E += 1
        }
        if (skus.charAt(item) === 'L') {
            count.F += 1
        }
        if (skus.charAt(item) === 'M') {
            count.A += 1
        }
        if (skus.charAt(item) === 'N') {
            count.B += 1
        }
        if (skus.charAt(item) === 'C') {
            count.C += 1
        }
        if (skus.charAt(item) === 'D') {
            count.D += 1
        }
        if (skus.charAt(item) === 'E') {
            count.E += 1
        }
        if (skus.charAt(item) === 'F') {
            count.F += 1
        }
        if (skus.charAt(item) === 'A') {
            count.A += 1
        }
        if (skus.charAt(item) === 'B') {
            count.B += 1
        }
        if (skus.charAt(item) === 'C') {
            count.C += 1
        }
        if (skus.charAt(item) === 'D') {
            count.D += 1
        }
        if (skus.charAt(item) === 'E') {
            count.E += 1
        }
        if (skus.charAt(item) === 'F') {
            count.F += 1
        }
    }
}