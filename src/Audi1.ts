class Car{
    engine():void {
        console.log("Engine is running");
    }
}
class Audi extends Car{
    newEngine():void {
        console.log("Audi engine is running");
    }
}
class Audi1 extends Audi{
sound():void 
{
    console.log("Audi1 sound system is running");
}
}
let a = new Audi1();
a.engine();
a.newEngine();
a.sound();