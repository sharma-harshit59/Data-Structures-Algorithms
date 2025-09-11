var sortVowels = function(s) {
    const isVowel = (ch) => {
        return (
            ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
        );
    }

    const vowels = [];
    for (const ch of s) {
        if (isVowel(ch)) {
            vowels.push(ch);
        }
    }

    vowels.sort();
    let k = 0;
    const chars = s.split('');
    for (let i = 0; i < chars.length; i++) {
        if (isVowel(chars[i])) {
            chars[i] = vowels[k++];
        }
    }

    return chars.join('');
};