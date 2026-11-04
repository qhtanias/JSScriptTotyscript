function log(_target: object, _propertyKey: string, _descriptor: PropertyDescriptor): void {}

class item{
    itemArr : Array<string>;
    constructor(){
        this.itemArr = [];
}
@log 
add(item : string): void {
    this.itemArr.push(item);
}
getprint(): Array<string> {
    return this.itemArr;
}
}