// Write Function Code Here
function showTypes<T = string, U = string, V = string>(val1?: T, val2?: U, val3?: V): string {
    return `${val1 ?? "Nothing"} - ${val2 ?? "Nothing"} - ${val3 ?? "Nothing"}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true