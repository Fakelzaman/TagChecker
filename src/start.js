const checkText = require("./index");
const readline = require('readline');
const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });
return new Promise(resolve => rl.question("Paste some text in to check:", ans => {
      rl.close();
      console.log(`Checking: ${ans}`)
      checkText(ans);
  }))
