function findJudge(n: number, trust: number[][]): number {
    const trusted: number[] = new Array(n + 1).fill(0);
    const trusts: number[] = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trusts[a]++;
        trusted[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if ((trusted[i] === n - 1) && (trusts[i] === 0)) {
            return i;
        }
    }

    return -1;
};