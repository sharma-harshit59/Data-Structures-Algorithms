def twoSum(self, nums: List[int], target: int) -> List[int]:
    visited: dict[int, int] = {}
    for i in range(len(nums)):
        complement: int = target - nums[i]
        if complement in visited:
            return [visited[complement], i]
        visited[nums[i]] = i