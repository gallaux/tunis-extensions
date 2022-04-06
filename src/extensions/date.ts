import { isLeapYear } from "../helpers/date";

declare global {
    interface Date {
        isLeapYear(this: Date): boolean;
    }
}

/**
 * Determines if a date object is a leap year or not.
 * @returns {boolean}
 */
Date.prototype.isLeapYear = function (): boolean {
    return isLeapYear(this.getFullYear());
}