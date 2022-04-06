import { emptyPlaceholder, isInteger, toCamelCase, toCapitalizedWord } from "../helpers/string";

declare global {
    interface String {
        emptyPlaceholder(this: string, placeholder?: string): string;
        isInteger(this: string, ignoreWhitespaces?: boolean): boolean;
        toCamelCase(this: string): string;
        toCapitalizedWord(this: string): string;
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
 * Check if the string is an integer.
 * @param {boolean} ignoreWhitespaces "If leading and trailing whitespace should be ignored"
 * @returns {boolean}
 */
String.prototype.isInteger = function (ignoreWhitespaces: boolean = false): boolean {
    return isInteger(this, ignoreWhitespaces);
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