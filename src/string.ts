/**
 * Returns the string if it's truthy, otherwise the placeholder.
 * @param {string} placeholder "The placeholder to be returned if the string is falsy"
 * @returns {string}
 */
String.prototype.emptyPlaceholder = function (placeholder: string = "-"): string {
    return Boolean(this) ? this : placeholder;
}

/**
 * Check if the string is an integer.
 * @param {boolean} ignoreWhitespaces "If leading and trailing whitespace should be ignored"
 * @returns {boolean}
 */
String.prototype.isInteger = function (ignoreWhitespaces: boolean = false): boolean {
    let regex = ignoreWhitespaces ? /^\s*\-?\d+\s*$/ : /^\-?\d+$/;
    return new RegExp(regex).test(this);
}

/**
 * Applies camel casing to the string.
 * @returns {string}
 */
String.prototype.toCamelCase = function (): string {
    if (this) {
        let strArray = this.split(" ");
        strArray = strArray.map(str => this.toCapitalizedWord());
        return strArray.join("");
    }
    return this;
}

/**
 * Capitalizes the string (Upper case on the first character only).
 * @returns {string}
 */
String.prototype.toCapitalizedWord = function (): string {
    if (this) {
        return this[0].toUpperCase() + this.toLowerCase().slice(1, this.length);
    }
    return this;
}