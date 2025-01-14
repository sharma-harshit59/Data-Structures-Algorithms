var maxScore = function(s) {
    let leftScore = 0, rightScore = 0;
    for (let i = 0; i < s.length; i++) {
        rightScore += Number(s[i]);
    }
    let maxScore = (leftScore + rightScore - (s[0] == '1'));  // Even if the first character is 1, it will not be counted as both strings have to be non-empty
    for (let i = 0; i < s.length-1; i++) { // As both strings have to be non-empty, hence can traverse till second-last element
        (s[i] == '0') ? leftScore++ : rightScore--;
        maxScore = Math.max(maxScore, leftScore + rightScore);
    }
    return maxScore;
};