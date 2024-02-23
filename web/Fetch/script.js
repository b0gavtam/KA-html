let div = document.getElementById("div");
function f(userid) {
    let userid = document.getElementById("txt").value;
    fetch(`https://jsonplaceholder.org/users/?id=${userid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); //ha az első thennél nincs return a második nem fut le
      })
      .then(user => {
        console.log(user);
        div.innerHTML = user.id +"<br>" + user.firstname + "<br>" + user.lastname + "<br>" + user.email + "<br>" + user.birthDate + "<br>" + user.phone + "<br>" ;
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}