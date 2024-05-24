const fs = require('fs')
if (!fs.existsSync('./web/node2/assets')) {
    fs.mkdir('./web/node2/assets', err => {
      if (err) {
        console.log(err);
      }
      console.log('mappa létrehozva.');
    });
} 
fs.writeFile('./web/node2/assets/szoveg.txt', 
`All this running around 
I can't fight it much longer
Somethings tryin' to get out
And it's never been closer

If my take-off fails
Make up some other story
But if I never come back
Tell my mother I'm sorry

Baby, now Im ready moving on
Oh, but maybe I was ready all along
Oh, Im ready for the moment and the sound
Oh, but maybe I was ready all along

Baby, now I'm ready, moving on
Oh, but maybe I was ready all along
Oh, Im ready for the moment and the sound
Oh, but maybe I was ready all along`, (err) =>
{
    if (err) {
        
        console.log(err)
    }
})
fs.readFile('./web/node2/assets/szoveg.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });
