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

/**
* Checks if the given year, month, and day are a valid combination.
* @param {number} year
* @param {number} month
* @param {number} day
*/
export function isValidDate(year: number, month: number, day: number): boolean {
    let daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month < 1 || month > 12) {
        return false;
    }
    if (day < 1 || day > daysInMonth[month - 1]) {
        return false;
    }
    if (month === 2 && !isLeapYear(year) && day === 29) {
        return false;
    }
    return true;
}