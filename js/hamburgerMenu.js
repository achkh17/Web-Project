function hamburgerMenuClicked(x) {
	x.classList.toggle("change");

	var header = document.getElementById("header");
	var sticky = header.offsetTop;
	var x = document.getElementById("navMenu");

	if (x.style.display === "block") {
		x.style.display = "none";
		header.classList.remove("sticky");
	} else {
		x.style.display = "block";
		header.classList.add("sticky");
	}

}


function openSubmenu(y) {
	var x = y.parentElement.children[1];
	if (x.style.display === "block") {
		x.style.display = "none";
		y.parentElement.children[0].children[1].style.transform = "none";
	} else {
		x.style.display = "block";
		y.parentElement.children[0].children[1].style.transform = "rotate(180deg)";
	}	
}