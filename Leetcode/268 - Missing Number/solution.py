def missingNumber(nums: List[int]) -> int:
    res: int = 0
    for i in range(len(nums)):
        res ^= nums[i] ^ (i + 1)
    return res