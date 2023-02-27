// const names: Array<string> = []; // string[]

// names[0].split(' ');

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("this is done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Rohan", hobbies: ["sports"] },
  { name: "John", age: 10 }
);

console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["sports", "cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Rohan" }, "name"));

class DataStorage<T extends number | string> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) > -1) {
      this.data.splice(this.data.indexOf(item), 1);
    }
  }

  getItems() {
    return this.data;
  }
}

const stringStorage = new DataStorage<string>();

stringStorage.addItem("max");
stringStorage.addItem("Albert");
console.log(stringStorage.getItems());
stringStorage.removeItem("max");
console.log(stringStorage.getItems());

const numberStorage = new DataStorage<number>();
// const objectStorage = new DataStorage<object>();

// objectStorage.addItem({ name: "max" });
// objectStorage.addItem({ name: "manu" });
// // ...
// objectStorage.removeItem({ name: "max" });
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["max", "anna"];
// names.push('john') !! ERROR
