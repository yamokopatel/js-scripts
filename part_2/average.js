var numbers = [5,10,15,20,25];
let sum = 0;

for(let a = 0; a < numbers.length; a++){
    sum += numbers[a];
}
let average = sum / numbers.length;

console.log("Summa = " + sum);
console.log("Vidējais = " + average);