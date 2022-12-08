const taxRate=0.05;

let convertedTaxRate=parseFloat(taxRate);
const unit_price=119.65;

// This is the total tax for all 30 Phones 
const TaxForTotalPrice=(unit_price*convertedTaxRate)*30; 

// This is the total price for all 30 Phones  withouth tax
const TotalPriceWithouthTax=unit_price*30;

// Declaration
let total_price;

// Here I have added the total tax for all 30 Phones and the total price withough tax
total_price=TotalPriceWithouthTax + TaxForTotalPrice;

console.log("The Total Price is:",total_price);