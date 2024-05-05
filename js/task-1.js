// task 1
function makeTransaction(quantity, pricePerDroid, customerCredits) {
      
    if (customerCredits >= pricePerDroid * quantity) { return "You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!" }
     else if (customerCredits <= pricePerDroid * quantity); { return "Insufficient funds!" }
    
    }
    console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
    console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
    console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"