// Taking user input
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let userCity = prompt("Enter your city:");

// Displaying information
document.getElementById("name").textContent = userName;
document.getElementById("age").textContent = userAge;
document.getElementById("city").textContent = userCity;

// Console methods
console.log("User Name:", userName);
console.info("Age:", userAge);
console.warn("City:", userCity);
console.error("This is a sample error message.");

console.table([
    {
        Name: userName,
        Age: userAge,
        City: userCity
    }
]);