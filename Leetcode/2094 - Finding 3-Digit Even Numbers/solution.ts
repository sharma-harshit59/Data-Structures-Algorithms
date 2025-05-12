function findEvenNumbers(digits: number[]): number[] {
    const count: number[] = new Array(10).fill(0);
    for (const digit of digits) {
        count[digit]++;
    }
    const result: number[] = [];

    // Try all 3-digit numbers from 100 to 998 (step by 2 to ensure even)
    for (let num = 100; num <= 999; num += 2) {
        const d1: number = Math.floor(num / 100);
        const d2: number = Math.floor((num / 10)) % 10;
        const d3: number = num % 10;

        const tempCount: number[] = [...count];
        if (tempCount[d1]-- > 0 && tempCount[d2]-- > 0 && tempCount[d3]-- > 0) {
            result.push(num);
        }
    }

    return result;
}