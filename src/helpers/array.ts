/**
 * Checks if the two arrays contain the same elements.
 * @param {T[]} array1 "The first array"
 * @param {T[]} array2 "The second array, being compared to the first"
 * @param {boolean} strictOrder "If the order of the elements in the arrays matter"
 * @returns {boolean}
 */
export function isEqualArrays<T>(array1: T[], array2: T[], strictOrder: boolean = false): boolean {
    if (array1.length !== array2.length) return false;
    if (strictOrder) {
        return JSON.stringify(array1) === JSON.stringify(array2);
    } else {
        return JSON.stringify([...array1].sort()) === JSON.stringify([...array2].sort());
    }
}

/**
 * Removes an element from the array.
 * @param {T[]} array "The input array"
 * @param {T} element "The element to remove from the array"
 * @returns {T[]}
 */
export function removeElement<T>(array: T[], element: T): T[] {
    return array.filter(el => el !== element);
}