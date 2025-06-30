var fibGenerator = function* () {
    let prev2 = 0;
    let prev1 = 1;
    while (true) {
        yield prev2;
        [prev2, prev1] = [prev1, prev1 + prev2];
    }
};