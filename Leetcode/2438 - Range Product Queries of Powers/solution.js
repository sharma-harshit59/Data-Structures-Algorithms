var productQueries = function(n, queries) {
    const MOD = 1e9 + 7;
    const powers = [];

    for (let p = 1; p <= n; p <<= 1) {
        if ((n & p) !== 0) {
            powers.push(p);
        }
    }

    const answers = [];
    for (const [left, right] of queries) {
        let product = 1;
        for (let i = left; i <= right; i++) {
            product = (product * powers[i]) % MOD;
        }
        answers.push(product);
    }

    return answers;
};