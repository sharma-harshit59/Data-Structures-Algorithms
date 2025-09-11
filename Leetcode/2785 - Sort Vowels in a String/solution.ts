function isVowel(ch: string): boolean {
    return (
        ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
        ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
    );
}

function sortVowels(s: string): string {
    const vowels: string[] = [];
    for (const ch of s) {
        if (isVowel(ch)) vowels.push(ch);
    }

    vowels.sort();

    let k = 0;
    const chars: string[] = s.split('');
    for (let i = 0; i < chars.length; i++) {
        if (isVowel(chars[i])) chars[i] = vowels[k++];
    }

    return chars.join('');
}