var minimumDeletions = function (word, k) {
    const charCount = new Array(26).fill(0);
    for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 97;
        charCount[index]++;
    }

    const freqArr = charCount.filter(count => count > 0);
    let minDeletions = word.length;
    for (let i = 0; i < freqArr.length; i++) {
        const base = freqArr[i];
        let deletions = 0;
        for (let j = 0; j < freqArr.length; j++) {
            const curr = freqArr[j];
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