 
 let randomnumber = Math.floor((Math.random()*10)+1);

let attemptNumber= 0;
function check(){
 let input= document.getElementById('inputNumber');
 let attempttag = document.getElementById('attempt');
 let inputvalue = input.value;
 attemptNumber++;
 attempttag.textContent = "Attempt"+attemptNumber;
 attempttag.style.color = "tomato";

 if(inputvalue===''){

        attempttag.textContent="Enter any Vaid number "
        attempttag.style.color="red";
        return;
    
 }

 

 if(inputvalue==randomnumber){
    attempttag.textContent ="you have guessed right in attempt "+ attemptNumber;
    attempttag.style.color = "green";
    document.getElementById('submit').disabled = true;

 }

else if (inputvalue>10){
    attempttag.textContent = "you have entered to high number ";
    attempttag.style.color="red";

 }
 else if (inputvalue<1){
    attempttag.textContent="you have enterd to low number"
    attempttag.style.color="red";
 }
 else;

}

function reset(){
    attemptNumber =0;
 randomnumber = Math.floor((Math.random()*10)+1);
 let attempttag = document.getElementById('attempt').textContent="";
 document.getElementById('submit').disabled = false;

}


