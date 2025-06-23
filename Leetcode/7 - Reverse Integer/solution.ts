function reverse(x: number): number {
    let rev: number = 0;
    let num: number = Math.abs(x);
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.trunc(num / 10);
    }

    if (x < 0) rev = -rev;
    return (rev >= -(2 ** 31) && rev < 2 ** 31) ? rev : 0;
};