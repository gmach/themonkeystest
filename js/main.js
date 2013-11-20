document.forms[0].onsubmit = function(event){
	event.preventDefault();
	var enqType = document.getElementById("enqType");
	var pcAllFilled = false;
	if (enqType.value == "Product complaint") {
		pcAllFilled = validateFormField("productName") && validateFormField("productSize") && validateFormField("usebyDate") && validateFormField("batchCode");
		if (pcAllFilled) {
			displayResults();
		}
		return;
	}
	displayResults();
};

function displayResults() {
	var results = '';
	results += 'State = ' + document.getElementById("state").value + '<br/>';
	results += 'Enquiry Type = ' + document.getElementById("enqType").value + '<br/>';
	var fields = document.getElementsByTagName("input");
	for (i=0; i<fields.length;i++) {
		if (fields[i].value != 'Submit')
			results += fields[i].name + " = " + fields[i].value + '<br/>';
	}
	
	document.getElementById("results").innerHTML=results;
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
