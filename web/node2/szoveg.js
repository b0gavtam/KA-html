const fs = require('fs')
const os = require('os');
os.homedir();
fs.writeFile('./web/node2/szoveg.txt', 
`All this running around 
I cant fight it much longer
Somethings tryin to get out
And its never been closer
If my take-off fails
Make up some other story
But if I never come back
Tell my mother Im sorry
Baby now Im ready moving on
Oh, but maybe I was ready all along
Oh, Im ready for the moment and the sound
Oh, but maybe I was ready all along
Baby now Im ready, moving on
Oh, but maybe I was ready all along
Oh, Im ready for the moment and the sound
Oh, but maybe I was ready all along`, (err) =>
{
    if (err) {
        
        console.log(err)
    }
})
fs.readFile('./web/node2/szoveg.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });
