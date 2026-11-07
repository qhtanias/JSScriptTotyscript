class Mean_Dev{
    stuCode : number;
    stuName : string;
    marks : number;

    constructor(stuCode : number, stuName : string, marks : number){
        this.stuCode = stuCode;
        this.stuName = stuName;
        this.marks = marks;
    }
display(): void {
    console.log("Name : " + this.stuName + " Code : " + this.stuCode + " scored marks : " + this.marks);
}
greet(): void {
    console.log("Hello, " + this.stuName + "!");
}

}
let dev1 = new Mean_Dev(101, "Alice", 85);
dev1.stuName = "Alice";
let dev2 = new Mean_Dev(102, "Bob", 92);
dev2.stuName = "Bob";
dev1.display(); dev1.greet();
dev2.display(); dev2.greet();

