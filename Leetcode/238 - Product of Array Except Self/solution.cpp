vector<int> productExceptSelf(vector<int>& nums) {
    vector<int> res(nums.size(), 1);
    int prefix = 1, suffix = 1;
    
    for (int i = 1, j = nums.size() - 2; i < nums.size() && j >= 0; i++, j--) {
        prefix *= nums[i-1];
        suffix *= nums[j+1];
        res[i] *= prefix;
        res[j] *= suffix;
    }

    return res;
}