class Mean {
    Courseid: number;
    phase: number;
    type: string;
    constructor(id: number, p : number, type: string){
        this.Courseid = id; this.phase = p; this.type = type;
    }
    disp(): void {
        console.log("Welcome to the course with ID: " 
            + this.Courseid + " in phase: " + this.phase + " 
of type: " + this.type);
    }
}
class phase1 extends Mean {
    assignments: string;
    constructor(assign : string, id: number, p: number, type: string){
        super(id, p, type);
        this.assignments = assign;
    }
    phase1(): void {
        console.log("Phase 1 assignments: " + this.assignments);
    }
}