int maximumUniqueSubarray(vector<int>& nums) {
    int low = 0, high = 0;
    int maxScore = 0, currScore = 0;
    unordered_set<int> numSet;

    while (high < nums.size()) {
        if (numSet.find(nums[high]) != numSet.end()) {
            // Shrink the window from the left until the duplicate is removed
            while (nums[low++] != nums[high]) {
                numSet.erase(nums[low - 1]);
                currScore -= nums[low - 1];
            }
        } else {
            numSet.insert(nums[high]);
            currScore += nums[high];
            maxScore = max(maxScore, currScore);
        }
        high++;
    }
    return maxScore;
}