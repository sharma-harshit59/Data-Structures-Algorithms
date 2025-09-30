# Naive Solution
def triangularSum(nums: List[int]) -> int:
    while len(nums) > 1:
        temp = []
        for i in range(1, len(nums)):
            temp.append((nums[i] + nums[i - 1]) % 10)
        nums = temp
    return nums[0]

# Better Solution
def triangularSum(self, nums: List[int]) -> int:
    n = len(nums)
    while n > 1:
        for i in range(1, len(nums)):
            nums[i - 1] = (nums[i - 1] + nums[i]) % 10
        n -= 1
    return nums[0]