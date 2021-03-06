import "../src/index"

describe("isEqualArray", () => {
    it("Checks if the two string arrays contain the same elements", () => {
        const arr1: string[] = ["strA", "strB", "strC"];
        const arr2: string[] = ["strB", "strC", "strA"];
        const arr3: string[] = ["strA", "strB", "strC", "strD"];

        expect(arr1.isEqualArray(arr2)).toEqual(true); // Unordered
        expect(arr1.isEqualArray(arr2, true)).toEqual(false); // Strict order
        expect(arr1.isEqualArray(arr1)).toEqual(true);
        expect(arr1.isEqualArray(arr3)).toEqual(false);
    });
});

describe("removeElement", () => {
    it("Removes an element from the array", () => {
        const arr: number[] = [0, 1, 2, 3];

        expect(arr.removeElement(1)).toEqual([0, 2, 3]);
        expect(arr.removeElement(3)).toEqual([0, 1, 2]);
        expect(arr.removeElement(8)).toEqual([0, 1, 2, 3]);
    });
});