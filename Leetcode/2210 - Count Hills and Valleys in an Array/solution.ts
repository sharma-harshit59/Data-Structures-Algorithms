function countHillValley(nums: number[]): number {
    const n = nums.length;
    let i = 1, count = 0;

    while (i < n - 1) {
        let j = i - 1;
        let k = i + 1;
        while (j > 0 && nums[j] === nums[i]) j--;
        while (k < n - 1 && nums[k] === nums[i]) k++;

        if ((nums[j] < nums[i] && nums[i] > nums[k]) ||
            (nums[j] > nums[i] && nums[i] < nums[k])) {
            count++;
        }
        i = k;
    }

    return count;
};