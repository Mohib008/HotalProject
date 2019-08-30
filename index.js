/*var Name = "Mohib";
var Age = "30 Year old ";
var Job = " and i am Web Developer for 3 Years still looking for something new to do";
var Place = " living at Mississauga.";

alert("My name is " + Name + Age + Job + Place);

var p = prompt("What is the password password?", "");

if(p.toLowerCase()=="password" && p.length==8) {
    alert("Access granted!");
} else {
    alert(p.toUpperCase() + " is wrong!");
} 

var Name = prompt("Enter your name:");
try 
{
    var leng = Name.length; // length of user input
    if(leng > 5) {
        throw "Long Name";
    } else if(leng < 5) {
        throw "Short Name";
    } else {
        throw "5 letter name";
    }
}
catch(err)
{
    alert(err);
} 


var d = new Date();
var day = d.getDay();
var WeekDays = new Array("sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday");
document.write(WeekDays[day]);

var myBook = /s{1}/g;
var test = myBook.test("My book name is Javascript, ll");
alert(test); 


var myExp = /mohib\n/g;
var test = myExp.test("Myname is mohib\n test");
alert(test); 

var myRegExp = /string/g;
var str = "this is my test string string string string".match(myRegExp);
var matches = str.length;
alert(matches)


 function time() {
 var d = new Date();
 var hour = d.getHours();
 var minute = d.getMinutes();
 var second = d.getSeconds();
 if(minute<10) {
     minute = "0" + minute;
 }
 var str = hour + ":" + minute + ":" + second;
 document.getElementById("demo0").innerHTML = star;
 } 

var delayedAlert = setTimeout(function() {alert("Delayed!");}, 5000);


var MyWallet = {
    cards: 
{
    visa: 1,
    mstercard: 1,
    amex: 0,
    debit: 1
},
cash: 
{
    canadian: 1500,
    American: 2200.50,
    Euros: "No use"
},
id: "Yes"
}

alert(MyWallet.cash.Euros);


function newAjax() {
    var ajax;
    if(window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    } else {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return ajax;
};
*/