var minSum = function (nums1, nums2) {
    let sumNums1 = 0;
    let sumNums2 = 0;
    let zeroInNums1 = 0;
    let zeroInNums2 = 0;

    for (const num of nums1) {
        if (num === 0) {
            sumNums1 += 1;
            zeroInNums1++;
        } else {
            sumNums1 += num;
        }
    }
    for (const num of nums2) {
        if (num === 0) {
            sumNums2 += 1;
            zeroInNums2++;
        } else {
            sumNums2 += num;
        }
    }

    if ((sumNums1 < sumNums2 && zeroInNums1 === 0) || (sumNums2 < sumNums1 && zeroInNums2 === 0)) {
        return -1;
    } else {
        return Math.max(sumNums1, sumNums2);
    }
};