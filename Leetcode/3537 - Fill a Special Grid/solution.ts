function specialGrid(n: number): number[][] {
    const maxDimension: number = 1 << n;
    const grid: number[][] = Array.from({ length: maxDimension }, () =>
        Array(maxDimension).fill(-1)
    );

    let counter: number = 0;
    const queue: { x: number; y: number; maxStep: number }[] = [
        { x: 0, y: maxDimension - 1, maxStep: maxDimension }
    ];
    let head: number = 0;

    while (head < queue.length) {
        let { x, y, maxStep } = queue[head++];
        const xi: number = Math.floor(x);
        const yi: number = Math.floor(y);

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