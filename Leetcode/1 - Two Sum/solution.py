def twoSum(nums: List[int], target: int) -> List[int]:
    nums_idx: dict[int, int] = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in nums_idx:
            return [nums_idx[complement], i]
        nums_idx[num] = i