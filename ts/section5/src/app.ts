// type AddFn = (a:number, b: number) => number
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

// type Person = {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
//   }

let user1: Greetable;
user1 = new Person();

// user1 = {
//   name: "John",
//   greet(phrase: string) {
//     console.log(phrase + this.name);
//   },
// };
user1.greet("Hello, I am ");
