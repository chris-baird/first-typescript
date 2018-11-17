
// Using TypeScript you can declare data types
function greeter(person: string){
    return 'Hello,' + person;
}

let user = 'Bob Smith';

document.body.innerHTML = greeter(user);

// Compile TypeScript in terminal 'tsc filename.ts'