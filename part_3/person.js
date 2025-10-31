class Person{
    constructor(name, age, isStudent){
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.course = "PT2023";
    }
    isAdult(){
        if(age >= 18){
            return true;
        }else{
            return false;
        }
    }
    isStudent(){
        return isStudent;
    }
}

var person = new Person("Deniss",18,true);

console.log(person.name);
console.log(person["name"]);