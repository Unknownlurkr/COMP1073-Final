/*
Create a simple application that meets the following requirements:

1.) Includes a button that the user can click

2.) When the click event happens on this button, the JSON file https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json is requested from the server using a modern and asynchronous approach

3.) When the requested information is returned, the data (name, species,favFoods, age and photo) is displayed in the browser



Upload the completed file to your own COMP1073FinalExam GitHub repo in a folder called Q3. Include a link to this folder in your answer for Question 3.

For the toolbar, press ALT+F10 (PC) or ALT+FN+F10 (Mac).
 */

let btn = document.querySelector('button');
var requestUrl = "https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json"; //reference to the json file
var req = new XMLHttpRequest();
req.open('GET', requestUrl);
req.responseType = 'json';
req.send();
btn.onclick = function (){ //onclickj event that triggers the event once button is clicked
    var cat = req.response;
    console.log(cat);
    cats(cat);
};
function cats(jsonObj){//XHR req that grabs the cat name, favFood,age, and speicies from the json file
    let cat = jsonObj.cats;
    let info = document.createElement('article');
        let h2 = document.createElement('h2');
        let img1 = document.createElement('img');
        let img2 = document.createElement('img');
        let img3 = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let sect = document.querySelector('section');
        img1.setAttribute('src', 'https://unknownlurkr.github.io/funky-products/img/' + cat[i].photo);
        img2.setAttribute('src', 'https://unknownlurkr.github.io/funky-products/img/' + cat[i].photo);
        img3.setAttribute('src', 'https://unknownlurkr.github.io/funky-products/img/' + cat[i].photo);
        img1.setAttribute('alt', cat[i].name);
        img2.setAttribute('alt', cat[i].name);
        img3.setAttribute('alt', cat[i].name);
        h2.textContent = cat[i].name;
        p1.textContent = 'details' + cat[i].species;
        p2.textContent = 'price' + cat[i].favFoods;
        p3.textContent = 'price' + cat[i].age;
        info.appendChild(img1);
        info.appendChild(img2);
        info.appendChild(img3);
        info.appendChild(h2);
        info.appendChild(p1);
        info.appendChild(p2);
        sect.appendChild(info);
}

