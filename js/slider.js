var slideIndex = 1;
timer = null;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	clearTimeout(timer);
	var x = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	if (n === undefined) { n = slideIndex++; }
	if (n > x.length || slideIndex > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].style.backgroundColor = "transparent";
	}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].style.backgroundColor = "white";
	timer = setTimeout(showDivs, 5000);

}