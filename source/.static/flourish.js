$(document).ready(function() {
    $('div.body img.cboxElement').colorbox({
	href: function () {
	    return $(this).attr('src'); 
	}
    });
});
