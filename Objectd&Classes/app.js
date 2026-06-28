const student={
    fullName:"Jyoti Singla",//properties or states
    marks:94.4,//properties or states
    printMarks: function(){
        console.log("marks = ",this.marks);
    },//functions or methods or object behavior
};

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    }
};

const karanArjun={
    salary:50000,
};

karanArjun.__proto__ = employee;

class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName=brand;
    }
}

let fortuner=new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus=new ToyotaCar();