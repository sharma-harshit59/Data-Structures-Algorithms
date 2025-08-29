function flowerGame(n: number, m: number): number {
    const nEven: number = Math.floor(n / 2);
    const mEven: number = Math.floor(m / 2);
    const nOdd: number = Math.floor((n + 1) / 2);
    const mOdd: number = Math.floor((m + 1) / 2);
    return (nEven * mOdd) + (nOdd * mEven);
};