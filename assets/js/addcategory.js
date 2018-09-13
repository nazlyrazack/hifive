$(document).ready(function() {
$('#submit').click(function(e) {
// Initializing Variables With Form Element Values
var cat_name = $('#cat_name').val();
var parentcat_name = $('#parentcat_name').val();
var type = $('#type').val();

// Initializing Variables With Regular Expressions
var name_regex = /^[a-zA-Z]+$/;

// To Check Empty Form Fields.
if (cat_name.length == 0) {
$('#messages').html("<p>* Please fill the mandatory fields *</p>"); // This Segment Displays The Validation Rule For All Fields
$("#cat_name").focus();
return false;
}

// Validating city Field.
else if (!cat_name.match(name_regex) || cat_name.length == 0) {
$('#messages').html("<p>* Please provide category name - contain alphabets only *</p>"); // This Segment Displays The Validation Rule For Name
$("#cat_name").focus();
return false;
}
// Validating district Field.
else if (!parentcat_name.match(name_regex) || parentcat_name.length == 0) {
$('#messages').html("<p>*Please provide parent category name - contain alphabets only*</p>"); // This Segment Displays The Validation Rule For Name
$("#parentcat_name").focus();
return false;
}
// Validating state Field.
else if (!type.match(name_regex) || type.length == 0) {
$('#messages').html("<p>* Please provide type of category - contain alphabets only *</p>"); // This Segment Displays The Validation Rule For Name
$("#type").focus();
return false;
}
else {
alert("Form Submitted Successfuly!");
return true;
}
});
});