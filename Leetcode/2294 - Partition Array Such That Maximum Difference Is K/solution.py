def partitionArray(self, nums: List[int], k: int) -> int:
    nums.sort()
    totalSubSeq: int = 1
    currMin: int = nums[0]

    for i in range(1, len(nums)):
        if nums[i] - currMin > k:
            totalSubSeq += 1
            currMin = nums[i]

    return totalSubSeq