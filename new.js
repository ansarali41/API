class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson =new Person('hero','alom', 2000);
console.log(heroPerson);
const friendlyPerson =new Person('hero','kalam', 2000);
console.log(friendlyPerson);

// class as function 
function Person1(firstN, lastN, age){
    this.firstN = firstN;
    this.lastN = lastN;
    this.age = age;
}
const Person1Bio = new Person1('ansar', 'ali',23);
console.log(Person1Bio.firstN);