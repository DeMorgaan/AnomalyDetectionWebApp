//Requesting the calculation server for the anomalies
function getAnomalies(normalData,anomalData,algo,callback) {
	
	var XMLHttpRequest = require('../Controller/node_modules/xmlhttprequest').XMLHttpRequest;
	var http = new XMLHttpRequest();
	var url = "http://localhost:3030";
	var params = normalData+"*"+anomalData+"*"+algo;
	http.open("POST", url, true);

	http.setRequestHeader("Content-Type", "application/json");

	var anomalies;
	http.onreadystatechange = function() {
	    if(http.readyState == 4 && http.status == 200) {
    	     if (typeof callback === "function") {
                // apply() sets the meaning of "this" in the callback
                callback.apply(http);
            }
	    }
	}

	http.send(params)
}
module.exports.getAnomalies = getAnomalies