// Type annotations
// Using TypeScript you can declare data types
function greeter(person) {
    return 'Hello,' + person;
}
var user = 'Bob Smith';
document.body.innerHTML = greeter(user);
function greeter2(hotdog) {
    return 'Hello, ' + hotdog.firstName + ' ' + hotdog.lastName;
}
var user2 = { firstName: 'Chris', lastName: 'Baird' };
console.log(user2);
