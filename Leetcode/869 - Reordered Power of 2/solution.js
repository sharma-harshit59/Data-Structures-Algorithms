var reorderedPowerOf2 = function(n) {
    const strNum = String(n).split('').sort().join('');

    for (let i = 1; i <= 1e9; i <<= 1) {
        const stri = String(i).split('').sort().join('');
        if (stri === strNum) {
            return true;
        }
    }
    return false;
};