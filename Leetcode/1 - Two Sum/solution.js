var twoSum = function (nums, target) {
    const visited = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = (target - nums[i]);
        if (complement in visited) {
            return [visited[complement], i];
        }
        visited[nums[i]] = i;
    }
};