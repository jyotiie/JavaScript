let DATA="secret Information";


class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewData(){
        console.log("data = ",DATA);
    }
}

let student1=new User("jyoti");
let student2=new User();
//10