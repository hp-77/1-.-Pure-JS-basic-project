var btn=document.querySelector('#btn');
var inp=document.querySelector('input');
var nl=document.querySelectorAll('div');


btn.addEventListener('click',function(){
 var val=inp.value;    
 console.log(typeof val);                      //This must be inside event listener else it will hold the value that is before clicking the button
 for(var i=0; i<nl.length;i++){

 }


})