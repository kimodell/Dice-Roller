//take number of dice from console (diceAmount)
//generate random number between 1-6 for diceAmount
//push result to new array (diceResult)
//join dice result

const diceAmount = process.argv.splice(2)[0]; //pulled from console...somehow
const diceResult = [];

const min = 1;
const max = 6;
for (let i = 0; i < diceAmount; i++) {
  diceResult.push(Math.floor(Math.random() * (max - min) + min));
}

console.log(`Rolled ${diceAmount} dice: ${diceResult.join(`, `)}`);