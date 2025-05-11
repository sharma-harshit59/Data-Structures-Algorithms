function threeConsecutiveOdds(arr: number[]): boolean {
    if (arr.length < 3) {
        return false;
    }
    for (let idx: number = 0; idx <= (arr.length - 3); idx++) {
        if ((arr[idx] % 2) && (arr[idx + 1] % 2) && (arr[idx + 2] % 2)) {
            return true;
        }
    }
    return false;
};