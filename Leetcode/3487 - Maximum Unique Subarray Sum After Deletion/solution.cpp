int maxSum(vector<int>& nums) {
    sort(nums.begin(), nums.end(), greater<int>());
    if (nums[0] <= 0) return nums[0];
    
    unordered_set<int> numSet;
    int sum = 0, n = nums.size();
    for (int i = 0; i < n && nums[i] > 0; i++) {
        if ((i < n - 1) && (nums[i] == nums[i+1])) continue;
        else sum += nums[i];
        numSet.insert(nums[i]);
    }
    
    return sum;
}