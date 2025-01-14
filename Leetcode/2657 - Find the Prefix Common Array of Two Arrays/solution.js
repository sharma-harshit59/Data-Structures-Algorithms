var findThePrefixCommonArray = function(A, B) {
    let result = [], countCommon = [];
    for (let i = 0; i <= A.length; i++) {
        countCommon.push(0);
    }
    for (let i = 0; i < A.length; i++) {
        countCommon[A[i]]++;
        countCommon[B[i]]++;
        let count = 0;
        for (let j = 0; j < countCommon.length; j++) {
            count += (countCommon[j] == 2);
        }
        result.push(count);
    }
    return result;
};