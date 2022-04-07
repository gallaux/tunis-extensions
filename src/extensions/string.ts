import { emptyPlaceholder, isEndingWith, isInteger, isStartingWith, toCamelCase, toCapitalizedWord, trimLeadingZeroes } from "../helpers/string";

declare global {
    interface String {
        emptyPlaceholder(this: string, placeholder?: string): string;
        isEndingWith(this: string, suffix: string, isCaseSensitive?: boolean): boolean;
        isInteger(this: string, ignoreWhitespaces?: boolean): boolean;
        isStartingWith(this: string, prefix: string, isCaseSensitive?: boolean): boolean;
        toCamelCase(this: string): string;
        toCapitalizedWord(this: string): string;
        trimLeadingZeroes(this: string): string;
    }
}

/**
 * Returns the string if it's truthy, otherwise the placeholder.
 * @param {string} placeholder "The placeholder to be returned if the string is falsy"
 * @returns {string}
 */
String.prototype.emptyPlaceholder = function (placeholder: string = "-"): string {
    return emptyPlaceholder(this, placeholder);
}

/**
 * Checks if a string ends with the specified suffix.
 * @param {string} suffix "The suffix to look for"
 * @param {boolean} isCaseSensitive "If the replacement should respect the case"
 * @returns {boolean}
 */
String.prototype.isEndingWith = function (suffix: string, isCaseSensitive: boolean = true): boolean {
    return isEndingWith(this, suffix, isCaseSensitive);
}

/**
 * Check if the string is an integer.
 * @param {boolean} ignoreWhitespaces "If leading and trailing whitespace should be ignored"
 * @returns {boolean}
 */
String.prototype.isInteger = function (ignoreWhitespaces: boolean = false): boolean {
    return isInteger(this, ignoreWhitespaces);
}

/**
 * Check if a string starts with the specified prefix.
 * @param {string} prefix "The prefix to look for"
 * @param {boolean} isCaseSensitive "If the replacement should respect the case"
 * @returns {boolean}
 */
String.prototype.isStartingWith = function (prefix: string, isCaseSensitive: boolean = true): boolean {
    return isStartingWith(this, prefix, isCaseSensitive);
}

/**
 * Applies camel casing to the string.
 * @returns {string}
 */
String.prototype.toCamelCase = function (): string {
    return toCamelCase(this);
}

/**
 * Capitalizes the string (Upper case on the first character only).
 * @returns {string}
 */
String.prototype.toCapitalizedWord = function (): string {
    return toCapitalizedWord(this);
}

/**
 * Trims leading zeroes.
 * @returns {string} 
 */
String.prototype.trimLeadingZeroes = function () {
    return trimLeadingZeroes(this);
}