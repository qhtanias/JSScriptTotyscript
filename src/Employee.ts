interface EmpOp {
    FullName(): string;
    GetAge(): number;
    display(): string;
}

class Employee implements EmpOp {
    stuCode: number;
    stuName: string;
    age: number;

    constructor(code: number, name: string, age: number) {
        this.stuCode = code;
        this.stuName = name;
        this.age = age;
    }

    FullName(): string {
        return this.stuName;
    }

    GetAge(): number {
        return this.age;
    }

    display(): string {
        return `Code: ${this.stuCode}, Name: ${this.stuName}, Age: ${this.age}`;
    }
}

let emp1 = new Employee(1, "Steve", 90);
let fullName = emp1.FullName();   // call the method
let Age = emp1.GetAge();          // call the method
console.log(emp1.display());