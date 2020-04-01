var myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
    if (mySrc === 'bilder/marc.jpg'){
      myImage.setAttribute('src', 'bilder/spagetti.jpg');
    }else{
      myImage.setAttribute('src','bilder/marc.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla ist cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla ist cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
