// let d = new Date();
// alert("Today's date is " + d);

function clr() {
     document.getElementById("result").value = " ";

}
function display(value) {
        document.getElementById("result").value += value;
    }

function calculate() {
    let num1 = document.getElementById("result").value;
    let num2 = eval(num1);
    document.getElementById("result").value = num2;
    alert("Your equation = " + String(num2) +" Thank you TechLarious");

    }

