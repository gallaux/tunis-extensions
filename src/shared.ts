/**
 * Determines if a number is a leap year or not.
 * @param {number} year "The year being tested"
 * @returns {boolean}
 */
export function isLeapYear(year: number): boolean {
    if (year % 400 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}