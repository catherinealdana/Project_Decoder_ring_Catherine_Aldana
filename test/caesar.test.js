const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar() submission tests written by Catherine", () => {
  it("should return false when shift is less than -25", () => {
    const input = "example";
    const shift = -30;
    const result = caesar(input, shift, true);
    expect(result).to.be.false;
  });

  it("should return false when shift is greater than 25", () => {
    const input = "example";
    const shift = 30;
    const result = caesar(input, shift, true);
    expect(result).to.be.false;
  });

  it("spaces and characters should be maintained", () => {
    const input = "@#$% *&^&*&^ @#$%$#@";
    const shift = -3;
    const actual = caesar(input, shift, true);
    const expected = "@#$% *&^&*&^ @#$%$#@";
    expect(actual).to.equal(expected);
  });

 it("should ignore capital letters", () => {
    const input1 = "An Example";
    const input2 = "an example";
    const shift = 8;
    const actual = caesar(input1, shift, encode=true);
    const expected = caesar(input2, shift, encode=true);
    expect(actual).to.equal(expected);
  });

  it("should correctly encode and decode text", () => {
    const input = "example";
    const shift = 3;
    const encodedExpected = "hadpsoh";
    const decodedExpected = "example";

    const encodedResult = caesar(input, shift, true);
    expect(encodedResult).to.equal(encodedExpected);

    const decodedResult = caesar(encodedResult, shift, false);
    expect(decodedResult).to.equal(decodedExpected);
  });

  it("should return false when shift is not present", () => {
    const input = "example";
    const shift = null;
    const result = caesar(input, shift, true);
    expect(result).to.be.false;
  });
});