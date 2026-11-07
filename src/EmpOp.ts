interface EmpOp{
    empCode:number;
    empName:string;
    getSalary: (number) => number;
    getManagerName: (number) => string;
}