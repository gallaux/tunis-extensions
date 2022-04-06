import "../src/index"

describe("isLeapYear", () => {
    it("Determines if a date object is a leap year or not", () => {
        expect(new Date(2016, 1, 1).isLeapYear()).toEqual(true);
        expect(new Date(2015, 1, 1).isLeapYear()).toEqual(false);
    });
});