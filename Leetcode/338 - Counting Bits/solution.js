var countBits = function(n) {
    const setBitCount = new Array(n + 1).fill(0);
    let exp = 1;

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