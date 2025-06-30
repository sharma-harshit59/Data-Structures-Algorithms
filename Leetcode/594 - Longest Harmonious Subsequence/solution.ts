function findLHS(nums: number[]): number {
    const numsCount: Record<number, number> = {};
    for (const num of nums) {
        numsCount[num] = (numsCount[num] ?? 0) + 1;
    }

    let longestSeq: number = 0;
    for (const key in numsCount) {
        const num = Number(key);
        if (numsCount[num + 1] !== undefined) {
            const currSeqLength: number = numsCount[num] + numsCount[num + 1];
            longestSeq = Math.max(longestSeq, currSeqLength);
        }
    }

    return longestSeq;
};