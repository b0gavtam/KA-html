let div = document.getElementById("div");
let tid = document.getElementById("txt").value;
function f(tid) {
    fetch(`https://hur.webmania.cc/zips/${tid}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); //ha az első thennél nincs return a második nem fut le
      })
      .then(telepules => {
        console.log(telepules);
        div.innerHTML = telepules.zip + "<br>" + telepules.name + "<br>";
        
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
}