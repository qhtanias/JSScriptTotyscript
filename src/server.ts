"use strict"
var Name = /** @class */ (function () {
    function Name(fname, lname){
        this.fname = fname;
        this.lname = lname;

    }
    Name.prototype.getName = function () {
        var fullname = this.fname + this.lname;

    };
    return Name;
}());
var auther_name;