courseid = document.getElementById("courseid")

fetch( 'https://vvri.pythonanywhere.com/api/courses')
        .then(response => response.json())
        .then(data => {
            if (data)
                data.forEach(element => {
                    console.log(element)
            })
        })
        .catch(error => console.log("Hiba történt: " + error))
