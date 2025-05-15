function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const altSeq0: string[] = [];
    const altSeq1: string[] = [];
    let expect0: number = 0;
    let expect1: number = 1;

    for (let i: number = 0; i < groups.length; i++) {
        if (groups[i] === expect0) {
            altSeq0.push(words[i]);
            expect0 = 1 - expect0;
        }
        if (groups[i] === expect1) {
            altSeq1.push(words[i]);
            expect1 = 1 - expect1;
        }
    }

    return (altSeq0.length >= altSeq1.length) ? altSeq0 : altSeq1;
};