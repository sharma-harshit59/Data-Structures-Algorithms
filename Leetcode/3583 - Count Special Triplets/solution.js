var specialTriplets = function (nums) {
    const MOD = 1e9 + 7;

    const totalIndicesLessThan = function (indices, target) {
        let start = 0;
        let end = indices.length;
        while (start < end) {
            const mid = start + Math.floor((end - start) / 2);
            if (indices[mid] < target) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    };

    const totalIndicesGreaterThan = function (indices, target) {
        let start = 0;
        let end = indices.length - 1;
        let resIndex = indices.length;
        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            if (indices[mid] > target) {
                resIndex = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return indices.length - resIndex;
    };

    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (!numsMap[nums[i]]) numsMap[nums[i]] = [];
        numsMap[nums[i]].push(i);
    }

    let count = 0;
    for (const jNum in numsMap) {
        const ikNum = jNum * 2;
        if (!numsMap[ikNum]) continue;

        numsMap[jNum].forEach((jIndex) => {
            const iTotalIndices = totalIndicesLessThan(numsMap[ikNum], jIndex);
            const kTotalIndices = totalIndicesGreaterThan(numsMap[ikNum], jIndex);
            count = (count + (iTotalIndices * kTotalIndices) % MOD) % MOD;
        });
    }

    return count;
};