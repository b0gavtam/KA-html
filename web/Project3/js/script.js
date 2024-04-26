const url = "https://vvri.pythonanywhere.com/api/courses"
let id;
let coursename;

fetch(url, {
    method: "GET"
})
    .then(response => response.json())
    .then(json => {
    let li = `<tr><th>id</th><th>Név</th></tr>`;
    json.forEach(course => {
        li += `<tr>
        <td>${course.id}</td>
        <td>${course.name}</td>

        </tr>`;
    });
    document.getElementById("li").innerHTML = li;
});

function Search() {
    id= document.getElementById("courseid").value;
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id)
        .then(response => response.json())
        .then(data => {
            if (data) {
                console.log(data);
                document.getElementById("kiir").innerHTML = data;
            } else {
                console.log("Course not found");
            }
    })
.catch(error => console.log("Hiba történt: " + error))
}
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

    fetch(url, {
        method: "GET"
    })
        .then(response => response.json())
        .then(json => {
        let li = `<tr><th>id</th><th>Név</th></tr>`;
        json.forEach(course => {
            li += `<tr>
            <td>${course.id}</td>
            <td>${course.name}</td>
    
            </tr>`;
        });
        document.getElementById("li").innerHTML = li;
    });
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

fetch(url, {
     
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

