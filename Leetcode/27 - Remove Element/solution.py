def removeElement(nums: List[int], val: int) -> int:
    low, high = 0, len(nums) - 1

    while low <= high:
        if nums[low] == val:
            nums[low] = nums[high]
            high -= 1
        else:
            low += 1

    return low