// var url = "https://github.com/AnantVijaySingh/my2018/blob/master/API/practiceData.json"
var url = "API/practiceData.json"
var request = new XMLHttpRequest();

request.onload = function () {
	if (request.status == 200 ) {
		alert(request.responseText);
	} else {
		alert("Check for error");
	}
}

function getData () {
	request.open("GET",url);
	request.send(null); 
}