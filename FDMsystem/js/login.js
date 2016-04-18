$(document).ready(function() {

var l=Math.round(($(window).height())/2-($("#d_login_bg").height())/2);
//var l=Math.round(($(window).height())/2);
alert($("#d_login_bg").height());
$("#d_login_bg").css("margin-top",l)
});