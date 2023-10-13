adatok = [];

function getInputValue() {
    let t = document.getElementById("text").value;
    let text = "";
    for (let i = 0; i < adatok.length; i++) {
        text = document.getElementById("elements").innerHTML = 
        `<div class="card"> 
        ${adatok[i]}
        </div>`
}   
}