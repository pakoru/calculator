const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
let a = 0;
let b = 0;
let choo;
let dot;

const add = function(a,b){
    result = Number(a) + Number(b);
    if(!Number.isInteger(result)){result = result.toFixed(2);}
    return result;
}

const subtract = function(a,b){
    result = Number(a) - Number(b);
    if(!Number.isInteger(result)){result = result.toFixed(2);}
    return result;
}

const multiply = function(a,b){
    result = Number(a) * Number(b);
    if(!Number.isInteger(result)){result = result.toFixed(2);}
    return result;
}

const divide = function(a,b){
    result = Number(a) / Number(b)
    if(!Number.isInteger(result)){result = result.toFixed(2);}
    return result;
}

const operate = function(a,b,operator) {
    display2.innerHTML = a + " " + choo + " " + b + " ="
    display.innerHTML = operator(a,b);   
}

const displayer = function(n){
    console.log(n);
    console.log(typeof(n));
    if (n === "." && display.innerHTML === "0"){display.innerHTML = "0" + n; return;};
    if (display.innerHTML === "0"){display.innerHTML = n}
    else{
    display.innerHTML += n;
    }
}

const readNum = function(sign){
   if (!display2.innerHTML == 0){calculate()}  
   choo = sign; 
   a = display.innerHTML;
   console.log(a);
   display.innerHTML += sign;
   display2.innerHTML = display.innerHTML;
   display.innerHTML = 0; 
}

const calculate = function(){
    b = display.innerHTML;
    console.log(b);
    if (choo === "-"){operate(a,b,subtract)}
    if (choo === "+"){operate(a,b,add)}
    if (choo === "*"){operate(a,b,multiply)}
    if (choo === "/"){operate(a,b,divide)}

}

const clears = function(){
    a = 0;
    b = 0;
    display.innerHTML = 0;
    display2.innerHTML = 0;
}