describe("isEqualArray", () => {
    const arr1: string[] = ["strA", "strB", "strC"];
    const arr2: string[] = ["strB", "strC", "strA"];
    const arr3: string[] = ["strA", "strB", "strC", "strD"];

    it("Checks if the two string arrays contain the same elements", () => {
        expect(arr1.isEqualArray(arr2)).toEqual(true); // Unordered
        expect(arr1.isEqualArray(arr2, true)).toEqual(false); // Strict order
        expect(arr1.isEqualArray(arr1)).toEqual(true);
        expect(arr1.isEqualArray(arr3)).toEqual(false);
    });
});