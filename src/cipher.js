window.cipher = {
  encode: (offset, string) => {
    let resultadoCipher = '';
    for (let i = 0; i < string.length; i += 1) {
      const numberCodeAscii = string.charCodeAt(i);
      if (numberCodeAscii >= 65 && numberCodeAscii <= 90) {
        resultadoCipher
        += String.fromCharCode(((numberCodeAscii - 65 + parseInt(offset, 10)) % 26) + 65);
      } else if (numberCodeAscii >= 97 && numberCodeAscii <= 122) {
        resultadoCipher
        += String.fromCharCode(((numberCodeAscii - 97 + parseInt(offset, 10)) % 26) + 97);
      } else if (numberCodeAscii >= 48 && numberCodeAscii <= 57) {
        resultadoCipher
        += String.fromCharCode(((numberCodeAscii - 48 + parseInt(offset, 10)) % 10) + 48);
      } else { resultadoCipher += string.charAt(i); }
    } return resultadoCipher;
  },

  decode: (offset, string) => {
    let resultadoDecifrado = '';
    for (let i = 0; i < string.length; i += 1) {
      const numberCodeAscii = string.charCodeAt(i);
      if (numberCodeAscii >= 65 && numberCodeAscii <= 90) {
        resultadoDecifrado
        += String.fromCharCode(((numberCodeAscii - 90 - parseInt(offset, 10)) % 26) + 90);
      } else if (numberCodeAscii >= 97 && numberCodeAscii <= 122) {
        resultadoDecifrado
        += String.fromCharCode(((numberCodeAscii - 122 - parseInt(offset, 10)) % 26) + 122);
      } else if (numberCodeAscii >= 48 && numberCodeAscii <= 57) {
        resultadoDecifrado
        += String.fromCharCode(((numberCodeAscii - 57 - parseInt(offset, 10)) % 10) + 57);
      } else { resultadoDecifrado += string.charAt(i); }
    } return resultadoDecifrado;
  },
};
