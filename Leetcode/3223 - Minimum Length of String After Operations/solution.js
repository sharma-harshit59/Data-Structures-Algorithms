var minimumLength = function(s) {
    let countArray = new Array(26).fill(0);
    let maxLength = s.length;
    for (let i = 0; i < s.length; i++) {
        countArray[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        maxLength -= countArray[i] ? (Math.floor((countArray[i] - 1) / 2) * 2) : 0;
    }
    return maxLength;
};