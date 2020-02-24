var peopleProto = function() {

};

peopleProto.prototype.age = 0 ;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city  = "no city";

peopleProto.prototype.allDetails = function() {
  console.log(this.name + " ," + this.age);
};

var name1 = new peopleProto();
name1.name = 'gopi';
name1.age = 24;
name2.city = 'vijayawada';

name1.allDetails();

console.log('name' in name1);
console.log(name1.hasOwnProperty('name'));

