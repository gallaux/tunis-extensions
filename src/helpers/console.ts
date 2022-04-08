/**
 * Prints an extra console log with a separator to help identify logs in the console.
 * @param {any} message "The data to be logged"
 * @param {string} title "An optional title in the log separator"
 * @param {boolean} logDate "Should the date be logged as well?"
 */
export function logEx(message?: any, title?: string, logDate: boolean = false): void {
    let nowStr: string = "";
    if (logDate) {
        let nowDate: Date = new Date();
        nowStr = ` ${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDay()} @${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}.${nowDate.getMilliseconds()} `;
    }
    console.log(`/**********${title ? ` ${title} ` : ""}**********${nowStr}/`);
    console.log(message);
}