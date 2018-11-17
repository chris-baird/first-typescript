// Type annotations
// Using TypeScript you can declare data types
function greeter(person) {
    return 'Hello,' + person;
}
var user = 'Bob Smith';
function greeter2(hotdog) {
    return 'Hello, ' + hotdog.firstName + ' ' + hotdog.lastName;
}
var user2 = { firstName: 'Chris', lastName: 'Baird' };
// console.log(user2);
// Using Classes
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    return Student;
}());
function greeter3(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user3 = new Student('Chris', 'A', 'Baird');
console.log(user3);
