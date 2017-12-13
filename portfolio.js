function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

$("#navBarName").find("a").on("click", function(e) {
	e.preventDefault();
	var section = $(this).attr("href");
	$("html body).animate({
		scrollTop: $(section).offset().top
	});
});