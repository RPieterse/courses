type Admin = {
  name: string;
  permissions: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Rohan",
  permissions: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const e2: Employee = e1;

const e3: Employee = {
  name: "Max",
  startDate: new Date(),
};

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("John", "Carrey"); // as string;
const result2 = add(1, "Max");

const fetchUserData = {
  id: "u1",
  name: "Rohan",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchUserData?.job?.title); // optional chaining

const userInput = null;

const storedData = userInput ?? "Default"; //  null coalescing

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: ", emp.name);
//   if ("permissions" in emp) {
//     console.log("Permissions: ", emp.permissions);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation(e2);
// printEmployeeInformation(e3);

// class Car {
//   drive() {
//     console.log("Driving....");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck....");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo:" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(5);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed: number;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 2000 });

// const input = document.getElementById("user-input"); // as HTMLInputElement;
// // const input2 = <HTMLInputElement>document.getElementById("user-input");

// if (input) {
//   (input as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital character",
// };
