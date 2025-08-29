long long flowerGame(int n, int m) {
    long long nEven = n / 2;
    long long nOdd = (n + 1) / 2;
    long long mEven = m / 2;
    long long mOdd = (m + 1) / 2;
    return (nEven * mOdd) + (nOdd * mEven);
}