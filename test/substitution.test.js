const { substitution } = require('../src/substitution');
const expect = require('chai').expect;

describe('caesar() submission tests written by Catherine', () => {
  it('should return false if alphabet is not a string of exactly 26 characters', () => {
    const input = 'example';
    const alphabet = 'abc'; 
    const result = substitution(input, alphabet, true);
    expect(result).to.be.false;
  });

  it('should return false if alphabet contains duplicate characters', () => {
    const input = 'example';
    const alphabet = 'abbcdefghijklmnopqrstuvwxyz'; 
    const result = substitution(input, alphabet, true);
    expect(result).to.be.false;
  });

  it('should maintain spaces throughout', () => {
    const input = 'hello world';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expected = 'svool dliow';
    const result = substitution(input, alphabet, true);
    expect(result).to.equal(expected);
  });

  it('should ignore capital letters', () => {
    const input = 'Hello World';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expected = 'svool dliow';
    const result = substitution(input, alphabet, true);
    expect(result).to.equal(expected);
  });

  it('should correctly encode the input using the given alphabet', () => {
    const input = 'example';
    const alphabet = 'zyxwvutsrqponmlkjihgfedcba';
    const expected = 'vcznkov';
    const result = substitution(input, alphabet, true);
    expect(result).to.equal(expected);
  });

 
});
