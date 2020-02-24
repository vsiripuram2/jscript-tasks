var constructorObj = function(name , rollNo , clas2){
   this.name = name ;
   this.rollNo = rollNo;
   this.clas2 = clas2;
   this.allDetails = function() {
       console.log(this.name + "  " + this.rollNo);
   };
};

var num1 = new constructorObj("venki" , 4);
var num2 = new constructorObj("gopi" , 5);

num1.allDetails();