function fib(n: number): number {
    if (n <= 1) return n;
    let prev2: number = 0;
    let prev1: number = 1;

    for (let i = 2; i <= n; i++) {
        [prev2, prev1] = [prev1, prev1 + prev2];
    }

    return prev1;
};