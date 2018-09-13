$(document).ready(function() {
$('#submit').click(function(e) {
// Initializing Variables With Form Element Values
var username = $('#username').val();
var firstname = $('#firstname').val();
var lastname = $('#lastname').val();
var email = $('#email').val();
var password = $('#password').val();
var confirm_password = $('#confirm_password').val();
var phone = $('#phone').val();
var age = $('#age').val();
var address1 = $('#address1').val();
var address2 = $('#address2').val();
var location = $('#location').val();
var sublocality = $('#sublocality').val();
var landmark = $('#landmark').val();
var city = $('#city').val();
var district = $('#district').val();
var state = $('#state').val();
var latitude = $('#latitude').val();
var longitude = $('#longitude').val();
var rate = $('#rate').val();
var exp = $('#exp').val();
var gender =  $("input[name=inlineRadioOptions]:checked").length;
var noOfSelectedItems=$('#lstBox2 :selected').length;
// Initializing Variables With Regular Expressions
var name_regex = /^[a-zA-Z]+$/;
var email_regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
var add_regex = /^[0-9a-zA-Z]+$/;
var rate_regex = /^[0-9]+$/;
var phone_regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
// To Check Empty Form Fields.
if (username.length == 0) {
$('#messages').html("<p>* Please fill the mandatory fields *</p>"); // This Segment Displays The Validation Rule For All Fields
$("#username").focus();
return false;
}
// Validating Name Field.
else if (!username.match(add_regex) || username.length == 0) {
$('#messages').html("<p>* Username can only contain alphabets and numbers *</p>"); // This Segment Displays The Validation Rule For Name
$("#username").focus();
return false;
}
// Validating firstname Field.
else if (!firstname.match(name_regex) || firstname.length == 0) {

$('#messages').html("<p>*Please provide firstname - contain alphabets only *</p>"); // This Segment Displays The Validation Rule For Name
$("#firstname").focus();
return false;
}
// Validating lastname Field.
else if (!lastname.match(name_regex) || lastname.length == 0) {
	
$('#messages').html("<p>* Please provide lastname - contain alphabets only*</p>"); // This Segment Displays The Validation Rule For Name
$("#lastname").focus();
return false;
}

// // Validating Username Field.
// else if (!(username.length >= 6 && username.length <= 8) || username.length == 0) {
// $('#p1').text("* Please enter between 6 and 8 characters *"); // This Segment Displays The Validation Rule For Username
// $("#username").focus();
// return false;
// }
// Validating Email Field.
else if (!email.match(email_regex) || email.length == 0) {
$('#messages').html("<p>* Please enter a valid email address *</p>"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}

// Validating password Field.
else if (!(password.length >= 6 && password.length <= 8) || password.length == 0) {
$('#messages').html("<p>* Please enter between 6 and 8 characters *</p>"); // This Segment Displays The Validation Rule For Username
$("#password").focus();
return false;
}

//validating confirm password field.

else if(!confirm_password.length>=6&&confirm_password.length<=8 || confirm_password.length == 0) {
	$('#messages').html("</P>*please enter between 6 and 8 characters*</p>");
	$("#confirm_password").focus();
	return false;

}
else if(password!= confirm_password) {
	$('#messages').html("<p>*Passwords does not match*</p>");
	$("#confirm_password").focus();
	return false;	
}


//validating gender field.
else if (gender < 1){
      $('#messages').html("<p>* Please enter your gender*</p>"); // This Segment Displays The Validation Rule For Zip
$("#inlineRadioOptions").focus();
return false;
}

// Validating phone Field.
else if (!phone.match(phone_regex) || phone.length == 0) {

$('#messages').html("<p>* Please enter a valid phone number*</p>"); // This Segment Displays The Validation Rule For Zip
$("#phone").focus();
return false;
} 

// // Validating Select Field.
// else if (state == "Please Choose") {
// $('#p4').text("* Please Choose any one option"); // This Segment Displays The Validation Rule For Selection
// $("#state").focus();
// return false;
// }
// Validating Address Field.
else if (!address1.match(add_regex) || address1.length == 0) {
$('#messages').html("<p>* For Address please use numbers and letters *</p>"); // This Segment Displays The Validation Rule For Address
$("#address1").focus();
return false;
}
// Validating location Field.
else if (!location.match(name_regex) || location.length == 0) {
$('#messages').html("<p>* For location only alphabets are allowed *</p>"); // This Segment Displays The Validation Rule For Name
$("#location").focus();
return false;
}

// Validating landmark Field.
else if (!landmark.match(name_regex) || landmark.length == 0) {
$('#messages').html("<p>* For landmark only alphabets are allowed *</p>"); // This Segment Displays The Validation Rule For Name
$("#landmark").focus();
return false;
}
// Validating city Field.
else if (!city.match(name_regex) || city.length == 0) {
$('#messages').html("<p>* For city only alphabets are allowed *</p>"); // This Segment Displays The Validation Rule For Name
$("#city").focus();
return false;
}
// Validating district Field.
else if (!district.match(name_regex) || district.length == 0) {
$('#messages').html("<p>*For district only alphabets are allowed*</P>"); // This Segment Displays The Validation Rule For Name
$("#district").focus();
return false;
}
// Validating state Field.
else if (!state.match(name_regex) || state.length == 0) {
$('#messages').html("<p>* For your state please use alphabets only *</p>"); // This Segment Displays The Validation Rule For Name
$("#state").focus();
return false;
}

else if(noOfSelectedItems==0)
{
$('#messages').html("<p>* select category *</p>"); // This Segment Displays The Validation Rule For Name
$("#lstBox2").focus();
return false;
}
else if (!rate.match(rate_regex) || rate.length == 0) {
$('#messages').html("<p>* For your rate use numbers *</p>"); // This Segment Displays The Validation Rule For Name
$("#rate").focus();
return false;
}

else {
alert("Form Submitted Successfuly!");
return true;
}
});
});

