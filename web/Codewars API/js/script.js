const url = "https://www.codewars.com/api/v1/users/"
let username;
let userkeresgomb = document.getElementById("userkeres");
//--------------------------------------------------------------------------------------------------------------------------------------------------
function notFound(res) {
    res.status(404).send("Not found.");
}

async function Get() {
    try {
     const response = await fetch(url, {
             method: "GET",
             headers: {
                 "Content-type": "application/json; charset=UTF-8",
                 "Access-Control-Allow-Origin": "*"
             }
         })
         const data = await response.json()
                if (data) {
                    document.getElementById("k").innerHTML = 
                }
             let li
             data.forEach(languages => {  
                 li += `<tr>
                 <td id = "kontent">${ranks.id}</td>
                 <td id = "kontent">${ranks.name}</td>`;
                 for (let i = 0; i < ranks.students.length; i++) {
                     li+=`<td id = "kontent">${ranks.students[i].id},${ranks.students[i].name}</td>`
                 }
                 li+=`</tr>`    
                });
    } catch (error) {
        console.log("Hiba történt: " + error);
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
userkeresgomb.addEventListener("click", async function Search() {
    try{
        id = document.getElementById("courseid").value;
      const response = await fetch("https://www.codewars.com/api/v1/users/" + id)
            const data = await response.json();
                if (data) {
                    document.getElementById("k").innerHTML = "A user neve: " + data.name;
                }
    }
    catch(error){
        Posts.findOne({_id: req.params.id, deleted: false}).exec()
      .then(function(post) {
        if(!post) {
          notFound(res);
        }})
        console.log("fos")
    }
    Get()
    setTimeout(200)
});
userkeresgomb.addEventListener("click", function(){
    document.getElementById("k").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
ujkurzusgomb.addEventListener("click", async function newCourse() {
    coursename = document.getElementById("coursename").value;
    try {
       const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: coursename
                
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await response.json()
            document.getElementById("nk").innerHTML = "Új kurzus létrehozva." + data;
        
        Get();
        
    } catch (error) {
        console.log("Hiba történt: " + error);
    }

})
setTimeout(200);
ujkurzusgomb.addEventListener("click", function(){
    document.getElementById("nk").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
ujdiakgomb.addEventListener("click", async function studentInCourse(studentname, courseid) {
    studentname = document.getElementById("studentname").value;
    courseid = document.getElementById("course2id").value;
    try {
       const response = await fetch(sturl, {
            method: "POST",
            body: JSON.stringify({
                name: studentname,
                course_id: courseid
                
            }),
             
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const data = await response.json()
            if (data) {
                console.log("New student in course created:", data);
                document.getElementById("ndk").innerHTML = "Diák hozzáadva  a kurzushoz: " + data.id + `\t` + data.name;
            }
        Get();
        
    } catch (error) {
        console.log("Hiba történt: " + error)
    }
})
setTimeout(200);
ujdiakgomb.addEventListener("click", function(){
    document.getElementById("ndk").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diakkeresgomb.addEventListener("click", async function studentToSearch(id) {
    id= document.getElementById("studentid").value;
    try {
       const response = await fetch("https://vvri.pythonanywhere.com/api/students/" + id)
            const data = await response.json()
                if (data) {
                    console.log(data);
                   document.getElementById("diakadat").innerHTML = "Diák neve: " +  data.name;
                }
        
        Get();
        
    } catch (error) {
        console.log("Hiba történt: " + error);
    }
})
setTimeout(200);
diakkeresgomb.addEventListener("click", function(){
    document.getElementById("diakadat").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diakmodgomb.addEventListener("click", async function studentChange(id, studentname, courseid) {
    id = document.getElementById("schange").value;
    studentname = document.getElementById("studentnamemod").value;
    courseid = document.getElementById("changeid").value;
    try {
       const response = await fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
           method: "PUT",
           body: JSON.stringify({
               name: studentname,
               course_id: courseid
           }),
           headers: {
               "Content-type": "application/json; charset=UTF-8"
           }
       })
       const data = await response.json();
       if (data) {
           console.log("Student updated:", data);
           document.getElementById("diakvaltoztatas").innerHTML = "Diák megváltoztatva." + "<br>" + "Név: " + data.name + "<br>" + "ID: " + data.id;
       }
       Get();
   }    
    catch (error) {
        console.log("Hiba történt: " + error);
    }
})
setTimeout(200);
diakmodgomb.addEventListener("click", function(){
    document.getElementById("diakvaltoztatas").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diaktorlesgomb.addEventListener("click", async function studentToDelete(id) {
    try {
        id= document.getElementById("student2id").value;
        const response = await fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            
        })
        const data = await response.json();
           if (data) {
               document.getElementById("diaktorles").innerHTML = "Diák törölve."
            }
        Get();  
    } catch (error) {
        console.log("Hiba történt: " + error);
    }
})
setTimeout(200);
diaktorlesgomb.addEventListener("click", function(){
    document.getElementById("diaktorles").style.visibility = "visible";
})
