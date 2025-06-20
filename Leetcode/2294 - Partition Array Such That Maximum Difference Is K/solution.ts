function partitionArray(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let totalSubSeq: number = 1;
    let currMin: number = nums[0];
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] - currMin > k) {
            totalSubSeq++;
            currMin = nums[i];
        }
    }
    return totalSubSeq;
};