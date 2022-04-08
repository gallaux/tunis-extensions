import "../src/index"

describe("isLeapYear", () => {
    it("Determines if a number is a leap year or not", () => {
        const leapYear: number = 2016;
        const notleapYear: number = 2015;

        expect(leapYear.isLeapYear()).toEqual(true);
        expect(notleapYear.isLeapYear()).toEqual(false);
    });
});