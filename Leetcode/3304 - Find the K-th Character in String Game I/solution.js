var kthCharacter = function (k) {
    const findChar = (k) => {
        if (k === 1) return 'a';
        let length = 1;
        let level = 0;
        while (length < k) {
            level++;
            length *= 2;
        }

        const half = length / 2;
        if (k <= half) {
            return findChar(k);
        } else {
            const char = findChar(k - half);
            return String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
        }
    };

    return findChar(k);
};