def countHillValley(self, nums: List[int]) -> int:
    n = len(nums)
    i = 1
    count = 0

    while i < n - 1:
        j, k = i - 1, i + 1
        while j > 0 and nums[j] == nums[i]:
            j -= 1
        while k < n - 1 and nums[k] == nums[i]:
            k += 1

        if (nums[j] < nums[i] and nums[i] > nums[k]) or (nums[j] > nums[i] and nums[i] < nums[k]):
            count += 1
        i = k

    return count