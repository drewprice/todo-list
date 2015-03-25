function markComplete() {
	$(".todo").click(function() {
			$(this)
				.removeClass("todo")
				.addClass("done")
				.appendTo(".done_list");
	});
};


function createItem() {
	$(".submit").click( function() {
			
		var item = $(".input").text()
    	
    	$("<li><div>X</div>" + item + "</li>")
    		.addClass("todo")
    		.prependTo(".todo_list")
    		.slideDown(400);
    	$(".input").empty();
    	markComplete();
	})

	$(document).keypress( function(event) {
		if (event.which == 13) {
			$('.submit').click()
	  	};
	});
};

function reshapeForm() {
	$(window).resize(function() {
		var inputHeight = $(".input").height();
		var submitHeight = $(".submit").height();
	  
	  	if (inputHeight != submitHeight) {
	  		$("h2").addClass("smooth_corners");
		} else if (inputHeight == submitHeight) {
	    	$("h2").removeClass("smooth_corners");
	  	};
	});
};

function toggleLists(counter) {
	$("h4").click(function() {
		if (counter % 2 == 0) {
			$(this)
				.text("THE DONE LIST")
				.append("<p>(click here to view todos)</p>");
			counter++;
		} else {
			$(this)
				.text("(& THE DONE LIST)");
			counter++;
		};
		
		$("h1").slideToggle(400, function() {
			$("ul").slideToggle(400);
		});
	});
}


$(document).ready( function() {

	var counter = 0;
	createItem();
	reshapeForm();
	toggleLists(counter);
});