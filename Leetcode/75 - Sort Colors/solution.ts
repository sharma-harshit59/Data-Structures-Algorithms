function sortColors(nums: number[]): void {
    let low: number = 0;
    let mid: number = 0;
    let high: number = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        } else {
            mid++;
        }
    }
};