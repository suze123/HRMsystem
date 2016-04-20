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
              if(result == 1){
              $("#login_ts").text("验证码错误！-_-!");
              $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
              $("#i_password").focus();
              $("#i_password").val("");
              $("#i_captcha").val("");
              };
              if(result == 2){
              $("#login_ts").text("用户名或密码错误！-_-!");
              $("#i_name").focus();
              $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
              $("#i_captcha").val("");
              };
              if(result == 3){
              $("#login_ts").text("用户名或密码错误！-_-!");
              $("#i_name").focus();
              $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
              $("#i_captcha").val("");
              };
             if(result == 0){
              $("#login_ts").text("登录成功！");
              location.href = "index.html";
              };
           });

      });
    // enter
    $(function(){
      document.onkeydown = function(e)
     {
        var ev = document.all ? window.event : e;
        if(ev.keyCode==13)
        {
          var zh=$("#i_name").val();
	  var pwd=$("#i_password").val();
	  var yzm=$("#i_captcha").val();
	  $.post("php/login.php",{'zh':zh,'pwd':pwd,'yzm':yzm},function(result){
             if(result == 1){
             $("#login_ts").text("验证码错误！-_-!");
             $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
             $("#i_password").focus();
             $("#i_password").val("");
             $("#i_captcha").val("");
             };
             if(result == 2){
             $("#login_ts").text("用户名或密码错误！-_-!");
             $("#i_name").focus();
             $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
             $("#i_captcha").val("");
             };
             if(result == 3){
             $("#login_ts").text("用户名或密码错误！-_-!");
             $("#i_name").focus();
             $("#img_code").attr("src", "../resources/captcha.php?t="+new Date().getTime());
             $("#i_captcha").val("");
             };
            if(result == 0){
             $("#login_ts").text("登录成功！");
             location.href = "index.html";
             };
          });

        }
     }
   });   
  
});

