let pwdCmd = require("./pwd");
let ls = require('./ls');
let cat = require ("./cat");
let curl = require("./curl");
process.stdout.write('prompt >');
process.stdin.on("data", data =>{
  const cmd = data.toString().trim();
  if(cmd === "pwd"){
    pwdCmd();
  }
  else if (cmd === "ls"){
    ls();
  }
  else if(cmd.startsWith("cat")){
    cat(cmd);
  }
  else if(cmd.startsWith("curl")){
    curl(cmd);
  }
  else{
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write('\nprompt > ')
})
