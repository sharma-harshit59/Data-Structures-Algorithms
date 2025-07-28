vector<int> countBits(int n) {
    vector<int> setBitCount(n + 1, 0);
    int exp = 1;

    for (int i = 1; i <= n; i++) {
        if (i == exp) {
            setBitCount[i] = 1;
            exp *= 2;
        } else {
            setBitCount[i] = setBitCount[exp >> 1] + setBitCount[i - (exp >> 1)];
        }
    }

    return setBitCount;
}