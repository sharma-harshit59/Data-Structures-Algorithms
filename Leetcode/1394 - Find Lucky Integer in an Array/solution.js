var findLucky = function (arr) {
    const numsCount = {};
    for (let i = 0; i < arr.length; i++) {
        numsCount[arr[i]] = (numsCount[arr[i]] ?? 0) + 1;
    }

    let res = -1;
    Object.keys(numsCount).forEach((key) => {
        num = Number(key);
        if ((num === numsCount[key]) && (num > res)) {
            res = num;
        }
    });

    return res;
};