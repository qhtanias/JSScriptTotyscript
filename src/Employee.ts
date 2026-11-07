class Employee implements EmpOp {
    stuCode: number;
    stuName: string;
    marks: number;
    constructor(code: number, name: string, marks: number) {
        this.stuCode = code;
        this.stuName = name;
        this.marks = marks;
    }
display(): string{
    return" Name : "+this.stuName+" Code : "+this.stuCode+" Marks : "+this.marks;
}
greet() {
    return "Hello "+this.stuName;
}
    
}
let emp1 = new Employee(1, "Steve", 90);
