function zeroFilledSubarray(nums: number[]): number {
    let totCount: number = 0;
    let count: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else {
            totCount += (count * (count + 1)) / 2;
            count = 0;
        }
    }
    totCount += (count * (count + 1)) / 2;

    return totCount;
};