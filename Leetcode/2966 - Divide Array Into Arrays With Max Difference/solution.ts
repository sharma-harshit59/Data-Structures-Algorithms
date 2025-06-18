function divideArray(nums: number[], k: number): number[][] {
    const resArr: number[][] = [];
    nums.sort((a, b) => a - b);
    for (let i: number = 2; i < nums.length; i += 3) {
        if (nums[i] - nums[i - 2] > k) return [];
        resArr.push(nums.slice(i - 2, i + 1));
    }
    return resArr;
};