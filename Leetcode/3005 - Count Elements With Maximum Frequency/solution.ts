function maxFrequencyElements(nums: number[]): number {
    const numFreq: Map<number, number> = new Map();
    let maxFreq = 0;
    let maxFreqCount = 0;

    for (const num of nums) {
        const f = (numFreq.get(num) || 0) + 1;
        numFreq.set(num, f);

        if (f > maxFreq) {
            maxFreq = f;
            maxFreqCount = 1; // reset count when a new max frequency is found
        } else if (f === maxFreq) {
            maxFreqCount++;   // increment count when another element reaches max frequency
        }
    }

    return maxFreq * maxFreqCount;
};