int subsetXORSum(vector<int>& nums, int index = 0, int currXOR = 0) {
    if (index == nums.size()) return currXOR;
    return subsetXORSum(nums, index + 1, currXOR) + subsetXORSum(nums, index + 1, currXOR ^ nums[index]);
}