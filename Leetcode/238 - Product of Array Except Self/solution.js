var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(1);
    let prefix = 1, suffix = 1;
    
    for (let i = 1, j = nums.length - 2; i < nums.length && j >= 0; i++, j--) {
        prefix *= nums[i - 1];
        suffix *= nums[j + 1];
        res[i] *= prefix;
        res[j] *= suffix;
    }
    
    return res;
};