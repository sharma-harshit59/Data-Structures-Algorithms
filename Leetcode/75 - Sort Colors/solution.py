def sortColors(self, nums: List[int]) -> None:
        low: int = 0
        mid: int = 0
        high: int = len(nums) - 1

        while mid <= high:
            value = nums[mid]
            if value == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif value == 1:
                mid += 1
            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1