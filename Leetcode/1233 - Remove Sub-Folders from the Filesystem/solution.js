var removeSubfolders = function (folders) {
    folders.sort();
    const result = [];
    for (const folder of folders) {
        if (result.length === 0 || !folder.startsWith(result[result.length - 1] + '/')) {
            result.push(folder);
        }
    }
    return result;
};