var minimizeXor = function(num1, num2) {
    let num1SetBits = 0, num2SetBits = 0, x;
    let num1Bits = num1.toString(2).split('');
    let num2Bits = num2.toString(2).split('');

    num1Bits.forEach((bit) => num1SetBits += (bit == '1'));
    num2Bits.forEach((bit) => num2SetBits += (bit == '1'));

    let diffBits = Math.abs(num2SetBits - num1SetBits);
    if (num1Bits.length < num2Bits.length) {
        num1Bits = Array(num2Bits.length - num1Bits.length).fill('0').concat(num1Bits);
    }
    for (let i = num1Bits.length-1; i >= 0 && diffBits; i--) {
        if (num1SetBits > num2SetBits) {
            if (num1Bits[i] == '1') {
                num1Bits[i] = '0';
                --diffBits;
            }
        } else if (num1SetBits < num2SetBits) {
            if (num1Bits[i] == '0') {
                num1Bits[i] = '1';
                --diffBits;
            }
        }
    }
    return parseInt(num1Bits.join(''), 2);;
};