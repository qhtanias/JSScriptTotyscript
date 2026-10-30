class Name{
    fname : any ;
    lname : any ;
    constructor(fname : any, lanme : any){
        this.fname = fname ;
        this.lname = lanme ;

    }
    getName(): any{
        var fullname : any = this.fname + this.lname ;
    }
}
var auther_name : Name ;