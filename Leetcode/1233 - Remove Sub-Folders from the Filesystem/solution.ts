function removeSubfolders(folderss: string[]): string[] {
    folders.sort();
    const result: string[] = [];

    for (const folder of folders) {
        if (result.length === 0 || !folder.startsWith(result[result.length - 1] + '/')) {
            result.push(folder);
        }
    }

    return result;
};