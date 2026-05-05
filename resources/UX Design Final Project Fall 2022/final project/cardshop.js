"use strict";
$(document).ready( () => {
	$("#shopItem button").each( function(index){
		// Gets item information
		const itemInfo = $(this).attr("title").split("|");
		const cost = itemInfo[0];
		const name = itemInfo[1];
		const imgLink = itemInfo[2];
		
		$(this).click(function(evt) {
			evt.preventDefault();
			
			// Creates the key for the item if one does not exist
			if (sessionStorage.getItem(name) == null) {
				sessionStorage.setItem(name, name + "|" + cost + "|1|" + imgLink);
			} 
			else {	// Updates key
				let numPurchased = Number(sessionStorage.getItem(name).split("|")[2]);
				numPurchased = numPurchased + 1;
				sessionStorage.setItem(name, name + "|" + cost + "|" + numPurchased + "|" + imgLink);
			}
			
		});
		
	});
	
});