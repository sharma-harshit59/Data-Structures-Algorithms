var findThePrefixCommonArray = function(A, B) {
    let result = [], numCountMap = {}, commonNumCount = 0;
    for (let i = 0; i < A.length; i++) {
        numCountMap[A[i]] ??= 0; // Assigns a value if null/undefined
        numCountMap[A[i]]++;
        numCountMap[B[i]] ??= 0; // Assigns a value if null/undefined
        numCountMap[B[i]]++;
        if (A[i] == B[i]) {
            commonNumCount++;
        } else {
            commonNumCount += (numCountMap[A[i]] == 2);
            commonNumCount += (numCountMap[B[i]] == 2);
        }
        result.push(commonNumCount);
    }
    return result;
};