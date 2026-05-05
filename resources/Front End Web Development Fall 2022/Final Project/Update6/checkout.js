"use strict";

$(document).ready( () => {
    let keys = Object.keys(sessionStorage);
    let total_cost2 = 0;
    for(let key of keys) {
        let total_cost = 0;
		let text = sessionStorage.getItem(key).split("|");
		total_cost = total_cost + (Number(text[1]) * Number(text[2]));

        $("h4:last").after('<p>' + text[2] + ' <a href="#">' + text[0] + '</a> <span class="price">' + total_cost + '</span></p>');
        total_cost2 = total_cost2 + total_cost;
    }

    $("b").html(total_cost2)

    $("#checkout").click(function() { //Checkout Form Validation
        if( $("#fname").val() == "" ) {
            alert("First Name is Required.");
        }   else if( !isAlpha($("#fname").val()) ) {
            alert("First Name is invalid.");
        } else if( $("#lname").val() == "" ) {
            alert("Last Name is Required.");
        }
        else if( !isAlpha($("#lname").val()) ) {
            alert("Last Name is invalid.");
        } else if( $("#adr").val() == "" ) {
            alert("Address is Required.");
        } else if( !isAlphanumeric($("#adr").val()) ) {
            alert("Address is invalid.");
        } else if( $("#city").val() == "" ) {
            alert("City is Required.");
        } else if( $("#state").val() == "" ) {
            alert("State is Required.");
        } else if( $("#zip").val() == "" ) {
            alert("Zip Code is Required.");
        } else if( !isUSAZipCode($("#zip").val()) ) {
            alert("Zip Code is invalid.");
        } else if( $("#ccnum").val() == "" ) {
            alert("Credit Card Number is Required.");
        } else if ( isCcnum($("#ccnum").val()) ) {      //checking for American Express
            if( $("#expmonth").val() == "" ) {
                alert("Expiration Month is Required.");
            } else if( $("#expyear").val() == "" ) {
                alert("Expiration Year is Required.");
            } else if( $("#cvv").val() == "" ) {
                alert("CVV is Required.");
            }else if( !isCvv($("#cvv").val()) ) {
                alert("CVV is invalid.");
            } else {
                alert("Order Submitted");
            }
        } else if ( isCcnum2($("#ccnum").val()) ) {     //checking for Visa
            if( $("#expmonth").val() == "" ) {
                alert("Expiration Month is Required.");
            } else if( $("#expyear").val() == "" ) {
                alert("Expiration Year is Required.");
            } else if( $("#cvv").val() == "" ) {
                alert("CVV is Required.");
            }else if( !isCvv($("#cvv").val()) ) {
                alert("CVV is invalid.");
            } else {
                alert("Order Submitted");
            }
        } else if ( isCcnum3($("#ccnum").val()) ) {     //checking for Master Card
            if( $("#expmonth").val() == "" ) {
                alert("Expiration Month is Required.");
            } else if( $("#expyear").val() == "" ) {
                alert("Expiration Year is Required.");
            } else if( $("#cvv").val() == "" ) {
                alert("CVV is Required.");
            }else if( !isCvv($("#cvv").val()) ) {
                alert("CVV is invalid.");
            } else {
                alert("Order Submitted");
            }
        } else if ( isCcnum4($("#ccnum").val()) ) {     //checking for Discover
            if( $("#expmonth").val() == "" ) {
                alert("Expiration Month is Required.");
            } else if( $("#expyear").val() == "" ) {
                alert("Expiration Year is Required.");
            } else if( $("#cvv").val() == "" ) {
                alert("CVV is Required.");
            }else if( !isCvv($("#cvv").val()) ) {
                alert("CVV is invalid.");
            } else {
                alert("Order Submitted");
            }
        } else {
                alert("Credit Card Number is Invalid");
        } 
    });
});
function isAlpha(str) {
    return /^[A-Za-z]+$/.test(str);
}

function isAlphanumeric(str) {
    return /^[0-9a-zA-Z]+$/.test(str);
};

function isUSAZipCode(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}

function isCcnum(str) {
    return /^(?:3[47][0-9]{13})$/.test(str);
}

function isCcnum2(str) {
    return /^(?:4[0-9]{12}(?:[0-9]{3})?)$/.test(str);
}

function isCcnum3(str) {
    return /^(?:5[1-5][0-9]{14})$/.test(str);
}

function isCcnum4(str) {
    return /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/.test(str);
}

function isCvv(str) {
    return /^[0-9]{3}$/.test(str);
}