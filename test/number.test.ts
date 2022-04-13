import "../src/index"

describe("isIntegerNumber", () => {
    it("Checks if the number is an integer", () => {
        const zero = 0;
        const int = 123;
        const negInt = -123;
        const float = 12.3;

        expect(zero.isIntegerNumber()).toEqual(true);
        expect(int.isIntegerNumber()).toEqual(true);
        expect(negInt.isIntegerNumber()).toEqual(true);
        expect(negInt.isIntegerNumber(true)).toEqual(false);
        expect(float.isIntegerNumber()).toEqual(false);
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