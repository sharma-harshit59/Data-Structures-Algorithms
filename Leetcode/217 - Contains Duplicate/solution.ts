function containsDuplicate(nums: number[]): boolean {
    const numSet: Set<number> = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            return true;
        }
        numSet.add(nums[i]);
    }
    return false;
};