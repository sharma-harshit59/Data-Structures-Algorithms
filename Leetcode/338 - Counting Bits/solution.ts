function countBits(n: number): number[] {
    const setBitCount: number[] = new Array(n + 1).fill(0);
    let exp: number = 1;

    for (let i = 1; i <= n; i++) {
        if (i === exp) {
            setBitCount[i] = 1;
            exp *= 2;
        } else {
            setBitCount[i] = setBitCount[exp >> 1] + setBitCount[i - (exp >> 1)];
        }
    }

    return setBitCount;
};