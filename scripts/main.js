//Gloabl Variable
let sizeOfSquare = 12;

//Selecting DOMNodes
const body = document.querySelector("body");
const header = document.querySelector("header");
const container = document.getElementById("container");
const buttonContainer = document.getElementById("button-container");

//Styling DOM nodes using JS  
body.style.cssText = "display:flex; flex-direction:column; align-items:center";
header.style.cssText = "padding:0.8%; font-weight: 800; font-size:36px; color:Chocolate"
container.setAttribute('style','display:flex; flex-flow:row wrap; width: 520px; height:520px; border: 4px solid black');
buttonContainer.setAttribute('style','padding: 1% 0')
Array.from(buttonContainer.children).forEach((item) => item.style.cssText = "padding: 10px; margin:0 14px");

/*******************************
 * Initializing Event Listener *
 ******************************/
container.addEventListener('mouseover',fillColor);

buttonContainer.addEventListener('click',(e) => {
    if(e.target.id === "reset"){
        showPopup(); 
        deleteContainerChild();
        createGrid();
    }else{
        toggleColorButton(e);
    }
});


function toggleColorButton(e){
    if(e.target.tagName !== 'BUTTON') return;

    if(e.target.textContent === "Color"){
        e.target.textContent = "Black";
    }
    else{
        e.target.textContent = "Color";
    }
}

function showPopup(){
    let input = prompt("Enter the size of square (B/w 4 to 64)");
    if(isNaN(Number(input))){
        alert("Please enter a number");
        showPopup();
    }
    sizeOfSquare = Number(input);
}

function getRandomColor(){
    let color = "#" + (Math.random().toString(16)+"000000").substring(2,8);
    return color;
}

function fillColor(e){
    let color = "black";

    if(e.target.className !== "grid-box") return;
    if(btn.textContent !== "Black")
        color = getRandomColor();
    
    e.target.style.cssText += `; background: ${color}`;
}

function deleteContainerChild(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function createGrid(){
    for(let i = 1; i<= sizeOfSquare; i++){
        for(let j = 1; j<= sizeOfSquare; j++){
            const div = document.createElement('div');
            div.classList.add('grid-box');
            div.style.cssText = `flex: 1 0 ${100/sizeOfSquare}%`;
            container.appendChild(div);
        }
    }
}

window.onload = () => createGrid();

