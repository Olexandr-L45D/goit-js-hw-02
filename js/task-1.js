
function makeTransaction(quantity, pricePerDroid, customerCredits) {
      
    if (customerCredits >= pricePerDroid * quantity)
     { return `"You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!"` }
     else if (customerCredits <= pricePerDroid * quantity);
      { return `"Insufficient funds!"` }
    
    }
    