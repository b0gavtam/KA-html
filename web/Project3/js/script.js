const url = "https://vvri.pythonanywhere.com/api/courses"
const sturl = "https://vvri.pythonanywhere.com/api/students"
let id;
let coursename;
let course2name;
let courseid;
let studentname;

function Get() {
    fetch(url, {
        method: "GET"
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

function Search() {
    id= document.getElementById("courseid").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
            } else {
                console.log("Course not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
}
//új kurzus hozzáadása
function newCourse() {
    coursename = document.getElementById("coursename").value;
    fetch(url, {
         
        // Metódus hozzáadása
        method: "POST",
         
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            name: coursename
            
        }),
         
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("New course created:", data); // Assuming data is the new course object
    })
    .catch(error => console.error("Error creating new course:", error));
    Get();

}
//diáklista megjelenítése
fetch(sturl, {
    method: "GET"
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
         
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("New student in course created:", data); // Assuming data is the new course object
    })
    .catch(error => console.error("Error creating new course:", error));
}
//egy diák adatainak megjelenítése
function studentToSearch() {
    id= document.getElementById("studentid").value;
    fetch("https://vvri.pythonanywhere.com/api/students/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
            } else {
                console.log("Course not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
}
fetch(url, {
     
    // Metódus hozzáadása
    method: "PUT",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
    }),
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));

fetch(url, {
     
    // Metódus hozzáadása
    method: "PATCH",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        title: "foo",
        body: "bar"
    }), // Csak a módosítani kívánt adatokat kell küldeni
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));

fetch(sturl, {
     
    // Metódus  hozzáadása
    method: "DELETE",
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => {
    // Ha a válasz státusza OK, akkor visszatérünk egy üres JSON objektummal
    if (response.ok) {
        return response.json();
    }
    // Ha a válasz státusza nem OK, akkor dobunk egy hibát
    throw new Error('Network response was not ok.');
})
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json))
// Hibakezelés
.catch(error => console.error('There was a problem with the fetch operation:', error));

