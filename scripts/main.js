let myImage = document.getElementById('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/boxes.jpg') {
      myImage.setAttribute ('src','images/chucknorris.jpg');
    } else {
      myImage.setAttribute ('src','images/boxes.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


/*
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('rabits', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('rabits')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('rabits');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function(){
      setUserName();
  }
*/