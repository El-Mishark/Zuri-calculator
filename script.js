let firstInput = prompt("input first value")
console.log(firstInput);
let secondValue = prompt("input second value")
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