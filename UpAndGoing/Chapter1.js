//Practice Chapter1 Create a program to manage phone buying

const PHONE_SELECTION = [99.99, 79.38, 121.85, 89.50, 110.00, 133.45, 142.77];
let phoneCost = 0;


const ACCESSORIES_COST = 19.99;

const TAX_RATE = 0.15;
let bankAccount = 1000.00;

let totalPurchase = 0;

let totalWithTax = 0;
let totalCost = 0;

function selectPhone(phone){
	phoneCost = phone[Math.floor(Math.random() * phone.length)];
	return phoneCost;
}

console.log(selectPhone(PHONE_SELECTION));


function addAccessories (accessories, phone){
	let limit = phone/2;
	while(totalPurchase < limit - accessories){
		totalPurchase += accessories;	
	}
	return totalPurchase;
}

console.log(addAccessories(ACCESSORIES_COST, phoneCost));

function calculateTotal (phone, totalAccessories){
	return totalPurchase = phone + totalPurchase
}

console.log(calculateTotal(phoneCost, totalPurchase));

function calculateTax (total, tax) {
	totalWithTax = total + (total * tax);
	return totalWithTax
}	

console.log(calculateTax(totalPurchase, TAX_RATE));

function upToLimit(bankLimit, purchase){
	while(totalCost < bankLimit - purchase){
		totalCost += purchase;
	}
	return totalCost;
}

console.log(upToLimit(bankAccount, totalWithTax));

function printPrice (amount) {
	amount = amount.toFixed(2);
	return `The total cost of your purchase is $${amount}`
}

console.log(printPrice(totalCost));
