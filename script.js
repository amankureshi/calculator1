let output = document.getElementById("output");
console.log("Script is working.");

function Addvalue(value) {
    output.value += value;
    console.log("add valuse");
}
function Cleardata() {
    output.value = "";
    console.log("add valuse 2");
}
function deletData() {
    output.value = output.value.slice(0, -1)
}
function Cal() {
    output.value = eval(output.value)
}
function Addvalue(value) {
    if (value === '%') {
        output.value = eval(output.value) / 100;
    } else {
        output.value += value;
    }
    console.log("add value");
}