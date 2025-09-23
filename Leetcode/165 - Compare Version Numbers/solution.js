var compareVersion = function(version1, version2) {
    version1 = version1.split('.').map((el) => Number(el));
    version2 = version2.split('.').map((el) => Number(el));

    const len = Math.max(version1.length, version2.length);
    for (let i = 0; i < len; i++) {
        let v1 = version1[i] || 0;
        let v2 = version2[i] || 0;
        if (v1 !== v2) return (v1 < v2) ? -1 : 1;
    }

    return 0;
};