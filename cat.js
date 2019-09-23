let fs = require("fs");
module.exports = function (catString){
  let fileName = catString.split(" ")[1];
  fs.readFile('./'+fileName, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
  });

}

