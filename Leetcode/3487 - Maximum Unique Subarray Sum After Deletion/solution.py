def maxSum(self, nums: List[int]) -> int:
    nums.sort(reverse=True)
    if nums[0] <= 0:
        return nums[0]

    num_set = set()
    total = 0
    n = len(nums)

    for i in range(n):
        if nums[i] <= 0:
            break
        if i < n - 1 and nums[i] == nums[i + 1]:
            continue
        total += nums[i]
        num_set.add(nums[i])

    return total