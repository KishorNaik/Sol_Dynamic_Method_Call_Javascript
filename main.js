function onDemo(strFirstName, strLastName) {
    let fullName = `${strFirstName} ${strLastName}`;
    console.log(fullName);
}

// onDemo("Kishor", "Naik");

// Call Dynamically Method by Passing Method Name.
let methodName = "onDemo";
window[methodName]("kishor", "Naik");

function onDemoReturn(strFirstName, strLastName) {
    return `${strFirstName} ${strLastName}`;
}

// Call Dynamically Method by Passing Method Name.
methodName = "onDemoReturn";

let result = window[methodName]("Kishor", "Naik");
console.log(result);

