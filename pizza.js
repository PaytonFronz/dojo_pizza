// Create a function called pizzaOven that returns a JavaScript (Pizza) Object
// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
};
var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pizza1);

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
};
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// Create 2 more pizzas with any toppings we like!
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
};
var pizza3 = pizzaOven("thin crust", "no sauce", ["mozzarella", "parmesan"], ["pepperoni", "peppers", "onions"]);
console.log(pizza3);
// br
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
};
var pizza4 = pizzaOven(["garlic crust", "hand tossed"], "light marinara", ["mozzarella"], ["no toppings"]);
console.log(pizza4);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
// var pizza = [pizzaCrust, pizzaSauce, pizzaCheese, pizzaToppings];
// var pizzaCrust = ["hand tossed", "deep dish", "thin crust", "garlic crust", "gluten free crust"];
// var pizzaSauce = ["marinara", "no sauce", "pesto", "light sauce", "white sauce"];
// var pizzaCheese = ["mozzarella", "parmesan", "feta", "cheddar", "pepperjack"];
// var pizzaToppings = ["pepperoni", "olives", "onions", "peppers", "salami", "pineapple"]
// function randomPizza() {
//     var randomCrust = Math.random();
//     var randCrust = Math.floor(randomCrust * pizzaCrust.length);
//     var randomSauce = Math.random();
//     var randSauce = Math.floor(randomSauce * pizzaSauce.length);
//     var randomCheese = Math.random();
//     var randCheeses = Math.floor(randomCheese * pizzaCheese.length);
//     var randomToppings = Math.random();
//     var randToppings = Math.floor(randomToppings * pizzaToppings.length);
//     pizza.randCrust = crust;
//     pizza.randSauce = sauce;
//     pizza.randCheeses = cheeses;
//     pizza.randToppings = toppings;
//     return pizza[crust, sauce, cheeses, toppings];
// }
// var yourPizza = randomPizza();
// console.log("your pizza is... " + yourPizza);
