
var xmlHTTP;
var operation;
//var answer;
//function showResult(){
//
//    if(window.ActiveXObject){
//        xmlHTTP=new ActiveXObject("Microsoft.XMLHTTP")
//    }
//    else{
//        xmlHTTP=new XMLHttpRequest();
//    }
//    //alert("SHow result()")
//}
function process() {

    //showResult();
    var number1 = document.getElementById("n1").value;
    //window.alert(number1);
    var num1 = parseInt(number1);
    //window.alert(number1);
    var number2 = document.getElementById("n2").value;
    var num2 = parseInt(number2);

    //alert(operation);
    var answer;
    if (document.getElementById('+').checked) {
        operation='add';
    } else if (document.getElementById('-').checked) {
        operation='subs';
    }
    else if (document.getElementById('*').checked) {
        operation='mul';
    }
    else if (document.getElementById('/').checked) {
        operation='div';
    }
    //else {
    //    alert("Select a operation");
    //}
   // document.getElementById("cal").innerHTML = answer;
}
function loadDoc() {
    process();
    xmlHTTP=new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function () {
        alert(xmlHTTP.readyState);
        alert(xmlHTTP.status);
        if (xmlHTTP.readyState ==4&& xmlHTTP.status==200) {
           // var response=10;
           // alert(xmlHTTP.responseText);
            //xmlHTTP.responseText=response;
            document.getElementById("n3").value=xmlHTTP.responseText;
        }
    }
    xmlHTTP.open("GET","process.php?value1=num1&value2=num2&value3=operation", true);
    xmlHTTP.send();
    //alert("LoadDoc()")
}


/**
 * Created by saching on 2/15/2016.
 */
