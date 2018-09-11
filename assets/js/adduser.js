$(document).ready(function(){
	$(#add_user).bootstrapValidator({
		container:'#messages',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
		},
		fields:{
			username: {
				validators: {
					notEmpty: {
						message: 'The username is required and cannot be empty'
					}
				}
			},
			firstname: {
				validators: {
					notEmpty: {
						message: 'The firstname is required and cannot be empty'
					}
				}
			},
			lastname: {
				validators: {
					notEmpty: {
						message: 'The lastname is required and cannot be empty'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: 'The email is required and cannot be empty'
					},
					emailAddress: {
						message: 'The email address is not valid'
					}
				}
			},
			password: {
				validators: {
					notEmpty: {
						message: 'The password is required and cannot be empty'
					}
				}
			},
			confirm_password: {
				validators: {
					notEmpty: {
						message: 'The confirm password is required and cannot be empty'
					}
				}
			},
			age: {
				validators: {
					notEmpty: {
						message: 'The age is required and cannot be empty'
					},
					stringLength: {
                        max: 3,
                        message: 'The age must be less than 3 characters long'
                    }
				}
			},
			address1: {
				validators: {
					notEmpty: {
						message: 'The address1 is required and cannot be empty'
					}
				}
			},
			phone: {
				validators: {
					notEmpty: {
						message: 'The phone number is required and cannot be empty'
					},
					stringLength: {
                        max: 10,
                        message: 'The number must be 10 characters long'
                    }
				}
			},
			location: {
				validators: {
					notEmpty: {
						message: 'The location is required and cannot be empty'
					}
				}
			},
			sublocality: {
				validators: {
					notEmpty: {
						message: 'The sub locality is required and cannot be empty'
					}
				}
			},
			landmark: {
				validators: {
					notEmpty: {
						message: 'The landmark is required and cannot be empty'
					}
				}
			},
			city: {
				validators: {
					notEmpty: {
						message: 'The city is required and cannot be empty'
					}
				}
			},
			district: {
				validators: {
					notEmpty: {
						message: 'The district is required and cannot be empty'
					}
				}
			},
			state: {
				validators: {
					notEmpty: {
						message: 'The state is required and cannot be empty'
					}
				}
			}
			
		}
	});
	});
