let storyText = document.getElementById('storytextbox');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');
let gate1 = 1;


start();




function start(){
    storyText.innerHTML = "Welcome to Boogey. <br> You got lost in the appalachian mountains. Find your way out.";
   
    choice2.style.display = 'none';
    choice3.style.display = 'none';
    choice4.style.display = 'none';

    choice1.innerHTML = 'Next';
    
}

function Choice1(){

    choice2.style.display = 'flex';
    choice3.style.display = 'flex';
    choice4.style.display = 'flex';

    storyText.innerHTML = "Which direction will you go?"
    choice1.innerHTML = "North"
    choice2.innerHTML ="South"
    choice3.innerHTML = "East"
    choice4.innerHTML = "west"
}






