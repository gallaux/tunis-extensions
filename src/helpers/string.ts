/**
 * Returns the string if it's truthy, otherwise the placeholder.
 * @param {string} string "The string being tested"
 * @param {string} placeholder "The placeholder to be returned if the string is falsy"
 * @returns {string}
 */
export function emptyPlaceholder(string: string, placeholder: string = "-"): string {
    return string ? string : placeholder;
}

/**
 * Checks if a string ends with the specified string.
 * @param {string} string "The string being tested"
 * @param {string} suffix "The suffix to look for"
 * @param {boolean} isCaseSensitive "If the replacement should respect the case"
 * @returns {boolean}
 */
export function isEndingWith(string: string, suffix: string, isCaseSensitive: boolean = true): boolean {
    let strSuffix = string.substr(string.length - suffix.length, suffix.length);
    return isCaseSensitive ? strSuffix === suffix : strSuffix.toLowerCase() === suffix.toLowerCase();;
}

/**
 * Checks if the string is an integer.
 * @param {string} string "The string being tested"
 * @param {boolean} ignoreWhitespaces "If leading and trailing whitespace should be ignored"
 * @param {boolean} isPositiveOnly "If the integer can only be positive"
 * @returns {boolean}
 */
export function isInteger(string: string, ignoreWhitespaces: boolean = false, isPositiveOnly: boolean = false): boolean {
    let regex: RegExp;
    if (ignoreWhitespaces && isPositiveOnly) {
        regex = /^\s*\d+\s*$/;
    } else if (ignoreWhitespaces) {
        regex = /^\s*\-?\d+\s*$/;
    } else if (isPositiveOnly) {
        regex = /^\d+$/;
    } else {
        regex = /^\-?\d+$/;
    }
    return new RegExp(regex).test(string);
}

/**
 * Check if a string starts with the specified string.
 * @param {string} string "The string being tested"
 * @param {string} prefix "The prefix to look for"
 * @param {boolean} isCaseSensitive "If the replacement should respect the case"
 * @returns {boolean}
 */
export function isStartingWith(string: string, prefix: string, isCaseSensitive: boolean = true): boolean {
    let strPrefix = string.substr(0, prefix.length);
    return isCaseSensitive ? strPrefix === prefix : strPrefix.toLowerCase() === prefix.toLowerCase();
}

/**
 * Applies camel casing to the string.
 * @param {string} string "The string being camel cased"
 * @returns {string}
 */
export function toCamelCase(string: string): string {
    if (string) {
        let strArray: string[] = string.split(" ").map(str => toCapitalizedWord(str));
        return strArray.join("");
    }
    return string;
}

/**
 * Capitalizes the string (Upper case on the first character only).
 * @param {string} string "The string being capitalized"
 * @returns {string}
 */
export function toCapitalizedWord(string: string): string {
    if (string) {
        return string[0].toUpperCase() + string.toLowerCase().slice(1, string.length);
    }
    return string;
}

/**
 * Trims leading zeroes.
 * @param {string} string "The string being trimmed"
 * @returns {string} 
 */
export function trimLeadingZeroes(string: string): string {
    let regex: RegExp = /^(0+)/g;
    return string.replace(regex, "");
}