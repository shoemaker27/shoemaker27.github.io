"use strict";

$(document).ready( () => {
	
	let keys = Object.keys(sessionStorage);
	for(let key of keys) {
		let total_cost = 0;
		let text = sessionStorage.getItem(key).split("|");
		total_cost = total_cost + (Number(text[1]) * Number(text[2]));
		let imgLink = text[3];
		
		// Adds a row for each item added to cart
		$("div:last").after('<div class="clothingType">' + 
								'<img src="'+ text[3] + '" alt="' + text[0] + '" class="clothing">' +
								'<span class="middleSection">' +
									'<h1 class="clothingName" >' + text[0] + '</h1>' + 
									'<span class="numPrice">' +
										'<p class="numBought" >' + text[2] + '</p>' +
										'<p class="totalCost" >$' + total_cost + '</p>' +
									'</span>' +
									'<input type="number" class="numberToRemove" placeholder="0" min="0" max="' + Number(text[2]) + '">' +
									'<p class="removeButton" ><a title="' + text[0] + '" class="remove" href=".com">REMOVE</a></p>' +
								'</span>' +
							'</div>');
	}
	
	const removeInput = document.querySelectorAll(".numberToRemove");
	const numBought = document.querySelectorAll(".numBought");
	const totalCost = document.querySelectorAll(".totalCost");
	const clothingType = document.querySelectorAll(".clothingType");

	$(".removeButton a").each( function(index){
		$(this).click(function(evt) {
			evt.preventDefault();
			let itemInfo = sessionStorage.getItem($(this).attr("title")).split("|");
			let numberToRemove = $(removeInput[index]).val();

			$(numBought[index]).html(Number($(numBought[index]).html()) - numberToRemove);
			$(totalCost[index]).html("$" + (Number($(totalCost[index]).html().slice(1)) - (numberToRemove * itemInfo[1])).toFixed(2).toString());
			
			// Removes item from cart if all are removed
			if (Number($(numBought[index]).html()) <= 0) {
				$(clothingType[index]).remove();
				sessionStorage.removeItem($(this).attr("title"));
			} 
			else { // Updates amount of items in cart
				let numLeft = itemInfo[2] - numberToRemove;
				
				sessionStorage.setItem(itemInfo[0], itemInfo[0] + "|" + itemInfo[1] + "|" + numLeft + "|" + itemInfo[3]);
			}
			
		});
	});
	
	
});