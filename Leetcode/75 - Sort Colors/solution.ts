function sortColors(nums: number[]): void {
    let low: number = 0;
    let mid: number = 0;
    let high: number = nums.length - 1;

    while (mid <= high) {
        const value: number = nums[mid];
        if (value === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (value === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};