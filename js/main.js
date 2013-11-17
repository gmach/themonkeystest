function validateMyForm() { 
	var enqType = document.getElementById("enqType");
	if (enqType.value == "Product complaint") {
		return validateFormField("productName") && validateFormField("productSize") && validateFormField("usebyDate") && validateFormField("batchCode");
	}
}

function validateFormField(fieldId) {
	var name = document.getElementById(fieldId).name;
	var value = document.getElementById(fieldId).value;
	if (value == null || value == "") {
		alert ("Please enter a value for " + name);
		return false;
	} else {
		return true;
	}
}
