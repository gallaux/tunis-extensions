import { logEx } from "../helpers/console"

declare global {
    interface Console {
        logEx(message?: any, title?: string, logDate?: boolean): void;
    }
}

/**
 * Prints an extra console log with a separator to help identify logs in the console.
 * @param {any} message "The data to be logged"
 * @param {string} title "An optional title in the log separator"
 * @param {boolean} logDate "If the date should be logged as well"
 */
console.logEx = function (message?: any, title?: string, logDate: boolean = false): void {
    logEx(message, title, logDate);
}