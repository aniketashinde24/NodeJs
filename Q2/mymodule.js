function factorial(n){
    var f = 1;
    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}

function primeNo(n){
    var count = 0;
    for(let i=1;i<=n;i++){
        if(n%i===0)
            count++;
    }
    if (count === 2)
        return "PRIME"
    else
        return "NOT PRIME"
}

function printTable(n){
    var str =""
    for(let i=1;i<=10;i++){
        str+=n+"*"+i+"="+n*i+"<br>";
    }
    return str;
}

module.exports={
    factorial:factorial,
    primeNo:primeNo,
    printTable:printTable
};