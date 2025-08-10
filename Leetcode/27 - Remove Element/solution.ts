function removeElement(nums: number[], val: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        if (nums[low] === val) {
            nums[low] = nums[high];
            high--;
        } else {
            low++;
        }
    }

    return low;
};