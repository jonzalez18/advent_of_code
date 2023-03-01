var $b4kjx$fs = require("fs");
var $b4kjx$path = require("path");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


var $882b6d93070905b3$var$__dirname = "src";
const $882b6d93070905b3$var$filePath = (0, ($parcel$interopDefault($b4kjx$path))).join($882b6d93070905b3$var$__dirname, "input2.txt");
const $882b6d93070905b3$var$lines = (0, ($parcel$interopDefault($b4kjx$fs))).readFileSync($882b6d93070905b3$var$filePath, "utf-8").split("\n");
const $882b6d93070905b3$var$myHash = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
    "A": 27,
    "B": 28,
    "C": 29,
    "D": 30,
    "E": 31,
    "F": 32,
    "G": 33,
    "H": 34,
    "I": 35,
    "J": 36,
    "K": 37,
    "L": 38,
    "M": 39,
    "N": 40,
    "O": 41,
    "P": 42,
    "Q": 43,
    "R": 44,
    "S": 45,
    "T": 46,
    "U": 47,
    "V": 48,
    "W": 49,
    "X": 50,
    "Y": 51,
    "Z": 52
};
let $882b6d93070905b3$var$count = 0;
const $882b6d93070905b3$var$totalSum = $882b6d93070905b3$var$lines.map((item, i)=>{
    let splitItem = item.split("\r");
    let stringItem = splitItem[0];
    let arrayOfItem = stringItem.split("");
    let firstHalf = arrayOfItem.slice(0, arrayOfItem.length / 2).join("");
    let secondHalf = arrayOfItem.slice(arrayOfItem.length / 2).join("");
    let firstArray = firstHalf.split("");
    let secondArray = secondHalf.split("");
    let value = $882b6d93070905b3$var$findMatchingIndex(firstArray, secondArray);
    return $882b6d93070905b3$var$myHash[value];
});
function $882b6d93070905b3$var$findMatchingIndex(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++)for(let j = 0; j < arr2.length; j++){
        if (arr1[i] === arr2[j]) return arr1[i];
    }
}
//total sum of the common letter in each halve of the runsacks
let $882b6d93070905b3$var$total = $882b6d93070905b3$var$totalSum.reduce((acc, curr)=>{
    return acc + curr;
}, 0);
//threeElveArray pushes into a new array using modulus everytime
// index is divided into 3 perfectly.
const $882b6d93070905b3$var$ThreeElveArray = $882b6d93070905b3$var$lines.reduce((acc, curr, i)=>{
    console.log(i);
    let splitItem = curr.split("\r");
    let stringItem = splitItem[0];
    //for every 3 elves I must create a new array
    if (i % 3 === 0) acc.push([
        stringItem
    ]);
    else acc[acc.length - 1].push(stringItem);
    return acc;
}, []);
//My hash holds all the characters in each string array
const $882b6d93070905b3$var$hashTable = {};
const $882b6d93070905b3$var$findMatchingElveIndex = (elveArr, elveArr1, elveArr2)=>{
    //Each loop checks to see if the current letter in each array exists in 
    //the hash table, then adds value if doesn't exist.
    for(let i = 0; i < elveArr.length; i++)if (!$882b6d93070905b3$var$hashTable[elveArr[i]]) $882b6d93070905b3$var$hashTable[elveArr[i]] = i;
    for(let i = 0; i < elveArr1.length; i++)if (!$882b6d93070905b3$var$hashTable[elveArr1[i]]) $882b6d93070905b3$var$hashTable[elveArr1[i]] = i;
    for(let i = 0; i < elveArr2.length; i++)if (!$882b6d93070905b3$var$hashTable[elveArr2[i]]) $882b6d93070905b3$var$hashTable[elveArr2[i]] = i;
    //Then we loop through the keys and check to see if all keys are matching
    //each array in the if statement arrays. and returns key value matches.
    for(const key in $882b6d93070905b3$var$hashTable){
        if (elveArr.includes(key) && elveArr1.includes(key) && elveArr2.includes(key)) return key;
    }
};
//Here I'm call the above function on each of the arrays to check each value
//for all of the arrays in each group.
//then  i return the hashValue which contains the alphabet with each value 
//tied to the hash myHash[value]
const $882b6d93070905b3$var$ThreeElveMatch = $882b6d93070905b3$var$ThreeElveArray.map((elveGroup)=>{
    let firstElve = elveGroup[0].split("");
    let secondElve = elveGroup[1].split("");
    let thirdElve = elveGroup[2].split("");
    let value = $882b6d93070905b3$var$findMatchingElveIndex(firstElve, secondElve, thirdElve);
    return $882b6d93070905b3$var$myHash[value];
});
//then finally we accumlate the total of all the matching characters in
//each group.
let $882b6d93070905b3$var$total2 = $882b6d93070905b3$var$ThreeElveMatch.reduce((acc, curr)=>{
    return acc + curr;
}, 0);


//# sourceMappingURL=index.js.map
