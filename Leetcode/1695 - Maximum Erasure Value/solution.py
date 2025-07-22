def maximumUniqueSubarray(self, nums: List[int]) -> int:
    low = 0
    high = 0
    curr_score = 0
    max_score = 0
    num_set = set()

    while high < len(nums):
        if nums[high] in num_set:
            while nums[low] != nums[high]:
                num_set.remove(nums[low])
                curr_score -= nums[low]
                low += 1
            low += 1  # skip the duplicate element
        else:
            num_set.add(nums[high])
            curr_score += nums[high]
            max_score = max(max_score, curr_score)
        high += 1

    return max_score