function getConcatenation(nums: number[]): number[] {
    const ans: number[] = [...nums];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    return ans;
};