<?php
session_start();
$zh=addslashes($_POST['zh']);
$pwd=addslashes($_POST['pwd']);
$yzm=addslashes($_POST['yzm']);
$code=$_SESSION['helloweba_char'];
$userid=123;
$userpwd=123;
if($zh<>$userid)
{
echo 2;
exit();
}
if($pwd<>$userpwd)
{
echo 3;
exit();
}
if($yzm<>$code)
{
echo 1;
exit();
}
echo 0;
exit();
?>
