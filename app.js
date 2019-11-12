//$(document).ready(function(){
var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};
document.addEventListener('click', function (event) {

	if (event.target.matches('#Search')) {
		
		
				var httpRequest = new XMLHttpRequest();
var url = "http://localhost:8080/superheroes.php";
var guy = sanitizeHTML(document.getElementById("intel").value);

httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		console.log(httpRequest.status);
		//alert(httpRequest.status);
	if (httpRequest.status === 200) {
	
	//alert(guy);
	document.getElementById("result").innerHTML = this.responseText;
	
	
	
	} else {
	alert('There was a problem with the request.');
	}
	}}
httpRequest.open("GET", url +"?query="+guy, true);
httpRequest.send();
			
			}
    }, false);
//htmlspecialchars - use this  to sanitize input



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
