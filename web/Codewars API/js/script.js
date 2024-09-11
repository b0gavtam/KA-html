const url = "https://www.codewars.com/api/v1/users/"
let username;
let userkeresgomb = document.getElementById("userkeres");
//--------------------------------------------------------------------------------------------------------------------------------------------------
function notFound(res) {
    res.status(404).send("Not found.");
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
userkeresgomb.addEventListener("click", async function Search() {
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
                    li+=  `Összesített adatok: <br>`;
                    li += `Rank: ${data.ranks.overall.rank}`
                    li += `Név: ${data.ranks.overall.name}`
                    li += `Szín: ${data.ranks.overall.color}`
                    li += `Rank: ${data.ranks.overall.score}`
                    document.getElementById("k").innerHTML = li;
                }
                
    }
    catch(error){
        console.log(error)
    }
    setTimeout(200)
});
userkeresgomb.addEventListener("click", function(){
    document.getElementById("k").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------

