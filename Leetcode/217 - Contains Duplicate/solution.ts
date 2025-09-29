// Naive Solution
function containsDuplicate(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
};

// Better Solution
function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) return true;
    }
    return false;
};

// Best Solution
function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set<number>();
    for (let num of nums) {
        if (numSet.has(num)) return true;
        numSet.add(num);
    }
    return false;
};