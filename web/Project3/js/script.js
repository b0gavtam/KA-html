const url = "https://vvri.pythonanywhere.com/api/courses"
const sturl = "https://vvri.pythonanywhere.com/api/students"
let studentname;
let id;
let coursename;
let courseid;
//kurzusok betöltése
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
        let li = `<tr><th>Id</th><th>Név</th></tr>`;
        json.forEach(course => {
            li += `<tr>
            <td>${course.id}</td>
            <td>${course.name}</td>
    
            </tr>`;
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
        document.getElementById("nk").innerHTML = "új kurzus létrehozva:", data.name;
    })
    .catch(error => console.error("Error creating new course:", error));
    Get();

}
//diáklista megjelenítése
function getStudent() {
    fetch(sturl, {
        method: "GET",
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>Id</th><th>Név</th></tr>`;
        json.forEach(student => {
            li += `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            
            </tr>`;
        });
        document.getElementById("diak").innerHTML = li;
    });
}

//diák hozzáadása kurzushoz
function studentInCourse() {
    studentname = document.getElementById("studentname").value;
    courseid = document.getElementById("course2id").value;
    fetch(sturl, {
         
        // Metódus hozzáadása
        method: "POST",
         
        // Küldendő test vagy tartalom hozzáadása
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
            document.getElementById("ndk").innerHTML = "Diák hozzáadva  a kurzushoz." + "Név:" + data.name + "ID:" + data.id;
        }
        else{
            console.log("already in")
        }
    })
    .catch(error => console.error("Error creating new course:", error));
    getStudent()
}
//egy diák adatainak megjelenítése
function studentToSearch() {
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
}
//diák törlése
function studentToDelete() {
    id= document.getElementById("student2id").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        
    })
    document.getElementById("diaktorles").innerHTML = "diák törölve."
    getStudent();
}
//diák módosítása
function studentChange() {
    studentname = document.getElementById("studentname").value;
    courseid = document.getElementById("changeid").value;
    id = document.getElementById("schange").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id, {
        method: "PUT",
        body: JSON.stringify({
            name: coursename,
            course_id: courseid,
            id: id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            console.log(data);
            document.getElementById("diakvaltoztatas").innerHTML = data.name;
        } else {
            console.log("Student not found");
        }
    })
    .catch(error => console.error("Error creating new course:", error))
    getStudent();
}