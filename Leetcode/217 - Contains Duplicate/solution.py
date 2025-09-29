# Naive Solution
def containsDuplicate(nums: List[int]) -> bool:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return True
    return False

# Better Solution
def containsDuplicate(nums: List[int]) -> bool:
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i - 1]:
            return True
    return False

# Best Solution
def containsDuplicate(nums: List[int]) -> bool:
    num_set = set()
    for num in nums:
        if num in num_set:
            return True
        num_set.add(num)
    return False