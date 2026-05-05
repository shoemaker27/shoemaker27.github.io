"use strict";

$(document).ready( () => {
    let keys = Object.keys(sessionStorage);
    let total_cost2 = 0;
    for(let key of keys) {
        let total_cost = 0;
		let text = sessionStorage.getItem(key).split("|");
		total_cost = total_cost + (Number(text[1]) * Number(text[2]));
        if (!isNaN(total_cost)) {
            $("h4:last").after('<p>' + text[2] + ' <a href="#">' + text[0] + '</a> <span class="price">$' + total_cost.toFixed(2) + '</span></p>');
            total_cost2 = total_cost2 + total_cost;
        }
    }

    $("b").html("$" + total_cost2.toFixed(2))

    $("#checkout").click(function() {
        if ($("input#fname").val() == "") {
			alert("Please Enter First Name");
		} else if ($("input#lname").val() == "") {
			alert("Please Enter Last Name");
		} else if ($("input#address").val() == "") {
			alert("Please Enter Shipping Address");
		} else if ($("input#city").val() == "") {
			alert("Please Enter City");
		} else if ($("input#state").val() == "") {
			alert("Please Enter State");
		} else if ($("input#zip").val() == "") {
			alert("Please Enter Zip Code");
		} else if ($("input#cardname").val() == "") {
			alert("Please Enter Cardholder Name");
		} else if ($("input#cardnum").val() == "") {
			alert("Please Enter Credit Card Number");
		} else if ($("input#cvv").val() == "") {
			alert("Please Enter CVV");
		} else {
            alert("Order Submitted!");
            sessionStorage.setItem("orderSlip", $("#checkoutCart").html());
        }
        
    });

    $("button#orderHistory").click(function() {
        let orderSlip = sessionStorage.getItem("orderSlip", $("#checkoutCart").html());
		$("div#orderHistory").append(orderSlip);
        $("h4").remove();
        $("button#emptyCart").remove();
	});

    $("#emptyCart").click(function() {
        $("p").remove();
    });
});

