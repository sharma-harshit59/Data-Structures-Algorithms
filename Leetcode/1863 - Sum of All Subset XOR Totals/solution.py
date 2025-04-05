class Solution:
    def subsetXORSum(self, nums: List[int]) -> int:
        subsetXorSum = 0
        def getSubsetXORSum(currentIndex: int, XORSum: int):
            nonlocal subsetXorSum
            if currentIndex == len(nums):
                subsetXorSum += XORSum
            else:
                getSubsetXORSum(currentIndex + 1, XORSum ^ nums[currentIndex])
                getSubsetXORSum(currentIndex + 1, XORSum)
        
        getSubsetXORSum(0, 0)
        return subsetXorSum