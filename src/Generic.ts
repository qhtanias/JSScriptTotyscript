class Info<T,U> {
    private id: T; private name: string
    setValue(id: T, name: string): void {
        this.id = id; this.name = name;
    }
    display(): void {
        console.log("ID: " + this.id + ", Name: " + this.name);

    }
}
let b = new Info<number, string>();
b.display();
b.setValue(1, "Steve");
let b1 = new Info<string, string>();
b1.setValue("A1", "John");
b1.display();