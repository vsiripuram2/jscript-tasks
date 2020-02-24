/* alert box popup boxes */
alert("first alert");

/* confirm box */
confirm("are you sure?");

/* prompt box */
prompt("please enter your name");

/* datatypes diveded into javascript 
primitive datatype: Boolean , number , string , number , undefined , symbol
Non-primitive datatype: object , Array

*/

var num , Boolean  , string , undefined , object1, Array1 ;
num = 34 ;
boolean = false;
string = "my work should be done";
undefined ;
object1 = {
    name : 'venkatat' ,
    rollNo : 34
} ;
array1 = [1,2,3,4,5];
start();
function start(){
    document.getElementById('j1').innerHTML = num + boolean + string + object1.name + array1[2] ;
}

