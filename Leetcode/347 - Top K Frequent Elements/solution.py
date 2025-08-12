def topKFrequent(nums: List[int], k: int) -> List[int]:
    numsCount: Dict[int, int] = {}
    for num in nums:
        numsCount[num] = numsCount.get(num, 0) + 1

    bucket: Dict[int, List[int]] = defaultdict(list)
    maxFreq: int = 0
    for num, freq in numsCount.items():
        maxFreq = max(maxFreq, freq)
        bucket[freq].append(num)

    res: List[int] = []
    for freq in range(maxFreq, 0, -1):
        if freq in bucket:
            for num in bucket[freq]:
                res.append(num)
                k -= 1
                if k == 0:
                    return res
    return res