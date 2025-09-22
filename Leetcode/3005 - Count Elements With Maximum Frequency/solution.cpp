int maxFrequencyElements(vector<int>& nums) {
    unordered_map<int, int> numFreq;
    int maxFreq = 0, maxFreqCount = 0;

    for (int num: nums) {
        numFreq[num]++;
        if (numFreq[num] > maxFreq) {
            maxFreq = numFreq[num]; // reset count when a new max frequency is found
            maxFreqCount = 1;
        } else if (numFreq[num] == maxFreq) {
            maxFreqCount++; // increment count when another element reaches max frequency
        }
    }

    return maxFreq * maxFreqCount;
}