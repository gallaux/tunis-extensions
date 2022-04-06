import "../src/index"
import { isValidDate } from "../src/index";

describe("isLeapYear", () => {
    it("Determines if a date object is a leap year or not", () => {
        expect(new Date(2016, 1, 1).isLeapYear()).toEqual(true);
        expect(new Date(2015, 1, 1).isLeapYear()).toEqual(false);
    });
});

describe("isValidDate", () => {
    it("Checks if the given year, month, and day are a valid combination", () => {
        expect(isValidDate(2000, 12, 31)).toEqual(true);
        expect(isValidDate(2000, 11, 30)).toEqual(true);
        expect(isValidDate(2000, 11, 31)).toEqual(false);
        expect(isValidDate(2000, 13, 30)).toEqual(false);
    });
});