function findClosest(x: number, y: number, z: number): number {
    if (Math.abs(z - x) < Math.abs(z - y)) return 1;
    if (Math.abs(z - x) > Math.abs(z - y)) return 2;
    return 0;
};