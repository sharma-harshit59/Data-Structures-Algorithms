function topKFrequent(nums: number[], k: number): number[] {
    const numsCount: Map<number, number> = new Map();
    for (const num of nums) {
        numsCount.set(num, (numsCount.get(num) || 0) + 1);
    }

    const bucket: Map<number, number[]> = new Map();
    let maxFreq: number = 0;
    for (const [num, freq] of numsCount) {
        maxFreq = Math.max(maxFreq, freq);
        if (!bucket.has(freq)) bucket.set(freq, []);
        bucket.get(freq)!.push(num);
    }

    const res: number[] = [];
    for (let freq = maxFreq; k > 0; freq--) {
        if (bucket.has(freq)) {
            for (const num of bucket.get(freq)!) {
                res.push(num);
                k--;
            }
        }
    }
    return res;
};