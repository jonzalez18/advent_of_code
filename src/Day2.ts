import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'input1.txt');
const lines = fs.readFileSync(filePath, 'utf-8').split('\n')


const resultsPlayerTwo = lines.reduce((acc, curr) =>{
  
  let current = curr.split('\r')
 
  let players = current[0].split(' ')
  let playerOne = players[0]
  let playerTwo = players[1]

  if(playerOne === 'A' && playerTwo === 'Y'){
    return acc + 3 + 1
  } else if (playerOne === 'A' && playerTwo === 'X' ) {
    return acc + 0 + 3
  } else if (playerOne === 'A' && playerTwo === 'Z') {
    return  acc + 6 + 2
  } 

  if(playerOne === 'B' && playerTwo === 'Y'){
    return acc + 3 + 2
  } else if (playerOne === 'B' && playerTwo === 'X' ) {
    return  acc + 0 + 1
  } else if (playerOne === 'B' && playerTwo === 'Z') {
   return  acc + 6 + 3
  } 

  if(playerOne === 'C' && playerTwo === 'Y'){
    return   acc + 3 + 3
  } else if (playerOne === 'C' && playerTwo === 'X' ) {
   return  acc + 0 + 2
  } else if (playerOne === 'C' && playerTwo === 'Z') {
    return acc + 6 + 1
  } 
  
  return acc
}, 0)


console.log(resultsPlayerTwo)

