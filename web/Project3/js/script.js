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
function Get() {
    fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>ID</th><th>Kurzusnév</th><th id = "tanhead">Tanulók</th></tr>`;
        json.forEach(course => {
            if (course.students.length > span) {
                span = course.students.length;
            }   
            li += `<tr>
            <td>${course.id}</td>
            <td>${course.name}</td>`;
            for (let i = 0; i < course.students.length; i++) {
                li+=`<td>${course.students[i].id},${course.students[i].name}</td>`
            }
            li+=`</tr>`
            
        });
        document.getElementById("li").innerHTML = li;
        tanhead = document.getElementById("tanhead");
        tanhead.setAttribute("colspan", span);
    });
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
kurzuskeresgomb.addEventListener("click", function Search() {
    id= document.getElementById("courseid").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById("k").innerHTML = "A kurzus neve: " + data.name;
            } 
    })
.catch(error => console.log("Hiba történt: " + error))
Get();
})
kurzuskeresgomb.addEventListener("click", function(){
    document.getElementById("k").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
ujkurzusgomb.addEventListener("click", function newCourse() {
    coursename = document.getElementById("coursename").value;
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name: coursename
            
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(data => {
        console.log("New course created:", data);
        document.getElementById("nk").innerHTML = "Új kurzus létrehozva."
    })
    Get();

})
ujkurzusgomb.addEventListener("click", function(){
    document.getElementById("nk").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
ujdiakgomb.addEventListener("click", function studentInCourse(studentname, courseid) {
    studentname = document.getElementById("studentname").value;
    courseid = document.getElementById("course2id").value;
    fetch(sturl, {
        method: "POST",
        body: JSON.stringify({
            name: studentname,
            course_id: courseid
            
        }),
         
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            console.log("New student in course created:", data);
            document.getElementById("ndk").innerHTML = "Diák hozzáadva  a kurzushoz: " + data.id + `\t` + data.name;
        }
    })
    .catch(error => console.error("Error creating new course:", error));
    Get();
})
ujdiakgomb.addEventListener("click", function(){
    document.getElementById("ndk").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diakkeresgomb.addEventListener("click", function studentToSearch(id) {
    id= document.getElementById("studentid").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
               document.getElementById("diakadat").innerHTML = "Diák neve: " +  data.name;
            }
    })
Get();
})
diakkeresgomb.addEventListener("click", function(){
    document.getElementById("diakadat").style.visibility = "visible";
})
//--------------------------------------------------------------------------------------------------------------------------------------------------
diakmodgomb.addEventListener("click", function studentChange(id, studentname, courseid) {
    id = document.getElementById("schange").value;
    studentname = document.getElementById("studentnamemod").value;
    courseid = document.getElementById("changeid").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
        method: "PUT",
        body: JSON.stringify({
            name: studentname,
            course_id: courseid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log("Student updated:", data);
        document.getElementById("diakvaltoztatas").innerHTML = "Diák megváltoztatva." + "<br>" + "Név: " + data.name + "<br>" + "Kurzus: " + data.id;
    })
    Get();
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
