

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
   
    if (typeof alphabet !== "string" || alphabet.length !== 26) {
      return false;
    }

    
    const uniqueAlphabet = new Set(alphabet);
    if (uniqueAlphabet.size !== 26) {
      return false;
    }

   
    input = input.toLowerCase();

    let result = "";

    for (let i = 0; i < input.length; i++) {
      let character = input[i];

      if (character === " ") {
        result += " ";
        continue;
      }

     
      let index = encode ? character.charCodeAt(0) - 97 : alphabet.indexOf(character);
      result += encode ? alphabet[index] : String.fromCharCode(index + 97);
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
