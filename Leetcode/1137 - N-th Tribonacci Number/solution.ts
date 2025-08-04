function tribonacci(n: number): number {
    if (n === 0) return 0;
    if (n <= 2) return 1;

    let a: number = 0, b: number = 1, c: number = 1, res: number;
    for (let i = 3; i <= n; i++) {
        res = a + b + c;
        a = b;
        b = c;
        c = res;
    }

    return c;
};