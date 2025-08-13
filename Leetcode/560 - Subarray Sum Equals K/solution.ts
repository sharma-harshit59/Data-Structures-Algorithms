function subarraySum(nums: number[], k: number): number {
    const prefixSum: Map<number, number> = new Map();
    prefixSum.set(0, 1);

    let sum: number = 0;
    let count: number = 0;

    for (const num of nums) {
        sum += num;
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k)!;
        }
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
};