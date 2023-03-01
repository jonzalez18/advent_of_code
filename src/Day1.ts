import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'input.txt');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n')


const result: string[][] = lines.reduce((acc: string[][], current: string) => {
    if (current === '\r') {
      // If the current element is an empty string, create a new sub-array in the accumulator
      acc.push([]);
    } else {
      // Otherwise, add the current element to the last sub-array in the accumulator
      let curr = current.trim().split('\r')
      
      acc[acc.length - 1].push(curr[0]);
    }
    return acc;
  }, [[]]);

  const sumArray = result.map(subArray => {
    return subArray.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);
  });
  console.log(sumArray, 'sum')


  const greatestCalories = Math.max(...sumArray);


  let Elves: number[][] = []
  let splitElve: number = 0
  //index can only return the top 3 max values
  sumArray.map(elve => {
    var index = sumArray.indexOf(Math.max(...sumArray))
    if(index !== -1 && Elves.length < 3) {
      Elves.push(sumArray.splice(index, 1))
      
     }
  })

  const sumThreeElves = Elves.map(elve => {
     return elve.reduce((acc, curr) => {
      return acc + curr
    }, 0)
  })
  console.log(Elves, 'there')
  const totalSum = sumThreeElves.reduce((acc, curr) => acc + curr, 0);
  console.log(totalSum, 'here')

  
