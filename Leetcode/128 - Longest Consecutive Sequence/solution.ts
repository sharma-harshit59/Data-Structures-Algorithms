function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums);
    let maxLen: number = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currNum: number = num;
            let currLen: number = 1;
            while (numSet.has(currNum + 1)) {
                currNum++;
                currLen++;
            }
            maxLen = Math.max(maxLen, currLen);
        }
    }

    return maxLen;
};