let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Obi-Wan", lastName: "Kenobi", job: "jedi lovag"},
    {firstName: "Yoda", lastName: "", job: "jedi mester"}
 ]
let templateLiteral = ``;
for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i].firstName, heroes[i].lastName, heroes[i].job + "\n")
    templateLiteral += 
    `<div class="kartyak">
            <img src="${heroes[i].firstName}.png">
            <div class="szoveg">
                <h3>${heroes[i].firstName}, ${heroes[i].lastName}</h3>
                <span>${heroes[i].job}</span>
            </div>
        </div>
        `
}
document.body.innerHTML = templateLiteral;