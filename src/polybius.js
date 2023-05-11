

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polibyusGrid = {
      a: 11, b: 21, c: 31, d: 41, e: 51,
      f: 12, g: 22, h: 32, i: 42, j: 42,
      k: 52, l: 13, m: 23, n: 33, o: 43,
      p: 53, q: 14, r: 24, s: 34, t: 44,
      u: 54, v: 15, w: 25, x: 35, y: 45, z: 55
    };

    input = input.toLowerCase(); 
    let result = "";

    function evenString(str){
      str = str.replace(/\s+/g, '');
      
      return str.length % 2 === 0;
    }

    if (!encode && !evenString(input)) {
      return false;
    }

    for (let i = 0; i < input.length; i++) {
      let character = input[i];
      if (character === " ") {
        result += " ";
        continue;
      }
      if (encode) {
        if (character === "i" || character === "j") {
          result += "42";
        } else {
          result += polibyusGrid[character];
        }
      } else {
        let code = input.slice(i, i+2);
        if (code === "42") {
          result += "(i/j)";
        } else {
          let decodedChar = Object.keys(polibyusGrid).find(key => polibyusGrid[key] === Number(code));
          if (decodedChar === "42") {
            result += "(i/j)";
          } else {
            result += decodedChar;
          }
        }
        i++;
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
