int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    int maxLen = 0;
    
    for (int num: numSet) {
        // Only start counting if num is the beginning of a sequence
        if (numSet.find(num-1) == numSet.end()) {
            int currNum = num + 1, currLen = 1;
            while (numSet.find(currNum) != numSet.end()) {
                currNum++;
                currLen++;
            }
            maxLen = max(maxLen, currLen);
        }
    }

    return maxLen;
}