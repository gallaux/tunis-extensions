import "../src/index"

describe("logEx", () => {
    const consoleSpy = jest.spyOn(console, 'log');

    it("Prints an extra console log with a separator to help identify logs in the console (with title)", () => {
        const object: any = { obj: "test" };
        const title: string = "test title";

        console.logEx(object, title);

        expect(consoleSpy).toHaveBeenCalledWith(`/********** ${title} **********/`);
        expect(consoleSpy).toHaveBeenCalledWith(object);
    });

    it("Prints an extra console log with a separator to help identify logs in the console (without title)", () => {
        const message: string = "hello";

        console.logEx(message);

        expect(consoleSpy).toHaveBeenCalledWith(`/********************/`);
        expect(consoleSpy).toHaveBeenCalledWith(message);
    });
});