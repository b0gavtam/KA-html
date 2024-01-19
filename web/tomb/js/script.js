 let tomb = [1,2,3,4,5];
function elso() 
{
    let kiiras = document.getElementById("kiiras");
    kiiras.textContent = tomb[0];
}
function masodik()
{
    let kiiras = document.getElementById("kiiras");
    kiiras.textContent = tomb[1];
}
function harmadik() 
{
    let kiiras = document.getElementById("kiiras"); 
    kiiras.textContent = tomb[2];
}
function hozzaadas() 
{  
    var textarea = document.getElementById("szoveg").value;
    tomb.push(textarea);
    
}
function osszes()
{  
    let kiiras = document.getElementById("kiiras");
    kiiras.textContent = tomb;
}
function hossz() 
{
    let kiiras = document.getElementById("kiiras");
    kiiras.textContent = "A tömb " + tomb.length + " elemet tartalmaz.";
}
function torol() 
{
    let kiiras = document.getElementById("kiiras");
    var torol = document.getElementById("torolindex").value;
    kiiras.textContent = "az eltávolított érték: "+ tomb.splice(torol,1);
}