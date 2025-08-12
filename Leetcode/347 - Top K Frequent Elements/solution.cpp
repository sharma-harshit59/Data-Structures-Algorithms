vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> numsCount;
    for (int& num: nums) {
        numsCount[num]++;
    }

    unordered_map<int, vector<int>> bucket;
    int maxFreq = 0;
    for (auto& [num, freq]: numsCount) {
        maxFreq = max(maxFreq, freq);
        bucket[freq].push_back(num);
    }

    vector<int> res;
    for (int freq = maxFreq; k > 0; freq--) {
        for (int num: bucket[freq]) {
            res.push_back(num);
            k--;
        }
    }

    return res;
}