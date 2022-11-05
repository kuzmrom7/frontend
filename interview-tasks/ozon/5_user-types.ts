// типизировать юзера и как будет тип у users

// Solution
const users = [
  {
    name: 'Max Mustermann',
    age: 25,
  },
  {
    name: 'Kate Müller',
    age: 23,
  },
]

type User = {
  name: string
  age: number
}

// Test
export function logPerson(user: User): void {
  console.log(` - ${user.name}, ${user.age}`)
}

console.log('Users:')
users.forEach(logPerson)
