function divideString(s: string, k: number, fill: string): string[] {
    const result: string[] = [];
    let currStr: string = "";

    for (let i: number = 0; i < s.length; i++) {
        currStr += s[i];
        if (currStr.length === k) {
            result.push(currStr);
            currStr = "";
        }
    }
    if (currStr.length) {
        while (currStr.length !== k) {
            currStr += fill;
        }
        result.push(currStr);
    }

    return result;
};