const url = "https://vvri.pythonanywhere.com/api/courses"
const sturl = "https://vvri.pythonanywhere.com/api/students"
let studentname;
let id;
let coursename;
let courseid;
let kurzuskeresgomb = document.getElementById("kurzuskeres");
let ujkurzusgomb = document.getElementById("ujkurzus");
let ujdiakgomb = document.getElementById("ujdiak");
let diakkeresgomb = document.getElementById("diakkeres");
let diakmodgomb = document.getElementById("diakvalt");
let diaktorlesgomb = document.getElementById("diaktorles");
let span = 1;
let tanhead;
//--------------------------------------------------------------------------------------------------------------------------------------------------
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
             let li = `<tr><th>ID</th><th>Kurzusnév</th><th id = "tanhead">Tanulók</th></tr>`;
             data.forEach(course => {
                 if (course.students.length > span) {
                     span = course.students.length;
                 }   
                 li += `<tr>
                 <td id = "kontent">${course.id}</td>
                 <td id = "kontent">${course.name}</td>`;
                 for (let i = 0; i < course.students.length; i++) {
                     li+=`<td id = "kontent">${course.students[i].id},${course.students[i].name}</td>`
                 }
                 li+=`</tr>`    
                });
             document.getElementById("li").innerHTML = li;
             tanhead = document.getElementById("tanhead");
             tanhead.setAttribute("colspan", span);
    } catch (error) {
        console.log("Hiba történt: " + error);
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
kurzuskeresgomb.addEventListener("click", async function Search() {
    try{
        id = document.getElementById("courseid").value;
      const response = await fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
            const data = await response.json();
                if (data) {
                    document.getElementById("k").innerHTML = "A kurzus neve: " + data.name;
                }
    }
    catch(error){
    console.log("Hiba történt: " + error);
    }
    Get();
})
kurzuskeresgomb.addEventListener("click", function(){
    document.getElementById("k").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
ujkurzusgomb.addEventListener("click", async function newCourse() {
    coursename = document.getElementById("coursename").value;
    try {
       const response = fetch(url, {
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
diakkeresgomb.addEventListener("click", function(){
    document.getElementById("diakadat").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diakmodgomb.addEventListener("click", async function studentChange(id, studentname, courseid) {
    id = document.getElementById("schange").value;
    studentname = document.getElementById("studentnamemod").value;
    courseid = document.getElementById("changeid").value;
    try {
        await fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
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
           document.getElementById("diakvaltoztatas").innerHTML = "Diák megváltoztatva." + "<br>" + "Név: " + data.name + "<br>" + "Kurzus: " + data.id;
       }
       Get();
   }    
    catch (error) {
        console.log("Hiba történt: " + error);
    }
})
diakmodgomb.addEventListener("click", function(){
    document.getElementById("diakvaltoztatas").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diaktorlesgomb.addEventListener("click", function studentToDelete(id) {
    id= document.getElementById("student2id").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        
    })
    document.getElementById("diaktorles").innerHTML = "Diák törölve."
    Get();
})
diaktorlesgomb.addEventListener("click", function(){
    document.getElementById("diaktorles").style.visibility = "visible";
})
