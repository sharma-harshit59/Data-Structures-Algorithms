var twoSum = function(nums, target) {
    const numsIdx = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numsIdx.has(complement)) {
            return [numsIdx.get(complement), i];
        }
        numsIdx.set(nums[i], i);
    }
};