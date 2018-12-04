function myFunction() {
    var x = document.getElementById("username").value;
    document.getElementById("reviewspace").innerHTML = x
	
	var y = document.getElementById("reviewwords").value;
    document.getElementById("reviewspace2").innerHTML = y

	}


	$(document).ready(function() {
            buttonElement = $(".button");
            imageElement.hover( // accepts two functions
                function() { // mouse goes over:
                    $(this).toggleClass("normal", false); // remove one class first
                    $(this).toggleClass("mouseOver", true); // add another one
                },
                function() { // mouse goes out
                    $(this).toggleClass("mouseOver", false);
                    $(this).toggleClass("normal", true);
                }
            );
        }); 
