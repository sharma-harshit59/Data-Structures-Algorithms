int getMaxORSubsetCount(vector<int>& nums, int index, int& maxOR, int currOR) {
    if (index == nums.size()) {
        return (currOR == maxOR) ? 1 : 0;
    }

    int include = getMaxORSubsetCount(nums, index + 1, maxOR, currOR | nums[index]);
    int exclude = getMaxORSubsetCount(nums, index + 1, maxOR, currOR);

    return include + exclude;
}

int countMaxOrSubsets(vector<int>& nums) {
    int maxOR = 0;
    for (int num : nums) {
        maxOR |= num;
    }

    return getMaxORSubsetCount(nums, 0, maxOR, 0);
}