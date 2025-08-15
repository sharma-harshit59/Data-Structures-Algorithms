function twoSum(nums: number[], target: number): number[] {
    const numsIdx: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement: number = target - nums[i];
        if (numsIdx.has(complement)) {
            return [numsIdx.get(complement)!, i];
        }
        numsIdx.set(nums[i], i);
    }
};