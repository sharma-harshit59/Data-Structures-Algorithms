var getLeastFrequentDigit = function(n) {
    const digFreq = Array(10).fill(0);
    while (n > 0) {
        digFreq[n % 10]++;
        n = Math.floor(n / 10);
    }

    let leastFreqNum = -1;
    for (let i = 0; i < 10; i++) {
        if (digFreq[i] === 0) continue;
        if (leastFreqNum === -1 || digFreq[i] < digFreq[leastFreqNum]) {
            leastFreqNum = i;
        }
    }
    return leastFreqNum;
};