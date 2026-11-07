nterface person {
    name: string;
    age: number;
}
interface Employee extends person {
    gender: string;
    empCode: number;
}
let empObject: <Employee> {};
empObject.name = "Steve";
empObject.age = 30;
empObject.gender = "Male";
empObject.empCode = 123;
console.log("Employee Details: ", empObject);
console.log("Employee Name: ", empObject.name);
console.log("Employee Age: ", empObject.age);
console.log("Employee Gender: ", empObject.gender);
console.log("Employee Code: ", empObject.empCode);
