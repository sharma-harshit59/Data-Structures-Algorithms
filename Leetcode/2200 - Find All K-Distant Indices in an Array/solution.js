var findKDistantIndices = function (nums, key, k) {
    let kDistIdxMerged = [];
    let currStart = -1, currEnd = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            const start = Math.max(i - k, 0);
            const end = Math.min(i + k, nums.length - 1);
            if (start <= (currEnd + 1)) {
                if (currStart === -1) currStart = start;
            } else {
                if (!(currStart === -1 || currEnd === -1)) {
                    kDistIdxMerged.push([currStart, currEnd]);
                }
                currStart = start;
            }
            currEnd = end
        }
    }
    if (!(currStart === -1 || currEnd === -1)) {
        kDistIdxMerged.push([currStart, currEnd]);
    }

    let kDistantIndices = [];
    for (const [low, high] of kDistIdxMerged) {
        for (let i = low; i <= high; i++) {
            kDistantIndices.push(i);
        }
    }
    return kDistantIndices;
};