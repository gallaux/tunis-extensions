import { isLeapYear } from "../helpers/date";

declare global {
    interface Number {
        isLeapYear(this: number): boolean;
    }
}

/**
 * Determines if a number is a leap year or not.
 * @returns {boolean}
 */
Number.prototype.isLeapYear = function (): boolean {
    return isLeapYear(this);
}