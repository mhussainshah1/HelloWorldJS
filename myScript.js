function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

var shoppingDone = true;

var childsAllowance;

if (shoppingDone) { // don't need to explicitly specify '=== true'
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}