class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        firstIdx = 0 # First Index of the Search array
        lastIdx = len(nums) - 1 # Last Index of the Search Array
        midIdx = (firstIdx + lastIdx) // 2

        while (firstIdx <= lastIdx): # Search until Search Array hasn't exhausted
            midIdx = (firstIdx + lastIdx) // 2
            if (nums[midIdx] == target):
                return midIdx
            elif (nums[midIdx] < target):
                # Target is larger than the Middle, hence it cannot exist before the Middle
                firstIdx = midIdx + 1
            else:
                # Target is smaller than the Middle, hence it cannot exist after the Middle
                lastIdx = midIdx - 1
        return (midIdx + 1) if (nums[midIdx] < target) else midIdx
        