let elso = "";
let masodik = "";
let harmadik = "";
let negyedik = "";

function changeColor(e) {
    let index = e.dataset.indexNumber;
    if (index == "1") {
        if (elso == "red") {
            elso = "blue"
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = elso;
        }
        else{
            elso = "red";
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = elso;
        }
    }
    if (index == "2") {
        if (masodik == "red") {
            masodik = "blue";
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = masodik;
        }
        else{
            masodik = "red";
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = masodik;
        }
    }
    if (index == "3") {
        if (harmadik == "red") {
            harmadik = "blue";
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = harmadik;
        }
        else{
            harmadik = "red";
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = harmadik;
        }
    }
    if (index == "4") {
        if (negyedik == "red") {
            negyedik = "blue"
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = negyedik;
        }
        else{
            negyedik = "red";
            document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = negyedik;
        }
    }
    if (elso == "red" && masodik == "red"  && harmadik == "red" && negyedik == "red") {
        setTimeout(rendereles,500);
        elso = "";
        masodik = "";
        harmadik = "";
        negyedik = "";
    }
    else if (elso == "blue" && masodik == "blue"  && harmadik == "blue" && negyedik == "blue") {
        setTimeout(rendereles,500);
        elso = "";
        masodik = "";
        harmadik = "";
        negyedik = "";
    }
}
function rendereles(){
    let e = document.querySelector(".container");
    e.remove();
    document.body.innerHTML +=`<div class = "container">
    <div class="item" onclick="changeColor(this)" data-index-number="1"></div>
    <div class="item" onclick="changeColor(this)" data-index-number="2"></div>
    <div class="item" onclick="changeColor(this)" data-index-number="3"></div>
    <div class="item" onclick="changeColor(this)" data-index-number="4"></div>
    </div>`;
}