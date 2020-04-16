// JavaScript Document
//five errors

let main = document.querySelector('main');//there is only one main element-dioesnt really do anyhting
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); //document was documant

submitButton.addEventListener('click', function(e) { 
  let personName = document.querySelector('input[type="text"]').value; //we want to grab the inputed text from the text box once button is submitted
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>'; 
  main.appendChild(para);//paragraph is undefined should be para
  body.setAttribute('class', 'meow');
  e.target.style.display = "block"; //??
  console.log("=^..^="); //wiht single quotes the console thought the text was undefined until icahnged it to double qoutes
}); //dont think that will do mugh though haha

//cute cat picture only made it idsplay for a bit and display the greeting for a second