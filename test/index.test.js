// import { repeatMessage } from '../source/index';
let {repeatMessage} = require("../source/index")

describe("Description or label of the test group.", () => {
    // write your test() blocks here
    test("Expect a function",() => {
        expect(typeof(repeatMessage)).toBe("function")
    })
    test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'",() => {
        expect(repeatMessage("hello",3)).toBe("hellohellohello")
    })
});
describe("repeatMessage error handling", () => {

    test("repeatMessage throws an error if its first argument is not a string.", () => {
        expect(() => {repeatMessage(1, 1)}).toThrow();
    });

    test("repeatMessage throws an error if its second argument is not a number.", () => {
        expect(() => {repeatMessage(1, "not a number")}).toThrow();
    });

    test("repeatMessage throws an error if its first argument is falsey.", () => {
        expect(() => {repeatMessage("", 1)}).toThrow();
        expect(() => {repeatMessage(0, 1)}).toThrow();
        expect(() => {repeatMessage(null, 1)}).toThrow();
        expect(() => {repeatMessage(false, 1)}).toThrow();
    });

    test("repeatMessage should still work if its second argument is falsey.", () => {
        expect(repeatMessage("hello", null)).toEqual("hello");
        expect(repeatMessage("hello", false)).toEqual("hello");
        expect(repeatMessage("hello", "")).toEqual("hello");
        expect(repeatMessage("hello", 0)).toEqual("hello");
        expect(repeatMessage("hello")).toEqual("hello");

    })

});