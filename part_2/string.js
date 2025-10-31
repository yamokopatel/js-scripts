var inputString = "sveiki";

function reverseString(original){
    let splitted = original.split("");
    let reversed = splitted.reverse();
    let fullreversed =reversed.join("");
    return fullreversed;
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));