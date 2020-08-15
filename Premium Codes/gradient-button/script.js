var obj = document.getElementById('btn');
var ctr=0;

setInterval(function(){
  obj.style.backgroundImage=`linear-gradient(${ctr}deg,aqua,orange)`;
  ctr=ctr+10;
},10);

