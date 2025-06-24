def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
    kDistIdxMerged: List[Tuple[int, int]] = []
    currStart: int = -1
    currEnd: int = -1

    for i in range(len(nums)):
        if nums[i] == key:
            start: int = max(i - k, 0)
            end: int = min(i + k, len(nums) - 1)

            if start <= (currEnd + 1):
                if currStart == -1:
                    currStart = start
            else:
                if currStart != -1 and currEnd != -1:
                    kDistIdxMerged.append((currStart, currEnd))
                currStart = start

            currEnd = end

    if currStart != -1 and currEnd != -1:
        kDistIdxMerged.append((currStart, currEnd))

    kDistantIndices: List[int] = []
    for low, high in kDistIdxMerged:
        for i in range(low, high + 1):
            kDistantIndices.append(i)

    return kDistantIndices