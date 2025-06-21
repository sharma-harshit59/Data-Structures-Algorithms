function minimumDeletions(word: string, k: number): number {
    const charCount: number[] = new Array(26).fill(0);

    for (let i: number = 0; i < word.length; i++) {
        const index: number = word.charCodeAt(i) - 97;
        charCount[index]++;
    }

    const freqArr: number[] = charCount.filter(count => count > 0);
    let minDeletions: number = word.length;

    for (let i: number = 0; i < freqArr.length; i++) {
        const base: number = freqArr[i];
        let deletions: number = 0;
        for (let j: number = 0; j < freqArr.length; j++) {
            const curr: number = freqArr[j];
            if (curr < base) {
                deletions += curr;
            } else if (curr > base + k) {
                deletions += curr - (base + k);
            }
        }
        minDeletions = Math.min(minDeletions, deletions);
    }

    return minDeletions;
};