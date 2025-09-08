bool isNoZero(int n) {
    while (n) {
        if (n % 10 == 0) return false;
        n /= 10;
    }
    return true;
}

vector<int> getNoZeroIntegers(int n) {
    for (int i = 1; i <= n / 2; i++) {
        if (isNoZero(i) && isNoZero(n-i)) {
            return {i, n-i};
        }
    }
    return {};
}