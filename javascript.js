var x = 0;
function testFunc() {
	if (x == 0){
	document.getElementById("demo").innerHTML = "Edit complete.";
	x = 1;
	} else if (x == 1) {
	document.getElementById("demo").innerHTML = "Edit reverted.";
	x = 0;
	}
}
