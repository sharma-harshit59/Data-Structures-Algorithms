var subarraySum = function(nums, k) {
    const prefixSum = new Map();
    prefixSum.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of nums) {
        sum += num;
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k);
        }
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
};