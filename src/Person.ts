interface person {

    name: string;
    age: number;
}
interface Employee extends person {
    gender: string;
    empCode: number;
}

function disp<T extends person>(emp: T): void {
    console.log("Employee Details: ", emp);
    console.log("Employee Name: ", emp.name);
    console.log("Employee Age: ", emp.age);
}
let play : Employee = { name: "Steve", 
    age: 30, gender: "Male", empCode: 123 }; 
disp(play);


// let empObject: <Employee> {};
// empObject.name = "Steve";
// empObject.age = 30;
// empObject.gender = "Male";
// empObject.empCode = 123;
// console.log("Employee Details: ", empObject);
// console.log("Employee Name: ", empObject.name);
// console.log("Employee Age: ", empObject.age);
// console.log("Employee Gender: ", empObject.gender);
// console.log("Employee Code: ", empObject.empCode);
