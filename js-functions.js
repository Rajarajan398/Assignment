function calculate(operation) {
    let result;
    const number1 = document.getElementById("num1").Value;
    const number2 = document.getElementById("num2").value;
    if (operation === "plus") {
        if (confirm("Are you sure to perform the operation?")) {
            result = Number(number1) + Number(number2);
            document.getElementById("result").innerHTML = result;
        } else {
            alert("operation not performed");
        }
    } else if (operation === "minus") {
        result = number1 - number2;
        document.getElementById("result").innerHtml = result;

    }

    //switch (operation){
    //case "plus":
    //result = Number(number1) + Number(number2);
    //document.getElementById("result").innerHTML = result;
    //break;
    //case "minus":
    //result = number1 - number2;
    //document.getElementById("result").innerHTML = result;
    //break;


    //}
}