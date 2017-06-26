

var answer=0;

for(var i = 1; i <= word; i++) {
 if(i/3 === 0){
  answer = Fizz;
}
else if(i/5 === 0){
  answer = Buzz;
}
 if(i/5 === 0 && i/3 === 0){
  answer = FizzBuzz;
}
}

document.getElementById('form').onsubmit = function(){
 window.alert(document.getElementById('form').answer.value);
 return false;
};
