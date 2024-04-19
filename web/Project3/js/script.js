const url = "https://vvri.pythonanywhere.com/api/courses"

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
    


