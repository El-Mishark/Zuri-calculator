let firstInput = prompt("input first value")
console.log(firstInput);
let secondInput= prompt("input second input")
console.log(secondInput);
let operator = prompt("input operator")

let result;

if (operator === "+" ) {
   result = Number(firstInput) + Number(secondInput)
    alert("The result is " + result)
    console.log(result);
}

else if (operator === "-") {
   result = Number(firstInput) -  Number(secondInput)
    alert("The result is " + result)
    console.log(result);
}

else if (operator === "/") {
   result = Number(firstInput) /  Number(secondInput)
    alert("The result is " + result)
    console.log(result);
}

else if (operator === "*") {
   result = Number(firstInput) * Number(secondInput)
    alert("The result is " + result)
    console.log(result);
}

    
else {
    alert("operator unknown")
}