function reorderedPowerOf2(n: number): boolean {
    const strNum: string = n.toString().split('').sort().join('');

    for (let i: number = 1; i <= 1e9; i <<= 1) {
        const stri: string = i.toString().split('').sort().join('');
        if (stri === strNum) {
            return true;
        }
    }
    return false;
};