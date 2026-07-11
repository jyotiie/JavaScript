function getData(dataId){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
        },5000);
    });
}

//Promise Chain
let p1=getData(1);
p1.then((res) => {
    console.log(res);
});