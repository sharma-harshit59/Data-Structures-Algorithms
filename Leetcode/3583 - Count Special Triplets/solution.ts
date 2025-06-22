function specialTriplets(nums: number[]): number {
    const MOD: number = 1e9 + 7;

    const totalIndicesLessThan = (indices: number[], target: number): number => {
        let start: number = 0;
        let end: number = indices.length;
        while (start < end) {
            const mid: number = start + Math.floor((end - start) / 2);
            if (indices[mid] < target) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    };

    const totalIndicesGreaterThan = (indices: number[], target: number): number => {
        let start: number = 0;
        let end: number = indices.length - 1;
        let resIndex: number = indices.length;
        while (start <= end) {
            const mid: number = start + Math.floor((end - start) / 2);
            if (indices[mid] > target) {
                resIndex = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return indices.length - resIndex;
    };

    let numsMap: Record<number, number[]> = {};
    for (let i: number = 0; i < nums.length; i++) {
        const num: number = nums[i];
        if (!numsMap[num]) numsMap[num] = [];
        numsMap[num].push(i);
    }

    let count: number = 0;
    for (const jNumStr in numsMap) {
        const jNum: number = parseInt(jNumStr);
        const ikNum: number = jNum * 2;

        if (!numsMap[ikNum]) continue;
        for (let j: number = 0; j < numsMap[jNum].length; j++) {
            const jIndex: number = numsMap[jNum][j];
            const iTotalIndices: number = totalIndicesLessThan(numsMap[ikNum], jIndex);
            const kTotalIndices: number = totalIndicesGreaterThan(numsMap[ikNum], jIndex);
            count = (count + (iTotalIndices * kTotalIndices) % MOD) % MOD;
        }
    }

    return count;
};