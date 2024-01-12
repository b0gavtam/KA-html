let gomb = document.querySelector("button");
const arrowfuggveny = (szo) => szo.split("").reverse().join("");
gomb.addEventListener("click", ()=>{
    let szo = document.getElementById("t").value;
    document.getElementById("f").value = arrowfuggveny(szo);

});

