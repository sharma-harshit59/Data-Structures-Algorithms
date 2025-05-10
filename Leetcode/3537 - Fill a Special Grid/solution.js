var specialGrid = function (n) {
    const maxDimension = 1 << n;
    const grid = Array.from({ length: maxDimension }, () =>
        Array(maxDimension).fill(-1)
    );

    let counter = 0;
    const queue = [
        { x: 0, y: maxDimension - 1, maxStep: maxDimension }
    ];
    let head = 0;

    while (head < queue.length) {
        let { x, y, maxStep } = queue[head++];
        const xi = Math.floor(x);
        const yi = Math.floor(y);

        if (maxStep === 1) {
            grid[xi][yi] = counter++;
        } else {
            const half = maxStep / 2;
            queue.push({ x: x, y: y, maxStep: half });  // Top-Right
            x += half;
            queue.push({ x: x, y: y, maxStep: half });  // Bottom-Right
            y -= half;
            queue.push({ x: x, y: y, maxStep: half });  // Bottom-Left
            x -= half;
            queue.push({ x: x, y: y, maxStep: half });  // Top-Left
        }
    }

    return grid;
}