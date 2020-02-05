// Parse the URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Give the URL parameters variable names
var r = getParameterByName('r');
var utm_source = getParameterByName('utm_source');
var utm_medium = getParameterByName('utm_medium');
var utm_campaign = getParameterByName('utm_campaign');
var gclid = getParameterByName('gclid');

// Store
if(r == null || r == "") {} else { localStorage.setItem("r", r); }
if(utm_source == null || utm_source == "") {} else { localStorage.setItem("utm_source", utm_source); }
if(utm_medium == null || utm_medium == "") {} else { localStorage.setItem("utm_medium", utm_medium); }
if(utm_campaign == null || utm_campaign == "") {} else { localStorage.setItem("utm_campaign", utm_campaign); }
if(gclid == null || gclid == "") {} else { localStorage.setItem("gclid", gclid); }

// Retrieve
$("[name='r_param']").val(localStorage.getItem("r"));
$("[name='utm_source']").val(localStorage.getItem("utm_source"));
$("[name='utm_medium']").val(localStorage.getItem("utm_medium"));
$("[name='utm_campaign']").val(localStorage.getItem("utm_campaign"));
$("[name='gclid']").val(localStorage.getItem("gclid"));

let r_param_value = localStorage.getItem("r");
var utm_source_value = localStorage.getItem("utm_source");
var utm_medium_value = localStorage.getItem("utm_medium");
var utm_campaign_value = localStorage.getItem("utm_campaign");
var utm_gclid_value = localStorage.getItem("glcid");


let urlParams = r_param_value + utm_medium_value + utm_campaign + utm_source + gclid;

console.log(window.location.href);
console.log(urlParams);
