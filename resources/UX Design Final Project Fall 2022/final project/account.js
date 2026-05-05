"use strict";
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}

$(document).ready( () => {
	$("#sub2").click(function() {
		if ($("input#email").val() == "") {
			alert("Please Enter Email");
		} else if ($("input#password").val() == "") {
			alert("Please Enter Password");
		} else if ($("input#email").val() != getCookie("email")) {
			alert("Incorrect Email")
		} else if ($("input#password").val() != getCookie("password")) {
			alert("Incorrect Password")
		} else {
			location.href = "account.html";
		}
	});

	$("#sub").click(function() {
		if ($("input#fname").val() == "") {
			alert("Please Enter First Name");
		} else if ($("input#lname").val() == "") {
			alert("Please Enter Last Name");
		} else if ($("input#pnum").val() == "") {
			alert("Please Enter Phone Number");
		} else if ($("input#email").val() == "") {
			alert("Please Enter Email");
		} else if ($("input#password").val() == "") {
			alert("Please Enter Password");
		} else {
			setCookie("fname", $("input#fname").val(), 5)
			setCookie("lname", $("input#lname").val(), 5)
			setCookie("pnum", $("input#pnum").val(), 5)
			setCookie("email", $("input#email").val(), 5)
			setCookie("password", $("input#password").val(), 5)
			location.href = "account.html";
		}
		
	});

	$("#save").click(function() {
		setCookie("address", $("input#address").val(), 5)
		setCookie("city", $("input#city").val(), 5)
		setCookie("state", $("input#state").val(), 5)
		setCookie("zip", $("input#zip").val(), 5)
		setCookie("pnum", $("input#pnum").val(), 5)
		setCookie("email", $("input#email").val(), 5)
		setCookie("password", $("input#password").val(), 5)
	});

	$("#save2").click(function() {
		setCookie("cardname", $("input#cardname").val(), 5)
		setCookie("cardnum", $("input#cardnum").val(), 5)
		setCookie("cvv", $("input#cvv").val(), 5)
		setCookie("expdate", $("input#expdate").val(), 5)
	});

	$("#save3").click(function() {
		setCookie("giftcard", $("input#giftcard").val(), 5)
		let gCard = getCookie("giftcard");
		if (gCard != "") {
			$("p#credit").text( "Store Credit $15.00" ); 
		}
	});

	//checks to see if logged in
    let password = getCookie("password");

    if ( password != "") {
        $("a#logIn").html('<a href="account.html"><img src="resources/imgs/Group 178.png" id="logIn"></a>')
    }	

	$("input#fname").val( getCookie("fname") );
	$("input#lname").val( getCookie("lname") );
	$("input#address").val( getCookie("address") );
	$("input#city").val( getCookie("city") );
	$("input#state").val( getCookie("state") );
	$("input#zip").val( getCookie("zip") );
	$("input#pnum").val( getCookie("pnum") );
	$("input#email").val( getCookie("email") );
	$("input#password").val( getCookie("password") );
	$("input#cardname").val( getCookie("cardname") );
	$("input#cardnum").val( getCookie("cardnum") );
	$("input#cvv").val( getCookie("cvv") );
	$("input#expdate").val( getCookie("expdate") );
	$("input#giftcard").val( getCookie("giftcard") );
});
