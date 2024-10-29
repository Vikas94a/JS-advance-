/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

const extractedProduct = products.filter((e) => {
  // creating a variable and looping through the objects
  return e.price < 200; // check if the condition match so filter the result
});
console.log(extractedProduct);

const productNames = products.map((e) => e.name); // creating a variable and looping through the objects

console.log(productNames);

const specificProduct = products
  .filter((e) => e.category === "electronics") // checking the condition
  .map((e) => e.name); // return the name of the product
console.log(specificProduct);

const priceChecker = products.some((e) => e.price > 1000);
console.log(priceChecker); // check if any of the product cost more than 1000. Return true if condition match else false

const totalPricesOfProduct = products.reduce((num, e) => {
  return num + (e.price || 0); // start with 0 and add the numbers in a array list
}, 0);
console.log(totalPricesOfProduct);
