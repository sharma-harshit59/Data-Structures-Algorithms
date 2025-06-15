var maxDiff = function (num) {
    const strNum = num.toString();

    const getMaxNum = (numStr) => {
        let remapDig = '';
        let remapToDig = '9';
        for (let ch of numStr) {
            if (ch !== '9') {
                remapDig = ch;
                break;
            }
        }

        if (remapDig === '') return parseInt(numStr);
        const newStr = numStr.split('').map(dig => dig === remapDig ? remapToDig : dig).join('');
        return parseInt(newStr);
    };

    const getMinNum = (numStr) => {
        let remapDig = '';
        let remapToDig = '';

        if (numStr[0] !== '1') {
            remapDig = numStr[0];
            remapToDig = '1';
        } else {
            for (let i = 1; i < numStr.length; i++) {
                const dig = numStr[i];
                if (dig !== '0' && dig !== numStr[0]) {
                    remapDig = dig;
                    remapToDig = '0';
                    break;
                }
            }
        }

        if (remapDig === '') return parseInt(numStr);
        const newStr = numStr.split('').map(dig => dig === remapDig ? remapToDig : dig).join('');
        return parseInt(newStr);
    };

    return getMaxNum(strNum) - getMinNum(strNum);
};