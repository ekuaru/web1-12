

var answer=0;

 document.getElementById('form').onsubmit = function(){
  
for(var i = 1; i <= word; i++) {
 if(i/3 === 0){
  answer = 'Fizz';
}
else if(i/5 === 0){
  answer = 'Buzz';
}
 
 if(i/5 === 0 && i/3 === 0){
  answer = 'FizzBuzz';
}
 
var li = document.createElement('li');
 li.textContent = answer;
 document.getElementById('list').appendChild(li);
}


