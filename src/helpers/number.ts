/**
 * Checks if the number is an integer.
 * @param {string} number "The number being tested"
 * @param {boolean} isPositiveOnly "If the integer can only be positive"
 * @returns {boolean}
 */
export function isInteger(number: number, isPositiveOnly: boolean = false): boolean {
    if (isPositiveOnly && number < 0) {
        return false;
    }
    return number % 1 === 0;
}

/**
 * Converts the number to string and pad with the specified number of leading zeroes
 * @param {number} number "The number being converted"
 * @param {number} places "The number of positive digits, to be padded with zeroes"
 * @returns {string}
 */
export function toStringWithZeroPadding(number: number, places: number): string {
    let numberStr: string[] = number.toString().split(".");
    let isNegative: boolean = number < 0;

    let integerStr: string = isNegative ? numberStr[0].slice(1) : numberStr[0];
    let decimalStr: string = numberStr.length === 2 ? "." + numberStr[1] : "";

    return (isNegative ? "-" : "") + integerStr.padStart(places, "0") + decimalStr;
};