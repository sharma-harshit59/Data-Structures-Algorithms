function majorityElement(nums: number[]): number {
    let count: number = 0;
    let candidate: number = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};