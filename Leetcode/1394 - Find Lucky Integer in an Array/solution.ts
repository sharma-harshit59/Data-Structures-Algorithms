function findLucky(arr: number[]): number {
    const numsCount: Record<number, number> = {};

    for (const num of arr) {
        numsCount[num] = (numsCount[num] ?? 0) + 1;
    }

    let res: number = -1;

    for (const key in numsCount) {
        const num: number = Number(key);
        if (numsCount[num] === num && num > res) {
            res = num;
        }
    }

    return res;
};