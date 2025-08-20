def zeroFilledSubarray(self, nums: List[int]) -> int:
    totCount = 0
    count = 0

    for num in nums:
        if num == 0:
            count += 1
        else:
            totCount += (count * (count + 1)) // 2
            count = 0

    totCount += (count * (count + 1)) // 2
    return totCount