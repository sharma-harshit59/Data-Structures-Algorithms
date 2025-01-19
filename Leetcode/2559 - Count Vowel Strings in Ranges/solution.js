var vowelStrings = function(words, queries) {
    let cumulativeCount = [0], lastIndex = 0, res = [];
    for (let i = 0; i < words.length; i++) {
        cumulativeCount.push(cumulativeCount[lastIndex++] + checkVowelStartEnd(words[i]));
    }
    for (let j = 0; j < queries.length; j++) {
        res.push(cumulativeCount[queries[j][1] + 1] - cumulativeCount[queries[j][0]]);
    }
    return res;
};

var checkVowelStartEnd = function(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    return vowels.some((vowel) => str.startsWith(vowel)) && vowels.some((vowel) => str.endsWith(vowel));
}