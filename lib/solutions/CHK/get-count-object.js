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
            count.G += 1
        }
        if (skus.charAt(item) === 'H') {
            count.H += 1
        }
        if (skus.charAt(item) === 'I') {
            count.I += 1
        }
        if (skus.charAt(item) === 'J') {
            count.J += 1
        }
        if (skus.charAt(item) === 'K') {
            count.K += 1
        }
        if (skus.charAt(item) === 'L') {
            count.L += 1
        }
        if (skus.charAt(item) === 'M') {
            count.M += 1
        }
        if (skus.charAt(item) === 'N') {
            count.N += 1
        }
        if (skus.charAt(item) === 'O') {
            count.O += 1
        }
        if (skus.charAt(item) === 'P') {
            count.P += 1
        }
        if (skus.charAt(item) === 'Q') {
            count.Q += 1
        }
        if (skus.charAt(item) === 'R') {
            count.R += 1
        }
        if (skus.charAt(item) === 'S') {
            count.S += 1
        }
        if (skus.charAt(item) === 'T') {
            count.T += 1
        }
        if (skus.charAt(item) === 'U') {
            count.U += 1
        }
        if (skus.charAt(item) === 'V') {
            count.V += 1
        }
        if (skus.charAt(item) === 'W') {
            count.W += 1
        }
        if (skus.charAt(item) === 'X') {
            count.X += 1
        }
        if (skus.charAt(item) === 'Y') {
            count.Y += 1
        }
        if (skus.charAt(item) === 'Z') {
            count.Z += 1
        }
    }
    return count
}
