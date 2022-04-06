import { isLeapYear } from "./shared";

/**
 * Determines if a number is a leap year or not.
 * @returns {boolean}
 */
Number.prototype.isLeapYear = function (): boolean {
    return isLeapYear(this);
}