let part1_choice1=document.querySelector(".option-one");
let part1_choice2=document.querySelector(".option-two");



let option_one_screen=document.querySelector(".option-one-screen");
let option_one_buttons=document.querySelector(".buttons1");

let option_two_screen=document.querySelector(".option-two-screen");
let option_two_buttons=document.querySelector(".buttons2");

let option_one_end_screen=document.querySelector(".option-one-end");


let option_two_end_screen=document.querySelector(".option-two-end");





/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
part1_choice1.onclick=function(){
  option_one_screen.style.display="block";
  option_one_buttons.style.display="block";
};

part1_choice2.onclick=function(){
  option_two_screen.style.display="block";
  option_two_buttons.style.display="block";
};

option_one_buttons.onclick=function(){
  option_one_end_screen.style.display="block";
};

option_two_buttons.onclick=function(){
  option_two_end_screen.style.display="block";
};
