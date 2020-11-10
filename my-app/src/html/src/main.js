// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';


// let iceCream = 'chocolate';

// if (iceCream === 'chocolate') {
//     alert('Yay, I love chocolate ice cream!');
// } else {
//     alert('Awwww, but chocolate is my favorite...');
// }

// document.querySelector('body').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }



let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src'); // src 속성값을 불러 mySrc 변수에 담음
    if (mySrc === 'images/firefox.jpg') { // src 속성값이 맞을 경우 naver.jpg 이미지로 변경
        myImage.setAttribute('src', 'images/naver.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');

    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}