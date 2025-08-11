function productQueries(n: number, queries: number[][]): number[] {
    const MOD = 1e9 + 7;
    const powers: number[] = [];

    for (let p = 1; p <= n; p <<= 1) {
        if ((n & p) !== 0) {
            powers.push(p);
        }
    }

    const answers: number[] = [];
    for (const [left, right] of queries) {
        let product = 1;
        for (let i = left; i <= right; i++) {
            product = (product * powers[i]) % MOD;
        }
        answers.push(product);
    }
    
    return answers;
};