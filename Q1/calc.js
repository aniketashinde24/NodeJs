function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function square(a){
    return a*a;
}

function sum(...list){
    init=0;
    s=list.reduce((x,y)=>{
        return x+y
    }, init)
    return s
}

module.exports={
    add,
    subtract,
    multiply,
    divide,
    square,
    sum
};
