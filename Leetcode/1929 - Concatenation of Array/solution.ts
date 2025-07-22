function getConcatenation(nums: number[]): number[] {
    let n: number = nums.length;
    for (let i = 0; i < n; i++) {
        nums.push(nums[i]);
    }
    return nums;
};