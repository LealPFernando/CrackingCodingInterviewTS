// Given two strings, write a method to decide iff one is a permutation of the other.

// N log N using sorting for both strings
function checkPermutation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;

    let sSorted1 = s1.split("").sort().join();
    let sSorted2 = s2.split("").sort().join();

    return sSorted1 === sSorted2;
}

console.log(checkPermutation("Hello", "olleH"));
console.log(checkPermutation("Helll", "olleH"));

// As Is Unique we can create an array of the total amount of character and have the counter.

// We can use a hash map to add all character and their count, then compare.
