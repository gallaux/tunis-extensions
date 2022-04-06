export { }

declare global {
    interface Array<T> {
        isEqualArray(this: T[], compareArray: T[], strictOrder?: boolean): boolean;
    }
    interface Date {
        isLeapYear(this: Date): boolean;
    }
    interface Number {
        isLeapYear(this: number): boolean;
    }
    interface String {
        emptyPlaceholder(this: string, placeholder?: string): string;
        isInteger(this: string, ignoreWhitespaces?: boolean): boolean;
        toCamelCase(this: string): string;
        toCapitalizedWord(this: string): string;
    }
}