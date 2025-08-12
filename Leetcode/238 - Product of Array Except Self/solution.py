def productExceptSelf(nums: List[int]) -> List[int]:
    res: List[int] = [1] * len(nums)
    prefix: int = 1
    suffix: int = 1
    
    i, j = 1, len(nums) - 2
    while i < len(nums) and j >= 0:
        prefix *= nums[i - 1]
        suffix *= nums[j + 1]
        res[i] *= prefix
        res[j] *= suffix
        i += 1
        j -= 1
    
    return res