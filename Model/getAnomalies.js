//Requesting the calculation server for the anomalies
function getAnomalies(normalData,anomalData,algo) {
	
/*	$.post("http://localhost/3030",{file1:normalData,file2:anomalData,algo:algo},
	function(data, status){
	console.log("Data: " + data + "\nStatus: " + status);
	});*/

	var XMLHttpRequest = require('../Controller/node_modules/xmlhttprequest').XMLHttpRequest;
	var http = new XMLHttpRequest();
	var url = "http://localhost:3030";
	var params = normalData+"\n:\n"+anomalData+"\n:\n"+algo;
	//var params=JSON.stringify(params1);
	//console.log(params1)
	//var params="hello world"
	http.open("POST", url, true);
	console.log("AFTER3")

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//http.setRequestHeader("Content-type", "Transfer-Encoding: chunked");
	//http.setRequestHeader("Content-Type", "application/json");
	//http.setRequestHeader("Content-Type: text/plain","charset=ISO-8859-1")

	http.onreadystatechange = function() {
	    if(http.readyState == 4 && http.status == 200) {
	    	console.log("response")
	        //console.log(http.responseText);//the JSON string from server will show here
	    }
	    console.log("after if response")
        console.log("atat"+http.status);
        console.log("ready"+http.readyState);
        console.log("resTEXT :"+ http.responseText)
        console.log("resTEXT :"+ typeof http.responseText)

	}
	console.log("AFTER4")
	console.log("atataaaaa"+http.status);
	http.send(params);

/*
	var XMLHttpRequest = require('../Controller/node_modules/xmlhttprequest').XMLHttpRequest;
	var http = new XMLHttpRequest();

    var formParams = {
        action: "filter",
        filterId: "blah"
        //other parameters
    };

    var URI = require("uri");

    var requestURL = new URI("http://localhost/3030");

    http.open("POST", requestURL.toString(), true);

    //Send the proper header information along with the request
    //http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");

    //Call a function when the state changes.
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    };
    requestURL.addSearch(formParams);
    http.send(requestURL.query());*/


	//const { JSDOM } = require( "jsdom" );
	//const { window } = new JSDOM( "" );
/*	const $ = require('../Controller/node_modules/jquery');

    $.post('http://localhost/3030',{file1:normalData,file2:anomalData,algo:algo},
	function(data, status){
	console.log("Data: " + data + "\nStatus: " + status);
	});*/
/*	var XMLHttpRequest = require('../Controller/node_modules/xmlhttprequest').XMLHttpRequest;
	var http_request;
	http_request = new XMLHttpRequest();
	http_request.onreadystatechange = function () {
		    if(http_request.readyState == 4 && http_request.status == 200) {
	    	console.log("response")
	        //console.log(http.responseText);//the JSON string from server will show here
	    }
	    console.log("after if response")
        console.log("atat"+http_request.status);
        console.log("ready"+http_request.readyState);
        console.log("resTEXT :"+ http_request.responseText)
        console.log("resTEXT :"+ typeof http_request.responseText) };
	http_request.open("POST", "http://localhost/3030");
	http_request.withCredentials = true;
	http_request.setRequestHeader("Content-Type", "application/json");
	var params1 = {file1:normalData,file2:anomalData,algo:algo};
	var params=JSON.stringify(params1);
	http_request.send(params);*/


	return "hi"
}
module.exports.getAnomalies = getAnomalies