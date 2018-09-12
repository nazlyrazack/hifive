$(document).ready(function() {
$('#submit').click(function(e) {
// Initializing Variables With Form Element Values
var username = $('#username').val();
var firstname = $('#firstname').val();
var lastname = $('#lastname').val();
var email = $('#email').val();
var password = $('#password').val();
var confirm_password = $('#confirm_password').val();
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
var gender =  $("input[name=inlineRadioOptions]:checked").length;
// Initializing Variables With Regular Expressions
var name_regex = /^[a-zA-Z]+$/;
var email_regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;;
var add_regex = /^[0-9a-zA-Z]+$/;
var zip_regex = /^[0-9]+$/;
// To Check Empty Form Fields.
if (username.length == 0) {
$('#messages').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
$("#username").focus();
return false;
}
// Validating Name Field.
else if (!username.match(add_regex) || username.length == 0) {
$('#p1').text("* Username can only contail alphabets and numbers *"); // This Segment Displays The Validation Rule For Name
$("#username").focus();
return false;
}
// Validating firstname Field.
else if (!firstname.match(name_regex) || firstname.length == 0) {

$('#p2').text("* For your firstname please use alphabets only *"); // This Segment Displays The Validation Rule For Name
$("#firstname").focus();
return false;
}
// Validating lastname Field.
else if (!lastname.match(name_regex) || lastname.length == 0) {
$('#p3').text("* For your lastname please use alphabets only *"); // This Segment Displays The Validation Rule For Name
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
$('#p4').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}

// Validating password Field.
else if (!(password.length >= 6 && password.length <= 8) || password.length == 0) {
$('#p5').text("* Please enter between 6 and 8 characters *"); // This Segment Displays The Validation Rule For Username
$("#password").focus();
return false;
}

//validating confirm password field.

else if(!confirm_password.length>=6&&confirm_password.length<=8 || confirm_password.length == 0) {
	$('#p6').text("*please enter between 6 and 8 characters*");
	$("#confirm_password").focus();
	return false;

}


//validating gender field.
else if (gender < 1){
      $('#p8').text("* Please enter your gender*"); // This Segment Displays The Validation Rule For Zip
$("#inlineRadioOptions").focus();
return false;
}

// Validating phone Field.
else if (!phone.length==10 || phone.length == 0) {

$('#p9').text("* Please enter a valid phone number*"); // This Segment Displays The Validation Rule For Zip
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
$('#p10').text("* For Address please use numbers and letters *"); // This Segment Displays The Validation Rule For Address
$("#address1").focus();
return false;
}
// Validating location Field.
else if (!location.match(name_regex) || location.length == 0) {
$('#p12').text("* For location only alphabets are allowed *"); // This Segment Displays The Validation Rule For Name
$("#location").focus();
return false;
}

// Validating landmark Field.
else if (!landmark.match(name_regex) || landmark.length == 0) {
$('#p14').text("* For landmark only alphabets are allowed *"); // This Segment Displays The Validation Rule For Name
$("#landmark").focus();
return false;
}
// Validating city Field.
else if (!city.match(name_regex) || city.length == 0) {
$('#p15').text("* For city only alphabets are allowed *"); // This Segment Displays The Validation Rule For Name
$("#city").focus();
return false;
}
// Validating district Field.
else if (!district.match(name_regex) || district.length == 0) {
$('#p16').text("*For district only alphabets are allowed*"); // This Segment Displays The Validation Rule For Name
$("#district").focus();
return false;
}
// Validating state Field.
else if (!state.match(name_regex) || state.length == 0) {
$('#p17').text("* For your state please use alphabets only *"); // This Segment Displays The Validation Rule For Name
$("#state").focus();
return false;
}
else {
alert("Form Submitted Successfuly!");
return true;
}
});
});




































// $(document).ready(function(){
// 	$('#add_user').bootstrapValidator({
// 		container:'#messages',
// 		feedbackIcons: {
// 			valid: 'glyphicon glyphicon-ok',
//             invalid: 'glyphicon glyphicon-remove',
//             validating: 'glyphicon glyphicon-refresh'
// 		},
// 		fields:{
// 			username: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The username is required and cannot be empty'
// 					}
// 				}
// 			},
// 			firstname: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The firstname is required and cannot be empty'
// 					}
// 				}
// 			},
// 			lastname: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The lastname is required and cannot be empty'
// 					}
// 				}
// 			},
// 			email: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The email is required and cannot be empty'
// 					},
// 					emailAddress: {
// 						message: 'The email address is not valid'
// 					}
// 				}
// 			},
// 			password: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The password is required and cannot be empty'
// 					}
// 				}
// 			},
// 			confirm_password: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The confirm password is required and cannot be empty'
// 					}
// 				}
// 			},
// 			age: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The age is required and cannot be empty'
// 					},
// 					stringLength: {
//                         max: 3,
//                         message: 'The age must be less than 3 characters long'
//                     }
// 				}
// 			},
// 			address1: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The address1 is required and cannot be empty'
// 					}
// 				}
// 			},
// 			phone: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The phone number is required and cannot be empty'
// 					},
// 					stringLength: {
//                         max: 10,
//                         message: 'The number must be 10 characters long'
//                     }
// 				}
// 			},
// 			location: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The location is required and cannot be empty'
// 					}
// 				}
// 			},
// 			sublocality: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The sub locality is required and cannot be empty'
// 					}
// 				}
// 			},
// 			landmark: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The landmark is required and cannot be empty'
// 					}
// 				}
// 			},
// 			city: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The city is required and cannot be empty'
// 					}
// 				}
// 			},
// 			district: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The district is required and cannot be empty'
// 					}
// 				}
// 			},
// 			state: {
// 				validators: {
// 					notEmpty: {
// 						message: 'The state is required and cannot be empty'
// 					}
// 				}
// 			}
			
// 		}
// 	});
// 	});
