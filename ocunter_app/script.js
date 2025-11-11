const Counterbox=document.getElementById("counter");
 let number=0;
function clickadd(){
    number++;
    Counterbox.textContent=number;
console.log(number);
}

const Minusbox=document.getElementById("minus");

function clicksub(){
    number--;
    Counterbox.textContent=number;
console.log(number);
   
}