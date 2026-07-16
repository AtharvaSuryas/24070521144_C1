// Variable declarations
var customerName = prompt("Enter Customer Name:");

let productName = prompt("Enter Product Name:");
let price = Number(prompt("Enter Product Price (₹):"));
let quantity = Number(prompt("Enter Quantity:"));

const GST_RATE = 0.18;

// Calculations
let subtotal = price * quantity;
let gstAmount = subtotal * GST_RATE;
let finalAmount = subtotal + gstAmount;

// Create bill object
const bill = {
    customerName,
    productName,
    price,
    quantity,
    subtotal,
    gstAmount,
    finalAmount
};

// Object Destructuring
const {
    customerName: name,
    productName: product,
    quantity: qty
} = bill;

// Display Receipt
document.getElementById("receipt").innerHTML = `
====================================
         SHOP BILL RECEIPT
====================================
Customer Name : ${name}
Product       : ${product}
Price         : ₹${price.toFixed(2)}
Quantity      : ${qty}

------------------------------------
Subtotal      : ₹${subtotal.toFixed(2)}
GST (18%)     : ₹${gstAmount.toFixed(2)}
------------------------------------
Total Amount  : ₹${finalAmount.toFixed(2)}
====================================
      Thank You! Visit Again.
====================================
`;