var findEvenNumbers = function (digits) {
    const count = new Array(10).fill(0);
    for (const digit of digits) {
        count[digit]++;
    }
    const result = [];

    // Try all 3-digit numbers from 100 to 998 (step by 2 to ensure even)
    for (let num = 100; num <= 999; num += 2) {
        const d1 = Math.floor(num / 100);
        const d2 = Math.floor((num / 10)) % 10;
        const d3 = num % 10;

        const tempCount = [...count];
        if (tempCount[d1]-- > 0 && tempCount[d2]-- > 0 && tempCount[d3]-- > 0) {
            result.push(num);
        }
    }

    return result;
};