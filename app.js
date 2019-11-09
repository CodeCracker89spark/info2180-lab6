//$(document).ready(function(){

document.addEventListener('click', function (event) {

	if (event.target.matches('#Search')) {
		
		
				var httpRequest = new XMLHttpRequest();
var url = "http://localhost:8080/superheroes.php";


httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		console.log(httpRequest.status);
		//alert(httpRequest.status);
	if (httpRequest.status === 200) {
	var response = httpRequest.responseText;
	alert(response);
	} else {
	alert('There was a problem with the request.');
	}
	}}
httpRequest.open('GET', url);
httpRequest.send();
			
			}
    }, false);




		//note: php -S localhost:8080 must be continually entered into command line for code to work
		/*$("#Search").on("click",function() {
			alert("Help");
			console.log(100);
var httpRequest = new XMLHttpRequest();
var url = "http://localhost:8080/superheroes.php";


httpRequest.onreadystatechange = getHeroes;
httpRequest.open('GET', url);
httpRequest.send();

});*/
//	}
/*function getHeroes() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		console.log(httpRequest.status);
		//alert(httpRequest.status);
	if (httpRequest.status === 200) {
	var response = httpRequest.responseText;
	alert(response);
	} else {
	alert('There was a problem with the request.');
	}
	}
}
})
/*
crossDomain: true;
    dataType: 'jsonp';
fetch('http://localhost:8080/superheroes.php')
.then(response => response.text())
.then(data => {
// Here's some data!
alert(data);
console.log(data)
})
.catch(error => {
console.log(error);
});*/
