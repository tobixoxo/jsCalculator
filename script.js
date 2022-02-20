let myFunction = function(){
    let x = document.getElementById("form");
    let a = Number(x.elements[0].value);
    let b = Number(x.elements[1].value);
    let op = Number(x.elements[2].value);
    console.log('a ',a, ' b ', b,' op ', op)
    console.log(typeof(op))
    let result;
    if(op > 5 || op < 1){
        result = "not valid operation!" ; 
        document.getElementById("result").innerHTML = result;
        return;  
    }
    else if(op === 1){
        result = a + b;
    }
    else if(op === 2){

        result = a - b;
    }
    else if(op == 3){
        result = a * b;
    }
    else if(op === 4){
        result = a / b;
    }
    else if(op === 5){
        result = a ** b;
    }
    console.log("result is : ", result)
    // window.alert(result);
    document.getElementById("result").innerHTML = "result is " + result;
    return;
}