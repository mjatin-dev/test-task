const string =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

//Replace special characters and then convert to array.
const stringToArray = string
  .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
  .split(" ");

const sortedString = sorting(stringToArray);
const highestWords = findMultipleHighestWork(
  sortedString[0].length,
  stringToArray
);

const result = countVowelAndSort(highestWords);

console.log("*****output******");
console.log(result[0].value);

//then sort array into desc order.
function sorting(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j].length < array[j + 1].length) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//then find words with same length
function findMultipleHighestWork(size, array) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === size) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}

//then find words with max number of vowels.
function countVowelAndSort(array) {
  const tempArray = [];
  for (var i = 0; i < array.length; i++) {
    const count = array[i].match(/[aeiou]/gi).length;
    tempArray.push({ value: array[i], count });
  }

  return tempArray.sort(compare);
}

function compare(a, b) {
  if (a.count < b.count) {
    return 1;
  }
  if (a.count > b.count) {
    return -1;
  }
  return 0;
}
