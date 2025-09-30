// Naive Solution
function triangularSum(nums: number[]): number {
    while (nums.length > 1) {
        const temp: number[] = [];
        for (let i = 1; i < nums.length; i++) {
            temp.push((nums[i] + nums[i - 1]) % 10);
        }
        nums = temp;
    }
    return nums[0];
};

// Better Solution
function triangularSum(nums: number[]): number {
    let n: number = nums.length;
    while (n > 1) {
        for (let i = 1; i < nums.length; i++) {
            nums[i - 1] = (nums[i - 1] + nums[i]) % 10;
        }
        n--;
    }
    return nums[0];
};

// Best Solution
function triangularSum(nums: number[]): number {
    const n: number = nums.length;
    let res: number = 0;
    let C: bigint = 1n;

    for (let i = 0; i < n; i++) {
        res = (res + Number((C % 10n) * BigInt(nums[i]) % 10n)) % 10;
        C = (C * BigInt(n - 1 - i)) / BigInt(i + 1);
    }

    return res;
};