module.exports = toReadable = (number) => {
  const array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const array2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const array3 = ['null', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const array4 = ['null', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  let newNumber = number.toString();

  if (newNumber.length === 1) {
    let lastNumber0 = newNumber[0];
    return array1[lastNumber0];


  } else if (newNumber.length === 2 && newNumber[0] === '1') {
    let lastNumber = newNumber[1];
    return array2[lastNumber];


  } else if (newNumber.length === 2 && newNumber[1] === '0') {
    let lastNumberr = newNumber[0];
    return array3[lastNumberr];

  } else if (newNumber.length === 2 && newNumber[0] !== '1') {
    let lastNumber1 = newNumber[0];
    let lastNumber2 = newNumber[1];
    return array3[lastNumber1] + ' ' + array1[lastNumber2];


  } else if (newNumber.length === 3 && newNumber[1] === '0' && newNumber[2] === '0') {
    let lastNumber3 = newNumber[0];
    return array4[lastNumber3];

   } else if (newNumber.length === 3 && newNumber[1] === '1') {
      let lastNumber33 = newNumber[2];
      let lastNumber333 = newNumber[0];
      return array4[lastNumber333] + ' ' + array2[lastNumber33];


  } else if (newNumber.length === 3 && newNumber[1] === '0') {
    let lastNumber4 = newNumber[0];
    let lastNumber5 = newNumber[2];
    return array4[lastNumber4] + ' ' + array1[lastNumber5];


  } else if (newNumber.length === 3 && newNumber[2] === '0') {
    let lastNumber6 = newNumber[0];
    let lastNumber7 = newNumber[1];
    return array4[lastNumber6] + ' ' + array3[lastNumber7];


  } else if (newNumber.length === 3 && newNumber[1] !== 0 && newNumber[2] !== 0) {
    let lastNumber8 = newNumber[0];
    let lastNumber9 = newNumber[1];
    let lastNumber10 = newNumber[2];
    return array4[lastNumber8] + ' ' + array3[lastNumber9] + ' ' + array1[lastNumber10];

  }

}

// let newNumber = number.toString();

// if (newNumber[0] === 1) {
//   let lastNumber0 = newNumber[0];
//   return array1[lastNumber0];




// let newNumber = number.toString();

// if (newNumber.length === 1) {
//   return array1[newNumber];
// } else if (newNumber.length === 2) {
//   return array2[newNumber];
// } else if (newNumber.length === 2 && newNumber[1] === 0){
//   return array3[newNumber];
// } else if (newNumber.length === 2 && newNumber[1] !== 0) {
//   return array3[newNumber] + ' ' + array1[1];
// } else if (newNumber.length === 3) {
//   return array4[newNumber];
// } else if (newNumber.length === 3 &&) {
//   return array4[newNumber] + ' ' + array3[newNumber] + '' + array1[1];
// }

// }
