console.log("Filter successfully activated.")
const bypassCharacters = require('./resources/bypassCharacters.json')

var sample = "cusswordtest";
    letters = sample.split('')

let sampleMessage = "cusswordtest"

for (i = 0; i < letters.length; i++) {
    if(letters[i] == "*") {
        console.log("Found wildcard")
        for (i = 0; i < bypassCharacters.length; i++) {
            var characterReplacement = bypassCharacters[i]
            console.log("Now on bypass character " + characterReplacement + "\n")
            letters[i] = characterReplacement
            console.log("Bypassed word: " + letters + "\n")
            // store temporary variants in an array and send to JSON, same method used in bypassAdd and curseAdd
        }
    }
}

if(sampleMessage.includes(bypassCharacters)){
    console.log("Message has bypassed curse word")
    //assume curse word has wildcards but did not land on any for this loop
} else {
    console.log("Message has complete curse word")
    //assume it is the curse word properly spelled, delete
}

/*
if (sampleMessage.includes()) {
    //message includes bypassed curse word, delete and return
}
*/