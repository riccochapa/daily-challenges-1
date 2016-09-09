function Luhn(input) {
  this.input = input;
}

Luhn.prototype.checkDigit = function checkDigit() {
    var preCheck = this.input.toString();
    var lastNumber = preCheck.slice(-1);
    lastNumber = Number(lastNumber);
    //console.log('Check digit as last number with given input: ' + lastNumber);
    return lastNumber;
}

Luhn.prototype.checkSum = function checkSum() {
  var arr = [];
  var result = 0;
  var inputString = this.input.toString();

    for (var i = (inputString.length -1); i >= 0; i -= 2) {
      var iSI = inputString[i] * 1;
      arr.push(iSI);
    }

      for (var j = (inputString.length -2); j >= 0; j -= 2){
        var iSJ = inputString[j];

        if (5 > iSJ){
            var iSJTT = iSJ * 2;
            arr.push(iSJTT);
        } else {
            var iSJTTMN = -9 + (iSJ * 2);
            arr.push(iSJTTMN);
          }
      }
      var result = arr.reduce(function(previousVal, currentVal) {return previousVal + currentVal;}, 0);
      //console.log('Check sum with given input taking last number as check digit is: ' + result);
      return result;
}

Luhn.prototype.valid = function valid() {
  var arr = [];
  var result = 0;
  var inputString = this.input.toString();

    for (var i = (inputString.length -1); i >= 0; i -= 2) {
      var iSI = inputString[i] * 1;
      arr.push(iSI);
    }

      for (var j = (inputString.length -2); j >= 0; j -= 2){
        var iSJ = inputString[j];

        if (5 > iSJ){
            var iSJTT = iSJ * 2;
            arr.push(iSJTT);
        } else {
            var iSJTTMN = -9 + (iSJ * 2);
            arr.push(iSJTTMN);
          }
      }
      var result = arr.reduce(function(previousVal, currentVal) {return previousVal + currentVal;}, 0);
      //console.log('Check sum with given input taking last number as check digit is: ' + result);
  var validation = result.toString();
  //console.log(validation);
  if (validation.slice(-1) == 0) {
    //console.log(validation + ': Valid with given check digit.');
    return true;
    } else {
    //console.log(validation + ': false');
    return false;
    }
  }

Luhn.prototype.create = function create() {
  //console.log(input);
  var arr = [];
  for (var i = 0; i <= 9; i++){
    if (true == (Luhn.prototype.valid() + [i]))
    arr.push([i]);
  }
  //console.log(arr[0] + ' added to the end of ' + input + ' will create valid Luhn.');
  return (arr[0]);
};

module.exports = Luhn;
