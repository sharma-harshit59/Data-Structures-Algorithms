function nextGreatestLetter(letters: string[], target: string): string {
    let firstIdx: number = 0;
    let lastIdx: number = letters.length - 1;

    while (firstIdx <= lastIdx) {
        const midIdx: number = Math.floor((firstIdx + lastIdx) / 2);
        if (letters[midIdx] <= target) {
            firstIdx = midIdx + 1;
        } else {
            lastIdx = midIdx - 1;
        }
    }

    // If firstIdx goes past the array, wrap around
    return letters[firstIdx % letters.length];
}
