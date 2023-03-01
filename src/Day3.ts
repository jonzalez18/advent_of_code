import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'input2.txt');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n')

interface Hash {
  [key: string]: number;
}

const myHash: Hash = {
'a' :  1, "b" : 2, "c" : 3, "d" : 4, "e" : 5, "f" : 6, "g" : 7, "h" : 8, "i" : 9, "j" : 10, "k" : 11, "l" : 12, "m" : 13, "n" : 14, "o" : 15, "p" : 16, 'q' : 17, "r" : 18, "s" : 19, "t" : 20, "u" : 21, "v" : 22, "w" :23, "x" :24, "y" : 25, "z" : 26,  "A" : 27, "B" : 28, "C" : 29, "D" : 30,  "E" : 31, "F" : 32, "G" : 33, 'H' : 34, "I" : 35, "J": 36, "K" : 37, "L" : 38, "M" : 39, "N" : 40, "O" : 41, "P" : 42, "Q" : 43, "R" : 44, "S" : 45, "T" : 46, "U" : 47, "V" : 48, "W" :49, "X" :50, "Y" : 51, "Z" : 52
}

let count = 0

const totalSum = lines.map((item, i) => {
  let splitItem = item.split('\r')
  let stringItem = splitItem[0]
  let arrayOfItem = stringItem.split('')
  let firstHalf = arrayOfItem.slice(0, arrayOfItem.length /2).join('')
  let secondHalf = arrayOfItem.slice(arrayOfItem.length / 2 ).join('')
  let firstArray = firstHalf.split('')
  let secondArray = secondHalf.split('')
  
 
  let value = findMatchingIndex(firstArray, secondArray)

  return myHash[value]
})

function findMatchingIndex(arr1: any, arr2: any)  {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return arr1[i];
      }
    }
  }
}
//total sum of the common letter in each halve of the runsacks
let total = totalSum.reduce((acc, curr) => {
  return acc + curr
}, 0 )


//threeElveArray pushes into a new array using modulus everytime
// index is divided into 3 perfectly considering we start at index 0
// otherwise we push into the last index of acc which is the current array
const ThreeElveArray: string[][] = lines.reduce((acc: string[][], curr:string, i: any) => {
  let splitItem = curr.split('\r')
  let stringItem = splitItem[0]
  //for every 3 elves I must create a new array
  if(i % 3 === 0) {
    acc.push([stringItem])
  
  }  else {
    acc[acc.length -1].push(stringItem)
  }
return acc

}, [])

//My hash holds all the characters in each string array
const hashTable: Hash = {};

 const findMatchingElveIndex = (elveArr: string[], elveArr1: string[], elveArr2: string[]) => {
//Each loop checks to see if the current letter in each array exists in 
//the hash table, then adds value if doesn't exist.
  for (let i = 0; i < elveArr.length; i++) {
    if (!hashTable[elveArr[i]]) {
    
      hashTable[elveArr[i]] = i;
    }
  }

  for (let i = 0; i < elveArr1.length; i++) {
    if (!hashTable[elveArr1[i]]) {
      hashTable[elveArr1[i]] = i;
    }
  }

  for (let i = 0; i < elveArr2.length; i++) {
    if (!hashTable[elveArr2[i]]) {
      hashTable[elveArr2[i]] = i;
    }
  }
//Then we loop through the keys and check to see if all keys are matching
//each array in the if statement arrays. and returns key value matches.
  for (const key in hashTable) {
    if (elveArr.includes(key) && elveArr1.includes(key) && elveArr2.includes(key)) {
      return key;
    }
  }
  
}
//Here I'm call the above function on each of the arrays to check each value
//for all of the arrays in each group.
//then  i return the hashValue which contains the alphabet with each value 
//tied to the hash myHash[value]
const ThreeElveMatch = ThreeElveArray.map(elveGroup => {
  let firstElve = elveGroup[0].split('');
  let secondElve = elveGroup[1].split('');
  let thirdElve = elveGroup[2].split('');

 let value: any =  findMatchingElveIndex(firstElve, secondElve, thirdElve)


  return myHash[value]
})

//then finally we accumlate the total of all the matching characters in
//each group.
let total2 = ThreeElveMatch.reduce((acc, curr) => {
  return acc + curr
}, 0 )




 

