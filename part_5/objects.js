var car = new Array(
    brand = "Toyota",
    model = "Rav4",
    year = 2019
);

let currentYear = new Date().getFullYear();
if((currentYear - car.year) > 10){
    console.log("Car is older than 10 years");
}
if(car['brand'] == "Toyota"){
    console.log("Šī ir Toyota automašīna");
}

car.push({owner: "Uncnown"});
console.log(car);