const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

console.log('Enter curse words here in the dialogues that follow.\nUse the wildcard character [*] to denote variants for the filter to detect (one variant at a time).\nPress CTRL+C when finished.')
looper()

function looper() {
    rl.question('> ', (ans) => {
        var data = fs.readFileSync('./resources/filterWords.json');
        var parsed = JSON.parse(data)
        var bypassAdd = {
            ans
        }
        parsed.push(bypassAdd)
        bypass = JSON.stringify(parsed)
        rl.close;
        fs.writeFile('./resources/filterWords.json', bypass, err => {
          // error checking
          if(err) throw err;
          
          console.log("\nNew curse word data successfully added\n");
          looper2()
      });   
      });
}

function looper2() {
    rl.question('> ', (ans) => {
        var data = fs.readFileSync('./resources/filterWords.json');
        var parsed = JSON.parse(data)
        var bypassAdd = {
          ans
        }
        parsed.push(bypassAdd)
        bypass = JSON.stringify(parsed)
        rl.close;
        fs.writeFile('./resources/filterWords.json', bypass, err => {
          // error checking
          if(err) throw err;
          
          console.log("\nNew curse word data successfully added\n");
          looper()
      });   
      });
}
