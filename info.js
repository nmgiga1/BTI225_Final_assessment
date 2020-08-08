function validateFirstName() {
    
	var firstName = document.querySelector("#first").value.trim();
	var firstNamePatt = /^[A-Z]/.test(firstName);
	var firstNamepatt2 = /[0-9]/.test(firstName);

	if (!firstNamePatt || firstNamepatt2) {
		document.getElementById('first').style.borderColor = "red";
		showErrors("<p><b>First Name:</b> it must start with a cap and only alphabet allowed. ");
		return false;
	} else {
		document.getElementById('first').style.borderColor = "unset";
		return true;
	}

}

function validateLastName() {

	var LastName = document.querySelector("#last").value.trim();
	var LastNamePatt = /^[A-Z]/.test(LastName);
	var LastNamepatt2 = /[0-9]/.test(LastName);

	if (!LastNamePatt || LastNamepatt2) {
		document.getElementById('last').style.borderColor = "red";
		showErrors("<p><b>Last Name:</b> it must start with a cap and only alphabet allowed. ");
		return false;
	} else {
		document.getElementById('last').style.borderColor = "unset";
		return true;
	}

}

function validPsswd() {

	var psswd = document.querySelector("#Password").value.trim();

	var char = /[A-Za-z]/.test(psswd[0]);
	var num = /[0-9]/.test(psswd);
	var pcase = /[A-Z]/.test(psswd);

	if (!char || !num || !pcase || psswd < 6) {
		document.getElementById('Password').style.borderColor = "red";
		showErrors("<p><b>Password:</b> Must be at least 6 characters long, start with a character, have at least 1 digit and 1 uppercase.</p>");
		return false;
	} else {
		document.getElementById('Password').style.borderColor = "unset";
		return true;
	}
}

function confirmPsswd() {

	var passwrd = document.querySelector("#Password").value.trim();
	var confirmPasswrd = document.querySelector("#Confirm").value.trim();

	if (passwrd != confirmPasswrd) {
		document.getElementById('Confirm').style.borderColor = "red";
		showErrors("<p><b>Password:</b> Passwords does not match.</p>");
		return false;
	} else {
		document.getElementById('Confirm').style.borderColor = "unset";
		return true;
	}
}

function validateUserName() {

	var userName = document.querySelector("#UserName").value.trim();
	var userNamepattern = /^[A-Za-z]{6,}$/.test(userName);

	if (!userNamepattern) {
		document.getElementById('UserName').style.borderColor = "red";
	    showErrors("<p><b>User Name:</b> User name is greater than 6 characters or does not start with a letter");
		return false;
	} else {
		document.getElementById('UserName').style.borderColor = "unset";
		return true;
	}

}

function formValidation() {
    
	var check = true;

	document.querySelector("#error").innerHTML = "";
	document.querySelector("#error").innerHTML = "Validation Errors:";

	if (validateFirstName() == false) {
		check = false;
	}

	if (validateLastName() == false) {
		check = false;
	}

	if (validateUserName() == false) {
		check = false;
	}

	if (validPsswd() == false) {
		check = false;
	}

	if (confirmPsswd() == false) {
		check = false;
	}

	return  check == true ? alert("Adding The Form Was Succesful!") : false ;

}

function showErrors(messages)
{
    document.querySelector("#error").innerHTML += messages;
}  