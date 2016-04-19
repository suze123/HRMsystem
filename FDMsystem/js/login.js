$(document).ready(function() {
  //窗口竖直居中
  var top=Math.round(($(window).height())/2-($("#d_login_bg").height())/2);
  $("#d_login_bg").css("margin-top",top);
  //登录提示
var login_ts="请输入用户名和密码！^_^ ";
  $("#login_ts").text(login_ts);
  //重新获取验证码
  $("#img_code").click(function(){
    $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
    $("#i_captcha").focus();
    $("#i_captcha").val("");
  });
  //重置
  $("#i_reset").click(function(){
	$("#i_name").val("");
	$("#i_password").val("");
	$("#i_captcha").val("");
	$("#i_name").focus();
    $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
  });
  //登录
   $("#i_submit").click(function(){
   
	var zh=$("#i_name").val();
	var pwd=$("#i_password").val();
	var yzm=$("#i_captcha").val();
	$.post("php/login.php",{'zh':zh,'pwd':pwd,'yzm':yzm},function(result){
        $("#login_ts").text(result);
        });
      });

  
});

