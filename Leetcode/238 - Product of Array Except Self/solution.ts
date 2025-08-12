function productExceptSelf(nums: number[]): number[] {
    const res: number[] = new Array(nums.length).fill(1);
    let prefix: number = 1, suffix: number = 1;
    
    for (let i = 1, j = nums.length - 2; i < nums.length && j >= 0; i++, j--) {
        prefix *= nums[i - 1];
        suffix *= nums[j + 1];
        res[i] *= prefix;
        res[j] *= suffix;
    }
    
    return res;
};