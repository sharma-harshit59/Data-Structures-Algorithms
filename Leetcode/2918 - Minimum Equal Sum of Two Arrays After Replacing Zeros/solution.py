class Solution:
    def minSum(self, nums1: List[int], nums2: List[int]) -> int:
        sumNums1, sumNums2, zeroInNums1, zeroInNums2 = (0, 0, 0, 0)

        for num in nums1:
            if (num == 0):
                sumNums1 += 1
                zeroInNums1 += 1
            else:
                sumNums1 += num

        for num in nums2:
            if (num == 0):
                sumNums2 += 1
                zeroInNums2 += 1
            else:
                sumNums2 += num

        if ((sumNums1 < sumNums2 and zeroInNums1 == 0) or (sumNums2 < sumNums1 and zeroInNums2 == 0)):
            return -1
        else:
            return max(sumNums1, sumNums2)