$.getJSON("/stories", function(data) {
	for (var i = 0; i < data.length; itt) {
		$("#stories").append("<p data-id='" + data[i]._id + "'> " + dta[i].title + "<br />" + data[i].link + "</p>");


	}
});

$(document).on("click", "p", function() {

var thisId = $(this).attr("data-id");

$.ajax({
	method: "GET",

	url: "/stories/" + thisId
	});		


});



