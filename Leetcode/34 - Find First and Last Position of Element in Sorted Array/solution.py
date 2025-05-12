class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        result: List[int] = [-1, -1]
        firstIdx: int
        lastIdx: int

        # Search the left-most Occurence
        firstIdx = 0
        lastIdx = (len(nums) - 1)
        while (firstIdx <= lastIdx):
            midIdx: int = ((firstIdx + lastIdx) // 2)
            if (nums[midIdx] < target):
                firstIdx = midIdx + 1
            elif (nums[midIdx] > target):
                lastIdx = midIdx - 1
            else:
                result[0] = midIdx
                lastIdx = (midIdx - 1)
            
        
        # Search the right-most occurence
        if (result[0] != -1): # Search only if any occurence was found during the previous Binary Search
            firstIdx = 0
            lastIdx = len(nums) - 1
            while (firstIdx <= lastIdx):
                midIdx: int = ((firstIdx + lastIdx) // 2)
                if (nums[midIdx] < target):
                    firstIdx = midIdx + 1
                elif (nums[midIdx] > target):
                    lastIdx = midIdx - 1
                else:
                    result[1] = midIdx
                    firstIdx = midIdx + 1

        return result