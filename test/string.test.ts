import "../src/index"

describe("emptyPlaceholder", () => {
    it("Returns the string if it's truthy, otherwise the placeholder", () => {
        expect("test".emptyPlaceholder()).toEqual("test");
        expect("".emptyPlaceholder()).toEqual("-");
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