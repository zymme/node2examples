console.log(global);
var myFruit = function(fruitarray, pickone) {
return fruitarray[pickone - 1];
}
fruit = [
'apple', 'orange', 'lime'];
myFruit(fruit, 2);
myFruit(fruit, 1);




myFruit(fruit, 0);
var myFruit = function(fruitarray, pickone) {
if(pickone <= 0) 
{
  return 'invalid number';
  }
return fruitarray[pickone - 1];
};


myFruit(fruit, 0);
myFruit(fruit, 1);



