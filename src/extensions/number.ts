import { isIntegerNumber, toStringWithZeroPadding } from "../helpers/number"
import { isLeapYear } from "../helpers/date"

declare global {
    interface Number {
        isIntegerNumber(this: number, isPositiveOnly?: boolean): boolean;
        isLeapYear(this: number): boolean;
        toStringWithZeroPadding(this: number, places: number): string;
    }
}

/**
 * Checks if the number is an integer.
 * @param {boolean} isPositiveOnly "If the integer can only be positive"
 * @returns {boolean}
 */
Number.prototype.isIntegerNumber = function (isPositiveOnly: boolean = false): boolean {
    return isIntegerNumber(this, isPositiveOnly);
}

/**
 * Determines if a number is a leap year or not.
 * @returns {boolean}
 */
Number.prototype.isLeapYear = function (): boolean {
    return isLeapYear(this);
}

/**
 * Converts the number to string and pad with the specified number of leading zeroes
 * @param {number} places "The number of positive digits, to be padded with zeroes"
 * @returns {string}
 */
Number.prototype.toStringWithZeroPadding = function (places: number): string {
    return toStringWithZeroPadding(this, places);
}