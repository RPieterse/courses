abstract class Department {
  //   private name: string;
  protected employees: string[] = [];
  static finYear = 2022

  constructor(protected readonly id: string, private name: string) {
    // this.name = name;
    console.log(Department.finYear, this.name)
  }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = '5898ds'; // ERROR
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class IT extends Department {
 
  public admins: string[];
  constructor(id: string, name: string, admins: string[]) {
    super(id, name);
    this.admins = admins;
  }
  describe() {
    console.log(`IT department id is: ${this.id}`);
}

}

class Accounting extends Department {
  public reports: string[];
  private lastReport: string;
  private static instance: Accounting;
  private constructor(id: string, name: string, reports: string[]) {
    super(id, name);
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance(id: string, reports: string[]){
    if (Accounting.instance){
        return this.instance
    }
    this.instance = new Accounting(id, 'Accounting', reports)
    return this.instance
  }

  describe() {
      console.log(`Accounting department id is: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(text: string) {
    if (text) {
      this.addReport(text);
      return;
    }
    throw new Error("No report provided");
  }
}















const it = new IT("it1", "IT", ["Carl"]);
const acc = Accounting.getInstance('acc1', [])
const acc2 = Accounting.getInstance('acc2', [])
acc.describe();
 acc2.describe()
const employee1 = Department.createEmployee('Peter')

console.log(employee1);

acc.mostRecentReport = "Monthly";
acc.addReport("Yearly");
console.log(acc.mostRecentReport);

acc.getReports();
acc.addEmployee("Max");
acc.addEmployee("Johnny");
acc.printEmployeeInformation();

// const marketingCopy = { name: 'example marketing', describe: marketing.describe };

// marketingCopy.describe();
