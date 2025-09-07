int getLeastFrequentDigit(int n) {
    vector<int> digFreq(10, 0);
    while (n > 0) {
        digFreq[n % 10]++;
        n /= 10;
    }

    int leastFreqNum = -1, leastFreq = INT_MAX;
    for (int i = 0; i < 10; i++) {
        if (digFreq[i] > 0) {
            if (digFreq[i] < leastFreq) {
                leastFreq = digFreq[i];
                leastFreqNum = i;
            }
        }
    }
    return leastFreqNum;
}