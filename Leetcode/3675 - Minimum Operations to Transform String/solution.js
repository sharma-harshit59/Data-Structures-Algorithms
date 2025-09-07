var minOperations = function(s) {
    let maxDist = 0;
    for (const ch of s) {
        const dist = (26 - (ch.charCodeAt(0) - 'a'.charCodeAt(0))) % 26;
        maxDist = Math.max(maxDist, dist);
    }
    return maxDist;
};