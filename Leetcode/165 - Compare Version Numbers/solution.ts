function compareVersion(version1: string, version2: string): number {
    const v1: number[] = version1.split('.').map(Number);
    const v2: number[] = version2.split('.').map(Number);

    const len: number = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const num1: number = v1[i] ?? 0;
        const num2: number = v2[i] ?? 0;
        if (num1 !== num2) return num1 > num2 ? 1 : -1;
    }

    return 0;
};