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
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems,build something");
    }
}

let JyotiObj=new Engineer();