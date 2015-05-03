$(document).ready(function() {
	$("#thumb1").click(function(){
		$("#person2").removeClass("in");
		$("#person3").removeClass("in");
	})
	$("#thumb2").click(function(){
		$("#person1").removeClass("in");
		$("#person3").removeClass("in");
	})
	$("#thumb3").click(function(){
		$("#person1").removeClass("in");
		$("#person2").removeClass("in");
	})
});