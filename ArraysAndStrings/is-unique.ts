// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures

function getCharCode(character: string): number {
    return character[0].charCodeAt(0) - "a".charCodeAt(0);
}

function isUnique(s: string): boolean {
    const chars: boolean[] = Array(128).fill(false); // Case of ACI that has 128 characters

    for (let char of s) {
        let charCode = getCharCode(char);

        if (chars[charCode] === true) return false;
        else chars[charCode] = true;
    }

    return true;
}

console.log(isUnique("Helo"));
