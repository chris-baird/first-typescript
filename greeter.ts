// Type annotations
// Using TypeScript you can declare data types
function greeter(person: string){
    return 'Hello,' + person;
}

let user = 'Bob Smith';

document.body.innerHTML = greeter(user);

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

console.log(user2);