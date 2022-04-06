describe("isLeapYear", () => {
    it("Determines if a number is a leap year or not", () => {
        expect((2016).isLeapYear()).toEqual(true);
        expect((2015).isLeapYear()).toEqual(false);
    });
});