function twoSum(nums: number[], target: number): number[] {
    const visited: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        const complement: number = (target - nums[i]);
        if (complement in visited) {
            return [visited[complement], i];
        }
        visited[nums[i]] = i;
    }
};