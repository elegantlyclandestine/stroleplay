const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

console.log('Enter possible bypass characters here in the dialogues that follow.\nPress CTRL+C when finished.')
looper()

function looper() {
    rl.question('> ', (ans) => {
        var data = fs.readFileSync('./resources/bypassCharacters.json');
        var parsed = JSON.parse(data)
        var pushData = ans.split('')
        var bypassAdd = {
          pushData
        }
        parsed.push(bypassAdd)
        bypass = JSON.stringify(parsed)
        rl.close;
        fs.writeFile('./resources/bypassCharacters.json', bypass, err => {
          // error checking
          if(err) throw err;
          
          console.log("\nNew bypass data successfully added\n");
          looper2()
      });   
      });
}

function looper2() {
    rl.question('> ', (ans) => {
        var data = fs.readFileSync('./resources/bypassCharacters.json');
        var parsed = JSON.parse(data)
        var pushData = ans.split('')
        var bypassAdd = {
          pushData
        }
        parsed.push(bypassAdd)
        bypass = JSON.stringify(parsed)
        rl.close;
        fs.writeFile('./resources/bypassCharacters.json', bypass, err => {
          // error checking
          if(err) throw err;
          
          console.log("\nNew bypass data successfully added\n");
          looper()
      });   
      });
}
