// Parse the URL
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Give the URL parameters variable names
var source = getParameterByName('utm_source');
var medium = getParameterByName('utm_medium');
var campaign = getParameterByName('utm_campaign');

// Set the cookies
if($.cookie('utm_source') == null || $.cookie('utm_source') == "") {
$.cookie('utm_source', source);
}
if($.cookie('utm_medium') == null || $.cookie('utm_medium') == "") {
$.cookie('utm_medium', medium);
}
if($.cookie('utm_campaign') == null || $.cookie('utm_campaign') == "") {
$.cookie('utm_campaign', campaign);
}

// Grab the cookie value and set the form field values
$(document).ready(function(){
	$('input[name=utm_source').val(utm_source);
	$('input[name=utm_medium').val(utm_medium);
	$('input[name=utm_campaign').val(utm_campaign);
});