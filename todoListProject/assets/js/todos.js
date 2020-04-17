
// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

// Click on X to delete Todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		console.log($(this).text() + " deleted");
		$(this).remove;
	});
	e.stopPropagation();
});

//Add new todos from the input by adding the li to the ul
$("input[type='text']").on("keypress", function(e){
	if(e.which === 13){
		//grabbing new todo text from input
		var todoText = ($(this).val());
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(100);
})
