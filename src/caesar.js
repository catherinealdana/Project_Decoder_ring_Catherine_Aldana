

const caesarModule = (function (input = "",shift,encode =true) {


  function caesar(input, shift, encode = true) {
    if(!shift || shift < -25 || shift > 25) {
      return false;
    };
    if(!encode) {
      shift *= -1;
    };
    
    input = input.toLowerCase(); 

    let result = ""; 
     
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i); 
      if(charCode >= 97 && charCode <= 122) { 
        charCode += shift; 
      if(charCode < 97) {
          charCode += 26;
        }
      if(charCode > 122) {
          charCode -= 26;
        }
      }
      
      result += String.fromCharCode(charCode); 
    }   
    return result;
  }
  return {
    caesar,
  };
})();


 
 
//console.log(caesarModule.caesar())
module.exports = { caesar: caesarModule.caesar };

