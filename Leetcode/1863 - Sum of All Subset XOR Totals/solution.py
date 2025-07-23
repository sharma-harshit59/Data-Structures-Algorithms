def subsetXORSum(self, nums: List[int], index: int = 0, currXOR: int = 0) -> int:
    if index == len(nums):
        return currXOR
    return self.subsetXORSum(nums, index + 1, currXOR ^ nums[index]) + self.subsetXORSum(nums, index + 1, currXOR)