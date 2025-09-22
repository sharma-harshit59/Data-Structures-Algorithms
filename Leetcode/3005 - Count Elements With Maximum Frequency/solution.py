def maxFrequencyElements(self, nums: List[int]) -> int:
    numFreq: dict[int, int] = {}
    maxFreq: int = 0
    maxFreqCount: int = 0

    for num in nums:
        numFreq[num] = numFreq.get(num, 0) + 1
        f = numFreq[num]

        if f > maxFreq:
            maxFreq = f
            maxFreqCount = 1  # reset count when a new max frequency is found
        elif f == maxFreq:
            maxFreqCount += 1  # increment count when another element reaches max frequency

    return maxFreq * maxFreqCount