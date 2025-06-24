function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    let kDistIdxMerged: [number, number][] = [];
    let currStart: number = -1, currEnd: number = -1;

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            const start: number = Math.max(i - k, 0);
            const end: number = Math.min(i + k, nums.length - 1);

            if (start <= (currEnd + 1)) {
                if (currStart === -1) currStart = start;
            } else {
                if (!(currStart === -1 || currEnd === -1)) {
                    kDistIdxMerged.push([currStart, currEnd]);
                }
                currStart = start;
            }
            currEnd = end;
        }
    }
    if (!(currStart === -1 || currEnd === -1)) {
        kDistIdxMerged.push([currStart, currEnd]);
    }

    let kDistantIndices: number[] = [];
    for (const [low, high] of kDistIdxMerged) {
        for (let i = low; i <= high; i++) {
            kDistantIndices.push(i);
        }
    }
    return kDistantIndices;
};