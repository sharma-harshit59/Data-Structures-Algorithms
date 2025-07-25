function maxSum(nums: number[]): number {
    nums.sort((a, b) => b - a);
    if (nums[0] <= 0) return nums[0];

    const numSet = new Set<number>();
    let sum = 0;
    const n = nums.length;

    for (let i = 0; i < n && nums[i] > 0; i++) {
        if (i < n - 1 && nums[i] === nums[i + 1]) continue;
        sum += nums[i];
        numSet.add(nums[i]);
    }

    return sum;
};