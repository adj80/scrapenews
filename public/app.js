$.getJSON("/stories", function(data) {
	for (var i = 0; i < data.length; i++) {
		$("#stories").append("<p data-id='" + data[i]._id + "'> " + data[i].title + "<br />" + data[i].link + "</p>");


	}
});

$(document).on("click", "p", function() {

var thisId = $(this).attr("data-id");

$.ajax({
	method: "GET",

	url: "/stories/" + thisId
	});		


});



