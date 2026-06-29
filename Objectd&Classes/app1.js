class Parent{
    constructor(){
        this.species="homo sapiens";
    }
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{}

let obj=new Child();

class Person{
    constructor(){
        console.log("enter parent constructor");
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child constructor");
        super();//to invoke parent class constructor
        this.branch=branch;
        console.log("exits child constructor");
    }
    work(){
        console.log("solve problems,build something");
    }
}

let JyotiObj=new Engineer("chemical engg");