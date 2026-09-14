function isHeOld(age: number | string): "yes" | "no" {
    return Number(age) > 40 ? "yes" : "no";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"