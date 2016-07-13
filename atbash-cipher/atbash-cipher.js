function encode(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const cipher = 'zyxwvutsrqponmlkjihgfedcba';

  const alphaSplit = alpha.split('');
  const cipherSplit = cipher.split('');
  const stringSplit = string.toLowerCase().split('');
  const conversion = [];

  for (let i = 0; i < stringSplit.length; i++) {
    for (let j = 0; j < alphaSplit.length; j++) {
      const letter = stringSplit[i];
      if (letter === alphaSplit[j]) {
        conversion.push(cipherSplit[j]);
      }
      const result = conversion;
      console.log(result);
    }
  }
}

encode('hello');
encode('svool');
module.exports = { encode };
