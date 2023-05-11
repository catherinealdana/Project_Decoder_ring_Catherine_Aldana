const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe('caesar() submission tests written by Catherine', () => {
  it("should correctly encode the inputted text", () => {
    const input = 'hello';
    const expected = '3251131343';
    const result = polybius(input);
    expect(result).to.equal(expected);
  });

  it("should correctly decode the inputted text", () => {
    const input = '3251131343';
    const expected = "hello";
    const result = polybius(input, false);
    expect(result).to.equal(expected);
  });

  it("should maintain spaces when encoding", () => {
    let expected = '3251131343 2543241341 3251131343 2543241341';
    let input = "hello world hello world";
    let encode = true;
    let actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = 'HeLLo';
    const expected = '3251131343';
    const result = polybius(input);
    expect(result).to.equal(expected);
  });

  it("should encode 'i' and 'j' as 42", () => {
    const input = 'ij';
    const expected = '4242';
    const result = polybius(input);
    expect(result).to.equal(expected);
  });

  it('should return false when decoding with odd character count', () => {
    const input = '325113134';
    const result = polybius(input, false);
    expect(result).to.be.false;
  });
});
