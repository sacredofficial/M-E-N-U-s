/* W.I.P. menu! */

// Remove Will's Cheat Menu
$("#cheat-menu")[0].remove();
$("#menu-toggler")[0].remove();

// Import libraries
(async() => {
	eval(await (await fetch("https://raw.githubusercontent.com/MikeTheSkid/M-E-N-U-s/master/ChickensCrappyCheatMenu/src/lib/swal2.js")).text())
})()

// Insert menu
var menuWrapper = document.createElement("div");
menuWrapper.style.width = "100%";
menuWrapper.style.height = "25%";
menuWrapper.style.backgroundColor = "lightgrey";
menuWrapper.style.opacity = "0.95";
document.body.insertBefore(menuwrapper, document.body.firstChild)
