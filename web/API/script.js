function f() {
  let tid = document.getElementById("txt").value;
  fetch(`https://hur.webmania.cc/zips/${tid}.json`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); //ha az első thennél nincs return a második nem fut le
  })
  .then(zips => {
    console.log(zips);
    Irj(zips)
    
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
function Irj(zips) {
  let div = document.getElementById("div");
  div.innerHTML = zips.zip + "<br>" + zips.name + "<br>";
}