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
 * Checks if the string is an integer.
 * @param {string} string "The string being tested"
 * @param {boolean} ignoreWhitespaces "If leading and trailing whitespace should be ignored"
 * @returns {boolean}
 */
export function isInteger(string: string, ignoreWhitespaces: boolean = false): boolean {
    let regex = ignoreWhitespaces ? /^\s*\-?\d+\s*$/ : /^\-?\d+$/;
    return new RegExp(regex).test(string);
}

/**
 * Applies camel casing to the string.
 * @param {string} string "The string being camel cased"
 * @returns {string}
 */
export function toCamelCase(string: string): string {
    if (string) {
        let strArray = string.split(" ");
        strArray = strArray.map(str => toCapitalizedWord(str));
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