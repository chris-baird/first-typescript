// Type annotations
// Using TypeScript you can declare data types
function greeter(person: string){
    return 'Hello,' + person;
}

let user = 'Bob Smith';

// document.body.innerHTML = greeter(user);

// Compile TypeScript in terminal using the command:'tsc filename.ts'

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(hotdog: Person) {
    return 'Hello, ' + hotdog.firstName + ' ' + hotdog.lastName;
}

let user2 = { firstName: 'Chris', lastName: 'Baird'};

// console.log(user2);

// Using Classes
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.middleInitial} ${this.lastName}`;
    }
}

interface Person {
    firstName: string;
    lastname: string;
}

function greeter3(person: Person){
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user3 = new Student('Chris', 'A', 'Baird');

console.log(user3);