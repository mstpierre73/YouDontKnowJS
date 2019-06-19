const PHONE_SELECTION = [99.99, 79.38, 121.85, 89.50, 110.00, 133.45, 142.77];
const ACCESSORIES_SELECTION = [19.99, 9.99, 39.99, 29.99];

//=======================================================================================================

	function selectPhone(phone){
		phoneCost = phone[Math.floor(Math.random() * phone.length)];
		return phoneCost;
	}

	function selectAccessories(accessories){
		accessoriesCost = accessories[Math.floor(Math.random() * accessories.length)];
		return accessoriesCost;
	}

	function addAccessories (accessoriesPrice, phonePrice){
		let limit = phoneCost/2;
		while(totalPurchase < limit - accessories){
			totalPurchase += accessories;	
		}
		return totalPurchase
	}

//=============================================================================================================

function buyPhone (phone, accessories){

	let phoneCost = 0;
	console.log(selectPhone(phone));
	
	let accessoriesCost = 0; 
	console.log(selectAccessories(accessories));

	let totalPurchase = 0;
	console.log(addAccessories(accessoriesCost, phoneCost));
}

buyPhone(PHONE_SELECTION, ACCESSORIES_SELECTION);

//==============================================================================================================



	