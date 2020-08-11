const normalPerson = {
    firstName: "Rahim",
    lastName: "Uddin",
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        console.log(this);
        return this.salary = this.salary - amount - tips - tax;
    }
};
const heroPerson = {
    firstName: 'hero',
    lastName: 'Balam',
    salary: 25000
};
const friendlyPerson = {
    firstName: 'hero',
    lastName: 'kalam',
    salary: 50000
};
// normalPerson.getFullName();
// console.log(normalPerson.chargeBill(150));//1st 150 minus kore asign hoye thakbe
// console.log(normalPerson.chargeBill(3000));

//binding
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// console.log(heroChargeBill(5));
// console.log(heroChargeBill(1500));

                // call   =direct call and pass all parameters

// normalPerson.chargeBill.call(friendlyPerson, 900,100,50);
// console.log(friendlyPerson.salary);
// normalPerson.chargeBill.call(friendlyPerson, 1900,100,50);
// console.log(friendlyPerson.salary);

                // apply= directly call and "pass parameter as an array"
normalPerson.chargeBill.apply(friendlyPerson, [900, 100, 50]);
console.log(friendlyPerson.salary);
