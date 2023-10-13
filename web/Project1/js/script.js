function Váltás() {
    let valtas = document.body;
    valtas.classList.toggle("dark-mode");
    let ikonvaltas = document.getElementById("button");
    ikonvaltas.classList.toggle("dark-gomb");
    let oravaltas = document.querySelectorAll(".ora");
    let napvaltas = document.querySelectorAll(".nap");
    
    if (valtas.className == "dark-mode") 
    {
        oravaltas.forEach(element =>{element.style.background = "radial-gradient(#bdc3c7, #2c3e50)"})
        napvaltas.forEach(element =>{element.style.background = "radial-gradient(#bdc3c7, #2c3e50)"})
    } 
    else 
    {
        oravaltas.forEach(element =>{element.style.background = "rgba(255, 255, 255, 0.5)"})
        napvaltas.forEach(element =>{element.style.background = "rgba(255, 255, 255, 0.5)"})
    }
    
}