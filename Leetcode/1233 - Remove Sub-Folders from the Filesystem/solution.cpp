vector<string> removeSubfolders(vector<string> &folders)
{
    sort(folders.begin(), folders.end());
    vector<string> result;
    for (const string &folder : folders)
    {
        if (result.empty() || folder.find(result.back() + '/') != 0)
        {
            result.push_back(folder);
        }
    }
    return result;
}