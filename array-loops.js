for(let a = 11; a <= 20; a++){
    console.log(a);
}

for(let a = 20; a >= 11; a--){
    console.log(a);
}

var friends = new Array("Aleksandrs","Mihails","Timurs","Maksims","Deniss");

// console.log(friends.length);
console.log(friends['0']);
console.log(friends['2']);

var length = friends.length;

for(let a = 0; a < length; a++){
    console.log((a+1) + ". " + friends[a]);
}