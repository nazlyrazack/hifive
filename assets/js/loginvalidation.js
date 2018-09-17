//checking empty fields for username and password
$('#login').click(function(){
        var uname=$('#uname').val();
        var pwd=$('#pwd').val();

       if($.trim(uname)=="") {
          $('#messages').html("<p> *Pease Enter the username*</p>");
          return false;
        }
        else if($.trim(pwd)==""){

        	$('#messages').html("<p> *Pease Enter the Password*</p>");
        	return false;
        }
        else
        {
        	alert("Login successful");
        	return true;
        }

     });