<?php



//echo $answer;
function calculate($num1,$num2,$op){
if($_SERVER['REQUEST_METHOD']=='GET'){
ob_clean();
    $ans=0;

if($op.equals("add")){
    $ans=$num1+$num2;
}
elseif($op.equals("subs")){
    $ans=$num1-$num2;
}
elseif($op.equals("mul")){
    $ans=$num1*$num2;
}
elseif($op.equals("div")){
    $ans=$num1/$num2;
}
else{
    echo "Choose an operation";
}
    echo $ans;
    exit();
}}
?>


