function kthCharacter(k: number): string {
    const findChar = (k: number): string => {
        if (k === 1) return 'a';

        let length = 1;
        while (length < k) {
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