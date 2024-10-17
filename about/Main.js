function openNav() {
	console.log("Opening Sidebar.")
	document.getElementById("mySidebar").style.width = "250px";
	document.querySelector(".openbtn").style.left = "270px";
}

function closeNav() {
	console.log("Closing Sidebar.")
	document.getElementById("mySidebar").style.width = "0";
	document.querySelector(".openbtn").style.left = "10px";
}

