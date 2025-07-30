def singleNumber(self, nums: List[int]) -> int:
    res: int = 0
    for num in nums:
        res ^= num
    return res