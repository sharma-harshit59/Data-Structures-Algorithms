var flowerGame = function(n, m) {
    const nEven = Math.floor(n / 2);
    const mEven = Math.floor(m / 2);
    const nOdd = Math.floor((n + 1) / 2);
    const mOdd = Math.floor((m + 1) / 2);
    return (nEven * mOdd) + (nOdd * mEven);
};