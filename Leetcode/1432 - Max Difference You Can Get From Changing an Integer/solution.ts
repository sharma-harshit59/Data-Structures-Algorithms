function maxDiff(num: number): number {
    const strNum: string = num.toString();

    const getMaxNum = (numStr: string): number => {
        let remapDig: string = '';
        const remapToDig: string = '9';
        for (const ch of numStr) {
            if (ch !== '9') {
                remapDig = ch;
                break;
            }
        }

        if (remapDig === '') return parseInt(numStr);
        const newStr: string = numStr.split('').map((dig: string) => dig === remapDig ? remapToDig : dig).join('');
        return parseInt(newStr);
    };

    const getMinNum = (numStr: string): number => {
        let remapDig: string = '';
        let remapToDig: string = '';

        if (numStr[0] !== '1') {
            remapDig = numStr[0];
            remapToDig = '1';
        } else {
            for (let i = 1; i < numStr.length; i++) {
                const dig: string = numStr[i];
                if (dig !== '0' && dig !== numStr[0]) {
                    remapDig = dig;
                    remapToDig = '0';
                    break;
                }
            }
        }

        if (remapDig === '') return parseInt(numStr);
        const newStr: string = numStr.split('').map((dig: string) => dig === remapDig ? remapToDig : dig).join('');
        return parseInt(newStr);
    };

    return getMaxNum(strNum) - getMinNum(strNum);
};