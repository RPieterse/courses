const person : {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // Tuple
} = {
  name: "Rohan",
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

enum Role {
    ADMIN, READ_ONLY, AUTHOR
}

const person2 = {
  name: "Rohan",
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.READ_ONLY
};

if (person2.role == Role.READ_ONLY){
    console.log('Read-only access');
}

// person.role[1] = 5 !! ERROR

let favoriteActivities: string[];

favoriteActivities = ['Sports']

console.log(person);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) !! ERROR
}
