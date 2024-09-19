const url = "https://www.codewars.com/api/v1/users/"
let username;
let overallKeresGomb = document.getElementById("overallkeres");
let languageKeresGomb = document.getElementById("languagekeres");
//--------------------------------------------------------------------------------------------------------------------------------------------------
$("#k").hide();
$("#nk").hide();
$("#languagekeres").hide();

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
        error = ("Error 404 - User not found")
        document.getElementById("k").innerHTML = error;
    }
    setTimeout(200)
});
/*overallKeresGomb.addEventListener("click", function(){
    document.getElementById("k").style.visibility = "visible";
    })*/
$("#overallkeres").click(function (){ 
    $("#k").fadeIn(1500)
    $("#languagekeres").fadeIn(1000)
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
            if (data) {
                let li;
                const languages = data.ranks.languages;
                for (const language in languages) {
                        li += `Nyelv: ${language} <br>`
                        li += `Rank: ${languages[language].rank * -1} <br>`
                        li += `Név: ${languages[language].name} <br>`
                        li += `Szín: ${languages[language].color} <br>`
                        li += `Pontok: ${languages[language].score} <br> <br>`
                }
                document.getElementById("nk").innerHTML = li.replaceAll(undefined, "");
            }
            
            
     
    }
    catch(error){
        error = ("Error 404 - User not found")
        document.getElementById("nk").innerHTML = error;
    }
    setTimeout(200)
});
/*languageKeresGomb.addEventListener("click", function(){
    document.getElementById("nk").style.visibility = "visible";
})*/
$("#languagekeres").click(function (){ 
    $("#nk").fadeIn(1500)
})
