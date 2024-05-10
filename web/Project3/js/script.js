const url = "https://vvri.pythonanywhere.com/api/courses"
const sturl = "https://vvri.pythonanywhere.com/api/students"
let studentname;
let id;
let coursename;
let courseid;
//kurzusok és diákok betöltése
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
        let li = `<tr><th>Id</th><th>Név</th><th colspan = "6">Tanulók</th></tr>`;
        json.forEach(course => {
            
            li += `<tr>
            <td>${course.id}</td>
            <td>${course.name}</td>`;
            for (let i = 0; i < course.students.length; i++) {
                li+=`<td>${course.students[i].id},${course.students[i].name}</td>`
                
            }
            li+=`</tr>`
        });
        document.getElementById("li").innerHTML = li;
    });
}
//kurzuskeresés
function Search() {
    id= document.getElementById("courseid").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById("k").innerHTML = data.name;
            } else {
                console.log("Course not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
Get();
}
//új kurzus hozzáadása
function newCourse() {
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
        document.getElementById("nk").innerHTML = "új kurzus létrehozva."
    })
    .catch(error => console.error("Error creating new course:", error));
    Get();

}

//diák hozzáadása kurzushoz
function studentInCourse(studentname, courseid) {
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
            document.getElementById("ndk").innerHTML = "Diák hozzáadva  a kurzushoz:" + data.id + `\t` + data.name;
        }
        else{
            console.log("already in")
        }
    })
    .catch(error => console.error("Error creating new course:", error));
    Get();
}
//egy diák adatainak megjelenítése
function studentToSearch(id) {
    id= document.getElementById("studentid").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
               document.getElementById("diakadat").innerHTML = data.name;
            } else {
                console.log("Student not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
Get();
}
//diák módosítása
function studentChange(id, studentname, courseid) {
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
        document.getElementById("diakvaltoztatas").innerHTML = "Diák megváltoztatva." + "<br>" + "Név: " + data.name + "<br>" + "Kurzus: " + data.id
    })
    .catch(error => console.error("Error updating student:", error));
    Get();
}
//diák törlése
function studentToDelete(id) {
    id= document.getElementById("student2id").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        
    })
    document.getElementById("diaktorles").innerHTML = "diák törölve."
    Get();
}
