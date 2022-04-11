import "../src/index"

describe("isInteger", () => {
    it("Checks if the number is an integer", () => {
        const zero = 0;
        const int = 123;
        const negInt = -123;
        const float = 12.3;

        expect(zero.isInteger()).toEqual(true);
        expect(int.isInteger()).toEqual(true);
        expect(negInt.isInteger()).toEqual(true);
        expect(negInt.isInteger(true)).toEqual(false);
        expect(float.isInteger()).toEqual(false);
    });
});

describe("isLeapYear", () => {
    it("Determines if a number is a leap year or not", () => {
        const leapYear: number = 2016;
        const notleapYear: number = 2015;

        expect(leapYear.isLeapYear()).toEqual(true);
        expect(notleapYear.isLeapYear()).toEqual(false);
    });
});

describe("toStringWithZeroPadding", () => {
    it("Converts the number to string and pad with the specified number of leading zeroes", () => {
        const zero = 0;
        const int = 123;
        const negInt = -123;
        const float = 123.456;
        const negfloat = -123.456;

        expect(zero.toStringWithZeroPadding(6)).toEqual("000000");
        expect(int.toStringWithZeroPadding(5)).toEqual("00123");
        expect(int.toStringWithZeroPadding(5)).toEqual("00123");
        expect(negInt.toStringWithZeroPadding(5)).toEqual("-00123");
        expect(float.toStringWithZeroPadding(4)).toEqual("0123.456");
        expect(negfloat.toStringWithZeroPadding(4)).toEqual("-0123.456");
    });
});