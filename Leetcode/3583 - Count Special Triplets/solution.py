def specialTriplets(self, nums: List[int]) -> int:
    MOD: int = 10**9 + 7

    def totalIndicesLessThan(indices: List[int], target: int) -> int:
        start: int = 0
        end: int = len(indices)
        while start < end:
            mid: int = start + (end - start) // 2
            if indices[mid] < target:
                start = mid + 1
            else:
                end = mid
        return start

    def totalIndicesGreaterThan(indices: List[int], target: int) -> int:
        start: int = 0
        end: int = len(indices) - 1
        resIndex: int = len(indices)
        while start <= end:
            mid: int = start + (end - start) // 2
            if indices[mid] > target:
                resIndex = mid
                end = mid - 1
            else:
                start = mid + 1
        return len(indices) - resIndex

    numsMap: Dict[int, List[int]] = {}

    for i in range(len(nums)):
        num: int = nums[i]
        if num not in numsMap:
            numsMap[num] = []
        numsMap[num].append(i)

    for index_list in numsMap.values():
        index_list.sort()

    count: int = 0

    for jNum in numsMap:
        ikNum: int = jNum * 2
        if ikNum not in numsMap:
            continue

        for jIndex in numsMap[jNum]:
            iTotalIndices: int = totalIndicesLessThan(numsMap[ikNum], jIndex)
            kTotalIndices: int = totalIndicesGreaterThan(numsMap[ikNum], jIndex)
            count = (count + (iTotalIndices * kTotalIndices) % MOD) % MOD

    return count