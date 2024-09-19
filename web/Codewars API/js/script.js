const url = "https://www.codewars.com/api/v1/users/"
let username;
let overallKeresGomb = document.getElementById("overallkeres");
let languageKeresGomb = document.getElementById("languagekeres");
//--------------------------------------------------------------------------------------------------------------------------------------------------
function notFound(res) {
    res.status(404).send("Not found.");
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
overallKeresGomb.addEventListener("click", async function overallSearch() {
    try{
        username = document.getElementById("userid").value;
        const response = await fetch("https://www.codewars.com/api/v1/users/" + username, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        })

            const data = await response.json();
                if (data) {
                    let li;
                    li=  `Összesített adatok: <br>`;
                    li += `Rank: ${data.ranks.overall.rank * -1} <br>`
                    li += `Név: ${data.ranks.overall.name}  <br>`
                    li += `Szín: ${data.ranks.overall.color}  <br>`
                    li += `Pontok: ${data.ranks.overall.score}  <br>`
                    document.getElementById("k").innerHTML = li;
                }
                
    }
    catch(error){
        console.log(error)
    }
    setTimeout(200)
});
overallKeresGomb.addEventListener("click", function(){
    document.getElementById("k").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
languageKeresGomb.addEventListener("click", async function languageSearch() {
    try{
        username = document.getElementById("userid").value;
        const response = await fetch("https://www.codewars.com/api/v1/users/" + username, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
            }
        })

            const data = await response.json();  
            let li;
            let obj = new Object(data.ranks.languages)
            li += obj;
            
            console.log(data.ranks.languages);
            /*for (let i = 0; i < data.ranks.languages; i++) {
                li += `Rank: ${languages[i].rank} + <br>`
                li += `Név: ${languages[i].name} + <br>`
                li += `Szín: ${languages[i].color} + <br>`
                li += `Pontok: ${languages[i].score} + <br>`
             
            }*/
           
                        
                document.getElementById("nk").innerHTML = li;     
    }
    catch(error){
        error = ("Error 404 - User not found")
        document.getElementById("nk") = error;
    }
    setTimeout(200)
});
languageKeresGomb.addEventListener("click", function(){
    document.getElementById("nk").style.visibility = "visible";
})
