function largestGoodInteger(num: string): string {
    let res: string = "";
    for (let i: number = 2; i < num.length; i++) {
        if (num[i - 2] === num[i - 1] && num[i - 1] === num[i]) {
            const tempStr: string = num[i].repeat(3);
            if (tempStr > res) res = tempStr;
        }
    }
    return res;
};