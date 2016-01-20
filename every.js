module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(function(num){
    return num % 2 === 0;
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  var firstType = typeof input[0];
  return input.every(function(char){
    return typeof char === firstType;
  });
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function(row){
    return row.every(function(num){
      return num > 0;
    });
  });
}
//if vowelObject
// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  var vowelObject = {'a': false,'e': false,'i': false,'o': false,'u':false,'y':false};
  return input.every(function(word){
    return word.split('').every(function(letter){
      if (Object.keys(vowelObject).indexOf(letter) !== -1){
        vowelObject[letter] = true;
      }
      var vowelCount = 0;
      var currWord = word;
      var lastWord;
      for (var key in vowelObject){
        if (vowelObject[key] === true && currWord == lastWord) vowelCount++;
        console.log("letter : " + letter, "vowels " + vowelCount);
        lastWord = word;
      }
      return (vowelCount > 1) ? false : true;
    });
  });
}



