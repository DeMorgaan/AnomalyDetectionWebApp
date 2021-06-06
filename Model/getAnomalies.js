//Requesting the calculation server for the anomalies
function getAnomalies(normalData,anomalData,algo) {
	
	var XMLHttpRequest = require('../Controller/node_modules/xmlhttprequest').XMLHttpRequest;
	var http = new XMLHttpRequest();
	var url = "http://localhost:3030";
	var params = normalData+"\n:\n"+anomalData+"\n:\n"+algo;
	http.open("POST", url, true);


	http.setRequestHeader("Content-Type", "application/json");


	http.onreadystatechange = function() {
	    if(http.readyState == 4 && http.status == 200) {
	    	//console.log(http.responseText)//the JSON string from server will show here
	    }

	}
	http.send(params)

	return "hi"
}
module.exports.getAnomalies = getAnomalies
