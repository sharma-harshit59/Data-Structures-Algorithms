var findLHS = function (nums) {
    const numsCount = {};
    for (const num of nums) {
        numsCount[num] = (numsCount[num] ?? 0) + 1;
    } let longestSeq = 0;
    for (let num in numsCount) {
        num = Number(num);
        if (numsCount[num + 1]) {
            const currSeqLength = numsCount[num] + numsCount[num + 1];
            longestSeq = Math.max(currSeqLength, longestSeq);
        }
    }
    return longestSeq;
};