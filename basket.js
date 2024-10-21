let basket = (quantity, price) => {
    let cost = 0;
    for (let item in quantity) {
        if (price[item] !== undefined) {
            cost += quantity[item] * price[item];
        }
    }
    return cost;
};

let quantities = {};
let prices = {};

let userInput = () => {
    let appleQuantity = parseFloat(prompt("Enter the quantity of apples:"));
    let applePrice = parseFloat(prompt("Enter the price of apples:"));
    quantities["apples"] = appleQuantity;
    prices["apples"] = applePrice;

    let orangeQuantity = parseFloat(prompt("Enter the quantity of oranges:"));
    let orangePrice = parseFloat(prompt("Enter the price of oranges:"));
    quantities["oranges"] = orangeQuantity;
    prices["oranges"] = orangePrice;

    alert("Total is: " + basket(quantities, prices));
};

userInput();