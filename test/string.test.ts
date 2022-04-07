import "../src/index"

describe("emptyPlaceholder", () => {
    it("Returns the string if it's truthy, otherwise the placeholder", () => {
        expect("test".emptyPlaceholder()).toEqual("test");
        expect("".emptyPlaceholder()).toEqual("-");
    });
});

describe("isEndingWith", () => {
    it("Checks if a string ends with the specified suffix", () => {
        expect("Lorem Ipsum".isEndingWith("Ipsum")).toEqual(true);
        expect("Lorem Ipsum".isEndingWith("Lorem")).toEqual(false);
        expect("Lorem Ipsum".isEndingWith("Lorem Ipsum Ipsum")).toEqual(false);
        expect("ba ".isEndingWith(" ")).toEqual(true);
        expect("ba".isEndingWith("A", false)).toEqual(true);
        expect("ba".isEndingWith("A")).toEqual(false);
    });
});

describe("isInteger", () => {
    it("Checks if the string is an integer", () => {
        expect("123".isInteger()).toEqual(true);
        expect("-123".isInteger()).toEqual(true);
        expect("12.3".isInteger()).toEqual(false);
        expect("abcd".isInteger()).toEqual(false);
        expect("".isInteger()).toEqual(false);
    });
});

describe("isStartingWith", () => {
    it("Checks if a string starts with the specified prefix", () => {
        expect("Lorem Ipsum".isStartingWith("Lorem")).toEqual(true);
        expect("Lorem Ipsum".isStartingWith("Ipsum")).toEqual(false);
        expect("Lorem Ipsum".isStartingWith("Lorem Ipsum Ipsum")).toEqual(false);
        expect(" ab".isStartingWith(" ")).toEqual(true);
        expect("ab".isStartingWith("A", false)).toEqual(true);
        expect("ab".isStartingWith("A")).toEqual(false);
    });
});

describe("toCapitalizedWord", () => {
    it("Capitalizes the string (Upper case on the first character only)", () => {
        expect("gOod Morning".toCapitalizedWord()).toEqual("Good morning");
        expect("0Hi there".toCapitalizedWord()).toEqual("0hi there");
        expect("".toCapitalizedWord()).toEqual("");
    });
});

describe("toCamelCase", () => {
    it("Applies camel casing to the string", () => {
        expect("This is a test  ".toCamelCase()).toEqual("ThisIsATest");
    });
});

describe("trimLeadingZeroes", () => {
    it("Trims leading zeroes", () => {
        expect("0015".trimLeadingZeroes()).toEqual("15");
        expect("0123".trimLeadingZeroes()).toEqual("123");
        expect("-012".trimLeadingZeroes()).toEqual("-012");
    });
});