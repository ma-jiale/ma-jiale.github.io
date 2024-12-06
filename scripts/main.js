const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Sakuraji_Mai02.png") {
    myImage.setAttribute("src", "images/Sakuraji_Mai03.png");
  } else {
    myImage.setAttribute("src", "images/Sakuraji_Mai02.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `麻衣学姐欢迎${myName}!`;
    }
  }

  
if (!localStorage.getItem("name")) {
setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = `麻衣学姐欢迎${storedName}!`;
}

myButton.onclick = function () {
    setUserName();
  };
  
  

