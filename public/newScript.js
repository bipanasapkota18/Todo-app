let inputs = document.getElementById("inp");
let myArray = [];

function Add() {
    if (inputs.value == "") {
        alert("Enter a task");
    } else {
        myArray.push(inputs.value);
        console.log("Original array:", myArray);

        // Using map to create a new array with transformed values
        const newArray = myArray.map((task, index) => {
            return {
                task: task,
                index: index
            };
        });

        console.log("Mapped array:", newArray);

        inputs.value = "";
    }
}