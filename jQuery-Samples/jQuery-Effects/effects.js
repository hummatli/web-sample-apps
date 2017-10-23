$("button:nth-of-type(1)").on("click", function() {
	$("div").fadeOut(1000, function(){
		console.log("Fadeout Complete")
		//$(this).remove() // We can remove elements after fadeOut
	})
})

$("button:nth-of-type(2)").on("click", function() {
	$("div").fadeIn(1000, function(){
		console.log("Fadein Complete")
	})
})

$("button:nth-of-type(3)").on("click", function() {
	$("div").fadeToggle(1000, function(){
		console.log("FadeToggle Complete")
	})
})

$("button:nth-of-type(4)").on("click", function() {
	$("div").slideDown(500, function(){
		console.log("SlideDown Complete")
	})
})

$("button:nth-of-type(5)").on("click", function() {
	$("div").slideUp(500, function(){
		console.log("SlideUp Complete")
	})
})

$("button:nth-of-type(6)").on("click", function() {
	$("div").slideToggle(500, function(){
		console.log("SlideToggle Complete")
	})
})