function minMaxDifference(num: number): number {
    const getModifiedNum = (num: number, type: 'max' | 'min') => {
        const stack: number[] = [];
        while (num) {
            stack.push(num % 10);
            num = Math.floor(num / 10);
        }

        let newNum: number = 0;
        let remapDig: number = -1;
        const target: number = ((type === 'max') ? 9 : 0);
        while (stack.length) {
            newNum *= 10;
            const dig: number = stack.pop()!;
            if (remapDig === -1 && dig !== target) {
                remapDig = dig;
            }
            newNum += (dig === remapDig) ? target : dig;
        }
        return newNum;
    };

    return getModifiedNum(num, 'max') - getModifiedNum(num, 'min');
};