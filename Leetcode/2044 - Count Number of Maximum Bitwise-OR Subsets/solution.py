def countMaxOrSubsets(self, nums: List[int]) -> int:
    def getMaxORSubsetCount(nums: List[int], index: int, maxOR: int, currOR: int) -> int:
        if index == len(nums):
            return 1 if maxOR == currOR else 0
        else:
            include = getMaxORSubsetCount(nums, index + 1, maxOR, currOR | nums[index])
            exclude = getMaxORSubsetCount(nums, index + 1, maxOR, currOR)
            return include + exclude

    maxOR = 0
    for num in nums:
        maxOR |= num
    return getMaxORSubsetCount(nums, 0, maxOR, 0)