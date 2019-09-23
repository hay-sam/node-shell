let request = require("request");
module.exports = function (urlString) {
  let url = urlString.split(" ")[1];
  request(url,function (error, response, body) {
    // body is the decompressed response body

    process.stdout.write(body)
  }) // Print the HTML for the Google homepage.


}
