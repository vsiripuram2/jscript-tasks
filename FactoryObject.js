var factoryobject = function(name , rollNO , clas2) {
   
    var tempObject = new Object() ;

    tempObject.name = name;
    tempObject.rollNO = rollNO;
    tempObject.clas2 = clas2 ;

    tempObject.allDetatails = function() {

          console.log(tempObject.name + "   " + tempObject.rollNO);
    }
 return tempObject;
}

var name1 = factoryobject("gopi" , 4);
var name2 = factoryobject("venki" , 3);

name1.allDetatails();

/*  basically object creation mainly with factory method , constructor and prototype methos

*/