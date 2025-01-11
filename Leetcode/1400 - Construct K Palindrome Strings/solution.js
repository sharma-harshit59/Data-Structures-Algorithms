var getCharCount = function(str) {
    /**
     * This fucnction returns the count of each character occuring in the string in an object as a key-value pair where key is the character itself and value is the number of occurences of the character in the string.
     */
    let map = {};
    str.split('').forEach((char) => { // 'forEach' can only be applied on arrays, not strings, thus using split to convert in an array. 'for' loop can also be used.
        map[char] = map[char] ? (map[char] + 1) : 1; // If the key exists, add 1 to it; else, create the key-value pair and intialise the value as 1.
    });
    return map;
}

var canConstruct = function(s, k) {
    if (s.length < k) { // Point-1
        return false;
    } else if (s.length == k) { // Point-2
        return true;
    } else { // Point-6
        charCountMapping = getCharCount(s); // Gets the count of each character in the array
        let oddCountChar = 0;
        Object.keys(charCountMapping).forEach((char) => {
            if (charCountMapping[char] % 2) {
                oddCountChar++;
            }
        });
        return (oddCountChar <= k); // We can also use `return !(oddCountChar > k)`;
    }
};

