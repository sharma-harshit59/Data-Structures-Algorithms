function* fibGenerator(): Generator<number, any, number> {
    let prev2: number = 0;
    let prev1: number = 1;

    while (true) {
        yield prev2;
        [prev2, prev1] = [prev1, prev1 + prev2];
    }
};