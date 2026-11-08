module sum{
    export function 
    add(x:number, y:number)
    { console.log("sum of two numbers is: " + (x+y));
}
}
export interface Post{
    console.log("Post interface");
}

import {post} from "./Internal";
class Employee implements post{
}