function maxSubsequence(nums: number[], k: number): number[] {
    return nums
        .map((num: number, index: number): [number, number] => [num, index])
        .sort((a: [number, number], b: [number, number]) => b[0] - a[0]) // Sort descending by value
        .slice(0, k) // Keep top-k elements
        .sort((a: [number, number], b: [number, number]) => a[1] - b[1]) // Sort back by original index
        .map((el: [number, number]) => el[0]); // Extract values
};