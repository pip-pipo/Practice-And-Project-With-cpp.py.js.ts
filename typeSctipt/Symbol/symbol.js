const sym1 = Symbol();
const sym2 = Symbol();

let user = {
    id:3434
}

console.log(user)
user.id = 23434
console.log(user)

const idSym = Symbol('id')

user[idSym] = 343434

console.log(user)
console.log(user[idSym])
console.log(Object.getOwnPropertyNames(user))
console.log(Object.getOwnPropertySymbols(user))


