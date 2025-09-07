function minOperations(s: string): number {
    let maxDist: number = 0;
    for (const ch of s) {
        const dist: number = (26 - (ch.charCodeAt(0) - 'a'.charCodeAt(0))) % 26;
        maxDist = Math.max(maxDist, dist);
    }
    return maxDist;
};