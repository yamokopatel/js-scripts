var name = "Deniss";

function words(string){
    return string.toString();
}
function forWhat(string){
    return "?";
}
function oneToTen(){
    for(let a = 0; a < 10; a++){
        console.log(a+1);
    }
}
function firstToSecond(first, second){
    if(second > first){
        for(let a = first; a <= second; a++){
            console.log(a);
        }
    }else if(first > second){
        for(let a = first; a >= second; a--){
            console.log(a);
        }
    }else{
        console.log(0);
    }
}

console.log(words(name));
console.log(forWhat(name));
oneToTen();
firstToSecond(5,8);
firstToSecond(9,4);
firstToSecond(3,3);