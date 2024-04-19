const url = "https://vvri.pythonanywhere.com/api/courses"
const id = document.getElementById("courseid");
const coursename = document.getElementById("coursename").value;

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

function Search(id) {
    fetch("https://vvri.pythonanywhere.com/api/courses/" + id ,{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
    let li = `<tr><th>id</th><th>Név</th></tr>`;
    data(course => {
        li += `<tr>
        <td>${course.id}</td>
        <td>${course.name}</td>

        </tr>`;
    });
    document.getElementById("kiir").innerHTML = li;
    })
}
function newCourse(coursename) {
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
     
    // Konvertálás JSON-ba
    .then(response => response.json())
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

