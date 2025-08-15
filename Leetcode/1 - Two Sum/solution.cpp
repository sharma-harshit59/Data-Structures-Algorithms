vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> numsIdx;
    for (int i = 0; i < nums.size(); i++) {
        const int complement = target - nums[i];
        if (numsIdx.find(complement) != numsIdx.end()) {
            return {numsIdx[complement], i};
        }
        numsIdx[nums[i]] = i;
    }
}