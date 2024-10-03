export default function combineStrings(str1: string, str2: string) {
    const sortedStrings = [str1, str2].sort();
    return sortedStrings[0] + sortedStrings[1];
}