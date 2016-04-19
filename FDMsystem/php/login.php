<?php
session_start();
$zh=addslashes($_POST['zh']);
$pwd=addslashes($_POST['pwd']);
$yzm=addslashes($_POST['yzm']);
$code=$_SESSION['helloweba_char'];
if($yzm<>$code)
{
echo "验证码错误！-_-!";
exit();
}
echo "验证码正确。";
exit();
?>
