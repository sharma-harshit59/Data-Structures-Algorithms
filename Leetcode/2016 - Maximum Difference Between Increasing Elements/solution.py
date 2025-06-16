def maximumDifference(self, nums: List[int]) -> int:
    curr_min = nums[0]
    max_diff = -1

    for i in range(1, len(nums)):
        if nums[i] > curr_min:
            max_diff = max(max_diff, nums[i] - curr_min)
        else:
            curr_min = nums[i]

    return max_diff