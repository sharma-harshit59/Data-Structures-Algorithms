function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= numRows) return s;

    const zigZag: string[] = Array.from({ length: numRows }, () => "");
    let goingDown: boolean = true;
    let row: number = 0;

    for (let i: number = 0; i < s.length; i++) {
        zigZag[row] += s[i];
        if (row === numRows - 1) {
            goingDown = false;
        } else if (row === 0) {
            goingDown = true;
        }
        row += goingDown ? 1 : -1;
    }

    return zigZag.join('');
};